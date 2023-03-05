import { webpack } from "replugged";
import * as Types from "../types";
export const MessageStore = webpack.getByProps(
  "getMessages",
  "getMessage",
) as unknown as Types.MessageStore;
export const { exports: MessageConstructor } = webpack.getBySource(
  /\.compact.*\.zalgo.*\.childrenMessageContent/,
  { raw: true },
) as unknown as Types.MessageConstructor;
