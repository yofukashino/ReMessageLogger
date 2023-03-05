export { types as DefaultTypes } from "replugged";
import { types as DefaultTypes } from "replugged";
export { ReactElement } from "react";
import { ReactElement } from "react";
export interface messageDiv {
  "aria-describedby": undefined | string;
  "aria-labelledby": string;
  "aria-roledescription": string;
  "aria-setsize": number;
  childrenAccessories: ReactElement;
  childrenButtons: ReactElement;
  childrenExecutedCommand: null;
  childrenHeader: ReactElement;
  childrenHighlight: null;
  childrenMessageContent: ReactElement;
  childrenRepliedMessage: null | ReactElement;
  childrenSystemMessage: null | ReactElement;
  className: string;
  compact: boolean;
  "data-list-item-id": string;
  hasReply: boolean;
  hasThread: boolean;
  isSystemMessage: boolean;
  onBlur: DefaultTypes.AnyFunction;
  onClick: DefaultTypes.AnyFunction;
  onContextMenu: DefaultTypes.AnyFunction;
  onFocus: DefaultTypes.AnyFunction;
  onKeyDown: DefaultTypes.AnyFunction;
  onMouseLeave: DefaultTypes.AnyFunction;
  onMouseMove: DefaultTypes.AnyFunction;
  role: string;
  tabIndex: number;
  zalgo: boolean;
}
export interface User {
  avatar: string;
  avatarDecoration: undefined | string;
  bot: boolean;
  desktop: boolean;
  discriminator: string;
  email: null | string;
  flags: number;
  guildMemberAvatars: {
    [key: number]: string;
  };
  hasBouncedEmail: boolean;
  hasFlag: DefaultTypes.AnyFunction;
  id: string;
  isStaff: DefaultTypes.AnyFunction;
  isStaffPersonal: DefaultTypes.AnyFunction;
  mfaEnabled: boolean;
  mobile: boolean;
  nsfwAllowed: undefined | boolean;
  personalConnectionId: null | string;
  phone: null | string;
  premiumType: undefined | number;
  premiumUsageFlags: number;
  publicFlags: number;
  purchasedFlags: number;
  system: boolean;
  username: string;
  verified: boolean;
  createdAt: Date;
  tag: string;
}
export interface Message {
  isDeleted?: boolean;
  activity: null | string;
  application: null | object;
  applicationId: null | string;
  attachments: object[];
  author: User;
  blocked: boolean;
  bot: boolean;
  call: null | string;
  channel_id: string;
  codedLinks: string[];
  colorString: undefined | string;
  components: [];
  content: string;
  customRenderedContent: undefined;
  editedTimestamp: object;
  embeds: [];
  flags: number;
  giftCodes: [];
  id: string;
  interaction: null | unknown;
  interactionData: null | unknown;
  interactionError: null | unknown;
  isSearchHit: boolean;
  loggingName: null | unknown;
  mentionChannels: [];
  mentionEveryone: boolean;
  mentionRoles: [];
  mentioned: boolean;
  mentions: [];
  messageReference: null | unknown;
  nick: undefined | string;
  nonce: null | unknown;
  pinned: boolean;
  reactions: Array<{
    burst_colors: [];
    burst_count: number;
    burst_me: boolean;
    burst_user_ids: string[];
    count: number;
    count_details: {
      burst: number;
      normal: number;
    };
    emoji: {
      id: null | string;
      name: string;
    };
    me: boolean;
    me_burst: boolean;
  }>;
  roleSubscriptionData: undefined | unknown;
  state: string;
  stickerItems: unknown[];
  stickers: unknown[];
  timestamp: object;
  tts: boolean;
  type: number;
  webhookId: null | string;
}
export interface MessageStore {
  focusedMessageId: DefaultTypes.AnyFunction;
  getLastCommandMessage: DefaultTypes.AnyFunction;
  getLastEditableMessage: DefaultTypes.AnyFunction;
  getMessage: (channelId: string, messageId: string) => Message;
  getMessages: DefaultTypes.AnyFunction;
  hasCurrentUserSentMessage: DefaultTypes.AnyFunction;
  hasPresent: DefaultTypes.AnyFunction;
  initialize: DefaultTypes.AnyFunction;
  isLoadingMessages: DefaultTypes.AnyFunction;
  jumpedMessageId: DefaultTypes.AnyFunction;
  whenReady: DefaultTypes.AnyFunction;
}
export interface MessageDeleteDispatch {
  channelId: string;
  guildId: string;
  id: string;
  type: string;
  RMLD?: boolean;
  [index: string]: unknown;
}
export interface GenericModule {
  [key: string]: DefaultTypes.AnyFunction;
}
export interface MessageConstructor {
  exports: GenericModule;
}
export interface Settings {
  dontSaveData: boolean;
  cachedMessageRecord: Message[];
}
