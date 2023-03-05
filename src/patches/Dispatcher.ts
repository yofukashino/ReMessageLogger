import { webpack } from "replugged";
import { PluginInjector, SettingValues, FluxDispatcher } from "../index";
import { MessageStore } from "../lib/requiredModules";
import { defaultSettings } from "../lib/consts";
import * as MessageLoggerApi from "../lib/MessageLoggerApi";
import * as Utils from "../lib/utils";
import * as Types from "../types";
export const patchDispatcher = (): void => {
  PluginInjector.instead(
    FluxDispatcher,
    "dispatch",
    (args: [Types.MessageDeleteDispatch], res, instance) => {
      const [dispatch] = args;
      if (dispatch.RMLD && dispatch.type === "MESSAGE_DELETE") return res.call(instance, ...args);
      if (
        dispatch.type !== "MESSAGE_CREATE" &&
        dispatch.type !== "MESSAGE_DELETE" &&
        dispatch.type !== "MESSAGE_DELETE_BULK" &&
        dispatch.type !== "MESSAGE_UPDATE" &&
        dispatch.type !== "LOAD_MESSAGES_SUCCESS"
      )
        return res.call(instance, ...args);
      if (dispatch.type === "MESSAGE_DELETE") {
        const deltedMessage = MessageLoggerApi.getCachedMessage(dispatch.id, dispatch.channelId);
        MessageLoggerApi.saveDeletedMessage(deltedMessage);
        return res.call(instance, { type: "RML_FORCE_UPDATE_MESSAGE", id: dispatch.id });
      }

      return res.call(instance, ...args);
    },
  );
};
