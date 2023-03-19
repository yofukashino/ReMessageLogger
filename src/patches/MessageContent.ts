import { PluginInjector } from "../index";
import { MessageContentType } from "../lib/requiredModules";
import * as MessageLoggerApi from "../lib/MessageLoggerApi";
import * as Types from "../types";
export const patchMessageContents = (): void => {
  PluginInjector.after(
    MessageContentType,
    "type",
    (args: [{ content: string[]; message: Types.Message }], res: Types.ReactElement) => {
      res.props.children = [
        args[0]?.message?.editHistory?.length > 0
          ? args[0]?.message?.editHistory?.map((edit) => MessageLoggerApi.renderEdit(edit))
          : null,
        ...res.props.children,
      ];
      return res;
    },
  );
};
