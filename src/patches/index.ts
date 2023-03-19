import { patchEditUtilsModule } from "./EditUtils";
import { patchMessage } from "./Message";
import { patchMessageContents } from "./MessageContent";
import { patchMessageDomainModel } from "./MessageDomainModel";
import { patchMessageStoreDispatches } from "./MessageStoreDispatches";
export const applyInjections = (): void => {
  patchEditUtilsModule();
  patchMessage();
  patchMessageContents();
  patchMessageDomainModel();
  patchMessageStoreDispatches();
};
