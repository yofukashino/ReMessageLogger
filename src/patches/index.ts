import { patchEditUtilsModule } from "./EditUtils";
import { patchMessage } from "./Message";
import { patchMessageDomainModel } from "./MessageDomainModel";
import { patchMessageStoreDispatches } from "./MessageStoreDispatches";
export const applyInjections = (): void => {
  patchEditUtilsModule();
  patchMessage();
  patchMessageDomainModel();
  patchMessageStoreDispatches();
};
