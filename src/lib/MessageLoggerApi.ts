import { SettingValues } from "../index";
import { MessageStore } from "./requiredModules";
import * as Types from "../types";
export const getCachedMessage = (id: string, channelId: string): Types.Message => {
  const cached = SettingValues.get("cachedMessageRecord", []).find((m) => m?.id === id);
  if (cached) return cached;
  if (channelId) return MessageStore.getMessage(channelId, id); // if the message isn't cached, it returns undefined
  return null;
};
export const saveDeletedMessage = (deletedMessage: Types.Message): void => {
  const deletedCached = SettingValues.get("cachedMessageRecord", []);
  if (!deletedMessage) return;
  deletedMessage.isDeleted = true;
  deletedCached.push(deletedMessage);
  SettingValues.set("cachedMessageRecord", deletedCached);
};
