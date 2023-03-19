import { webpack } from "replugged";
import { PluginInjector } from "../index";
import { MessageDomainModel } from "../lib/requiredModules";
import * as Types from "../types";
export const patchMessageDomainModel = (): void => {
  const functionKey = webpack.getFunctionKeyBySource(
    MessageDomainModel,
    /\w\.customRenderedContent=\w\.customRenderedContent;/,
  ) as unknown as string;
  PluginInjector.after(
    MessageDomainModel,
    functionKey,
    (args: [Types.Message], res: Types.Message) => {
      res.deleted = args[0].deleted || false;
      res.editHistory = args[0].editHistory || [];
      return res;
    },
  );
};
