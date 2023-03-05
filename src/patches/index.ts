import { patchDispatcher } from "./Dispatcher";
import { patchMessage } from "./Message";
export const applyInjections = (): void => {
  patchDispatcher();
  patchMessage();
};
