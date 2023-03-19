import { webpack } from "replugged";
import { PluginInjector } from "../index";
import { EditUtils } from "../lib/requiredModules";
import * as Types from "../types";
export const patchEditUtilsModule = (): void => {
  const edit = webpack.getFunctionKeyBySource(
    EditUtils,
    /interactionData:\w\.interactionData/,
  ) as unknown as string;
  PluginInjector.after(
    EditUtils,
    edit,
    (args: [Types.Message, Types.Message], res: Types.Message) => {
      res.deleted = args[0].deleted;
      res.editHistory = args[0].editHistory;
      res.attachments = args[0].attachments;
      console.log(args, res);
      return res;
    },
  );
  console.log("pathced editor 3 ");
};
