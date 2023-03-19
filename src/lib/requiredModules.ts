import { webpack } from "replugged";
import * as Types from "../types";
export const DiscordConstantsModule = webpack.getBySource(
  /command:"giphy"/,
) as unknown as Types.DefaultTypes.ObjectExports;
export const DiscordConstants = {
  Permissions: webpack.getExportsForProps(DiscordConstantsModule, [
    "ADMINISTRATOR",
    "MANAGE_GUILD",
  ]),
  MessageFlags: webpack.getExportsForProps(DiscordConstantsModule, ["EPHEMERAL", "CROSSPOSTED"]),
};
export const MessageStore = webpack.getByProps(
  "getMessages",
  "getMessage",
) as unknown as Types.MessageStore;
export const { exports: MessageConstructor } = webpack.getBySource(
  /\.compact.*\.zalgo.*\.childrenMessageContent/,
  { raw: true },
) as unknown as Types.GenericExport;
export const MessageDataStore = webpack.getBySource(
  "wasAtEdge",
) as unknown as Types.MessageDataStore;
export const BigIntUtils = webpack.getByProps(
  "deserialize",
  "invert",
  "has",
) as unknown as Types.BigIntUtils;
export const Timestamp = webpack.getBySource(
  ".Messages.MESSAGE_EDITED_TIMESTAMP_A11Y_LABEL.format",
) as unknown as Types.ComponentClass;
export const moment = webpack.getBySource("parseTwoDigitYear") as unknown as Types.moment;
export const EditUtils = webpack.getBySource(
  /\.edited_timestamp.*\.reactions.*\.interactionData/,
) as unknown as Types.GenericModule;
export const { exports: MessageDomainModel } = webpack.getBySource(
  "isFirstMessageInForumPost=function",
  { raw: true },
) as unknown as Types.GenericExport;
