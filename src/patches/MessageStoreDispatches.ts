import { webpack } from "replugged";
import { FluxDispatcher, PluginInjector } from "../index";
import { EditUtils, MessageDataStore } from "../lib/requiredModules";
import * as MessageLoggerApi from "../lib/MessageLoggerApi";
import * as Utils from "../lib/utils";
import * as Types from "../types";

export const patchMessageStoreDispatches = (): void => {
  const MessageStoreActions = Utils.findInTree(
    FluxDispatcher,
    (m) => m?.name == "MessageStore" && Utils.isObject(m?.actionHandler),
  ) as Types.MessageStoreActionHandler;
  const editString = webpack.getFunctionKeyBySource(
    EditUtils,
    /interactionData:\w\.interactionData/,
  ) as unknown as string;
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
      const editedmessageCahce = messageCahce
        .update(args[0].message.id, (m) =>
          args[0].message.content !== m.editHistory?.[0]?.content &&
          args[0].message.content !== m.content
            ? m.set("editHistory", [
                ...(m.editHistory || []),
                MessageLoggerApi.makeEdit(args[0].message, m),
              ])
            : m,
        )
        .update(args[0].message.id, (m) => EditUtils[editString](m, args[0].message));
      console.log(editedmessageCahce.get(args[0].message.id));
      MessageDataStore.commit(editedmessageCahce);
    },
  );
};
