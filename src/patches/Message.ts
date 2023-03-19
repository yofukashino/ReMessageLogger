import { webpack } from "replugged";
import { PluginInjector } from "../index";
import { MessageConstructor, MessageDataStore } from "../lib/requiredModules";
import * as Utils from "../lib/utils";
import * as Types from "../types";
export const patchMessage = (): void => {
  const defaultFunction = webpack.getFunctionKeyBySource(
    MessageConstructor,
    /\.compact.*\.zalgo.*\.childrenMessageContent/,
  ) as unknown as string;
  PluginInjector.before(MessageConstructor, defaultFunction, (args) => {
    const message = Utils.findInTree(args[0], (m) =>
      Utils.hasProps(m, ["author", "content"]),
    ) as Types.Message;
    const realMessage = MessageDataStore.getOrCreate(message.channel_id).get(message.id);
    console.log(args, realMessage);
    if (!message) return args;
    if (message.deleted) args[0].className += " reMessageLoggerDeleted";
    return args;
  });
};
