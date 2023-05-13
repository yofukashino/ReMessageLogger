import { PluginInjector, SettingValues } from "../index";
import { defaultSettings } from "../lib/consts";
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
      res.props.className +=
        SettingValues.get("deleteStyle", defaultSettings.deleteStyle) === "text"
          ? " deleteText"
          : " delteOverlay";
      return res;
    },
  );
};
