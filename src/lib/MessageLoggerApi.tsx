import { webpack } from "replugged";
import { Parser, PluginLogger, SettingValues, UserStore } from "../index";
import { defaultSettings } from "../lib/consts";
import {
  BigIntUtils,
  DiscordConstants,
  EditUtils,
  LocaleManager,
  MessageClassesAndStyles,
  MessageDataStore,
  Timestamp,
  moment,
} from "./requiredModules";
import * as Types from "../types";
const editString = webpack.getFunctionKeyBySource(
  EditUtils,
  /interactionData:\w\.interactionData/,
) as unknown as string;
export const mutateMessage = (
  cache: Types.MessageCache,
  id: string,
  isBulk: boolean,
): Types.MessageCache => {
  try {
    const msg = cache.get(id) as Types.Message;
    if (!msg) return cache;
    const shouldIgnore =
      BigIntUtils.has(msg.flags, DiscordConstants.MessageFlags.EPHEMERAL) ||
      (SettingValues.get("ignoreBots", defaultSettings.ignoreBots) && msg.author?.bot) ||
      (SettingValues.get("ignoreSelf", defaultSettings.ignoreSelf) &&
        msg.author?.id === UserStore.getCurrentUser().id) ||
      (SettingValues.get("ignorePurges", defaultSettings.ignorePurges) && isBulk);

    if (shouldIgnore) cache = cache.remove(id) as Types.MessageCache;
    else
      cache = cache.update(id, (m) => {
        m.deleted = true;
        m.attachments = m.attachments.map((attachment) => {
          attachment.deleted = true;
          return attachment;
        });
        return m;
      });
  } catch (error) {
    PluginLogger.error("Error while handling delete", error);
  }
  return cache;
};
export const handleDelete = (
  data: Types.deleteData,
  isBulk: boolean,
  cache?: Types.MessageCache,
): Types.MessageCache => {
  try {
    cache = MessageDataStore.getOrCreate(data.channelId);
    if (!cache || (!isBulk && !cache.has(data.id))) return cache;

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
export const handleEdit = (
  data: Types.editData,
  cache?: Types.MessageCache,
): Types.MessageCache => {
  try {
    cache
      .update(data.message.id, (m) => {
        if (
          data.message.content !== m.editHistory?.[0]?.content &&
          data.message.content !== m.content
        )
          m.editHistory = [...(m.editHistory || []), makeEdit(data.message, m)];
        m.content = data.message.content;
        return m;
      })
      .update(data.message.id, (m) => EditUtils[editString](m, data.message));
  } catch (error) {
    PluginLogger.error("Error while handling edit", error);
  }
  return cache;
};
export const renderEdit = (edit: { timestamp: any; content: string }): Types.ReactElement => (
  <div {...{ className: "messagelogger-edited" }}>
    {Parser.parse(edit.content)}
    <Timestamp
      {...{
        timestamp: edit.timestamp,
        isEdited: true,
        isInline: false,
      }}>
      <span {...{ className: MessageClassesAndStyles.edited }}>
        {LocaleManager.Messages.MESSAGE_EDITED as string}
      </span>
    </Timestamp>
  </div>
);
