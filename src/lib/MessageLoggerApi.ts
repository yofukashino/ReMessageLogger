import { PluginLogger, SettingValues, UserStore } from "../index";
import { defaultSettings } from "../lib/consts";
import { BigIntUtils, DiscordConstants, MessageDataStore, moment } from "./requiredModules";
import * as Types from "../types";
export const mutateMessage = (
  cache: Types.MessageCache,
  id: string,
  isBulk: boolean,
): Types.MessageCache => {
  const msg = cache.get(id) as Types.Message;
  if (!msg) return;
  const shouldIgnore =
    BigIntUtils.has(msg.flags, DiscordConstants.MessageFlags.EPHEMERAL) ||
    (SettingValues.get("ignoreBots", defaultSettings.ignoreBots) && msg.author?.bot) ||
    (SettingValues.get("ignoreSelf", defaultSettings.ignoreSelf) &&
      msg.author?.id === UserStore.getCurrentUser().id) ||
    (SettingValues.get("ignorePurges", defaultSettings.ignorePurges) && isBulk);

  if (shouldIgnore) cache = cache.remove(id) as Types.MessageCache;
  else
    cache = cache.update(id, (m) =>
      m.set("deleted", true).set(
        "attachments",
        m.attachments.map((attachment) => {
          attachment.deleted = true;
          return attachment;
        }),
      ),
    );

  return cache;
};
export const handleDelete = (
  data: Types.deleteData,
  isBulk: boolean,
  cache?: Types.MessageCache,
): Types.MessageCache => {
  try {
    cache = MessageDataStore.getOrCreate(data.channelId);
    if (cache === null || (!isBulk && !cache.has(data.id))) return cache;

    if (isBulk) for (const id of data.ids) cache = mutateMessage(cache, id, true);
    else cache = mutateMessage(cache, data.id, false);
  } catch (error) {
    PluginLogger.error("Error while handling delete", error);
  }
  return cache;
};
export const makeEdit = (
  newMessage: Types.Message,
  oldMessage: Types.Message,
): Types.editMessage => ({
  timestamp: moment.call(newMessage.edited_timestamp),
  content: oldMessage.content,
});
