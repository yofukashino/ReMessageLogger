import { FluxDispatcher, PluginInjector } from "../index";
import { MessageDataStore } from "../lib/requiredModules";
import * as MessageLoggerApi from "../lib/MessageLoggerApi";
import * as Utils from "../lib/utils";
import * as Types from "../types";

export const patchMessageStoreDispatches = (): void => {
  const MessageStoreActions = Utils.findInTree(
    FluxDispatcher,
    (m) => m?.name == "MessageStore" && Utils.isObject(m?.actionHandler),
  ) as Types.MessageStoreActionHandler;

  PluginInjector.instead(
    MessageStoreActions.actionHandler,
    "MESSAGE_DELETE",
    (args: [Types.deleteData]) => {
      const messageCahce = MessageLoggerApi.handleDelete(args[0], false);
      MessageDataStore.commit(messageCahce);
    },
  );

  PluginInjector.instead(
    MessageStoreActions.actionHandler,
    "MESSAGE_DELETE_BULK",
    (args: [Types.deleteData]) => {
      const messageCahce = MessageLoggerApi.handleDelete(args[0], true);
      MessageDataStore.commit(messageCahce);
    },
  );

  PluginInjector.instead(
    MessageStoreActions.actionHandler,
    "MESSAGE_UPDATE",
    (args: [Types.editData]) => {
      const messageCahce = MessageDataStore.getOrCreate(args[0].message.channel_id);
      if (messageCahce === null || !messageCahce.has(args[0].message.id)) return false;
      const editedmessageCahce = MessageLoggerApi.handleEdit(args[0], messageCahce);
      MessageDataStore.commit(editedmessageCahce);
    },
  );
};
