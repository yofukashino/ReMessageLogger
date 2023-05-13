export { types as DefaultTypes } from "replugged";
import { types as DefaultTypes } from "replugged";
export { ReactElement, ComponentClass } from "react";

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
  deleted?: boolean;
  editHistory: [];
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
  timestamp: string;
  edited_timestamp?: string;
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
export interface BigIntUtils {
  add: DefaultTypes.AnyFunction;
  combine: DefaultTypes.AnyFunction;
  deserialize: DefaultTypes.AnyFunction;
  equals: DefaultTypes.AnyFunction;
  filter: DefaultTypes.AnyFunction;
  getFlag: DefaultTypes.AnyFunction;
  has: DefaultTypes.AnyFunction;
  hasAny: DefaultTypes.AnyFunction;
  invert: DefaultTypes.AnyFunction;
  remove: DefaultTypes.AnyFunction;
}
export interface moment extends DefaultTypes.AnyFunction {
  momentProperties: DefaultTypes.AnyFunction;
  suppressDeprecationWarningsdeprecationHandler: DefaultTypes.AnyFunction;
  parseTwoDigitYear: DefaultTypes.AnyFunction;
  createFromInputFallback: DefaultTypes.AnyFunction;
  ISO_8601: DefaultTypes.AnyFunction;
  RFC_2822: DefaultTypes.AnyFunction;
  updateOffset: DefaultTypes.AnyFunction;
  defaultFormat: DefaultTypes.AnyFunction;
  defaultFormatUtc: DefaultTypes.AnyFunction;
  lang: DefaultTypes.AnyFunction;
  langData: DefaultTypes.AnyFunction;
  version: DefaultTypes.AnyFunction;
  fn: DefaultTypes.AnyFunction;
  min: DefaultTypes.AnyFunction;
  max: DefaultTypes.AnyFunction;
  now: DefaultTypes.AnyFunction;
  utc: DefaultTypes.AnyFunction;
  unix: DefaultTypes.AnyFunction;
  months: DefaultTypes.AnyFunction;
  isDate: DefaultTypes.AnyFunction;
  locale: DefaultTypes.AnyFunction;
  invalid: DefaultTypes.AnyFunction;
  duration: DefaultTypes.AnyFunction;
  isMoment: DefaultTypes.AnyFunction;
  weekdays: DefaultTypes.AnyFunction;
  parseZone: DefaultTypes.AnyFunction;
  localeData: DefaultTypes.AnyFunction;
  isDuration: DefaultTypes.AnyFunction;
  monthsShort: DefaultTypes.AnyFunction;
  weekdaysMin: DefaultTypes.AnyFunction;
  defineLocale: DefaultTypes.AnyFunction;
  updateLocale: DefaultTypes.AnyFunction;
  locales: DefaultTypes.AnyFunction;
  weekdaysShort: DefaultTypes.AnyFunction;
  normalizeUnits: DefaultTypes.AnyFunction;
  relativeTimeRounding: DefaultTypes.AnyFunction;
  relativeTimeThreshold: DefaultTypes.AnyFunction;
  calendarFormat: DefaultTypes.AnyFunction;
  HTML5_FMT: DefaultTypes.AnyFunction;
}
export interface MessageDataStore extends DefaultTypes.AnyFunction {
  clear: DefaultTypes.AnyFunction;
  clearCache: DefaultTypes.AnyFunction;
  commit: DefaultTypes.AnyFunction;
  forEach: DefaultTypes.AnyFunction;
  get: DefaultTypes.AnyFunction;
  getOrCreate: (channelId: string) => MessageCache;
  hasPresent: DefaultTypes.AnyFunction;
  addCachedMessages: DefaultTypes.AnyFunction;
  findNewest: DefaultTypes.AnyFunction;
  findOldest: DefaultTypes.AnyFunction;
  first: DefaultTypes.AnyFunction;
  focusOnMessage: DefaultTypes.AnyFunction;
  forAll: DefaultTypes.AnyFunction;
  getAfter: DefaultTypes.AnyFunction;
  getByIndex: DefaultTypes.AnyFunction;
  getManyAfter: DefaultTypes.AnyFunction;
  getManyBefore: DefaultTypes.AnyFunction;
  has: DefaultTypes.AnyFunction;
  hasAfterCached: DefaultTypes.AnyFunction;
  hasBeforeCached: DefaultTypes.AnyFunction;
  indexOf: DefaultTypes.AnyFunction;
  jumpToMessage: DefaultTypes.AnyFunction;
  jumpToPresent: DefaultTypes.AnyFunction;
  last: DefaultTypes.AnyFunction;
  loadComplete: DefaultTypes.AnyFunction;
  loadFromCache: DefaultTypes.AnyFunction;
  loadStart: DefaultTypes.AnyFunction;
  map: DefaultTypes.AnyFunction;
  merge: DefaultTypes.AnyFunction;
  mutate: DefaultTypes.AnyFunction;
  receiveMessage: DefaultTypes.AnyFunction;
  receivePushNotification: DefaultTypes.AnyFunction;
  reduce: DefaultTypes.AnyFunction;
  remove: DefaultTypes.AnyFunction;
  removeMany: DefaultTypes.AnyFunction;
  replace: DefaultTypes.AnyFunction;
  reset: DefaultTypes.AnyFunction;
  toArray: DefaultTypes.AnyFunction;
  truncate: DefaultTypes.AnyFunction;
  truncateBottom: DefaultTypes.AnyFunction;
  truncateTop: DefaultTypes.AnyFunction;
  update: (messageId: string, anyFunction: DefaultTypes.AnyFunction) => MessageCache;
  _clearMessages: DefaultTypes.AnyFunction;
  _merge: DefaultTypes.AnyFunction;
  _channelMessages: {
    [key: string]: MessageCache;
  };
}
export interface MessageCache extends MessageDataStore {
  cached: boolean;
  channelId: string;
  error: boolean;
  hasFetched: boolean;
  hasMoreAfter: boolean;
  hasMoreBefore: boolean;
  jumpFlash: boolean;
  jumpReturnTargetId: null | string;
  jumpSequenceId: number;
  jumpTargetId: null | string;
  jumpTargetOffset: number;
  jumpType: string;
  jumped: boolean;
  jumpedToPresent: boolean;
  loadingMore: boolean;
  ready: boolean;
  revealedMessageId: null | string;
  _after: object;
  _before: object;
  _array: Message[];
  _map: object;
}
export interface MessageStoreActionHandler {
  actionHandler: {
    CACHE_LOADED: DefaultTypes.AnyFunction;
    CACHE_LOADED_LAZY: DefaultTypes.AnyFunction;
    CHANNEL_DELETE: DefaultTypes.AnyFunction;
    CLEAR_MESSAGES: DefaultTypes.AnyFunction;
    CONNECTION_OPEN: DefaultTypes.AnyFunction;
    GUILD_DELETE: DefaultTypes.AnyFunction;
    GUILD_MEMBERS_CHUNK: DefaultTypes.AnyFunction;
    I18N_LOAD_SUCCESS: DefaultTypes.AnyFunction;
    LOAD_MESSAGES: DefaultTypes.AnyFunction;
    LOAD_MESSAGES_FAILURE: DefaultTypes.AnyFunction;
    LOAD_MESSAGES_SUCCESS: DefaultTypes.AnyFunction;
    LOAD_MESSAGES_SUCCESS_CACHED: DefaultTypes.AnyFunction;
    LOAD_MESSAGE_INTERACTION_DATA_SUCCESS: DefaultTypes.AnyFunction;
    LOCAL_MESSAGES_LOADED: DefaultTypes.AnyFunction;
    LOGOUT: DefaultTypes.AnyFunction;
    MESSAGE_CREATE: DefaultTypes.AnyFunction;
    MESSAGE_DELETE: DefaultTypes.AnyFunction;
    MESSAGE_DELETE_BULK: DefaultTypes.AnyFunction;
    MESSAGE_REACTION_ADD: DefaultTypes.AnyFunction;
    MESSAGE_REACTION_REMOVE: DefaultTypes.AnyFunction;
    MESSAGE_REACTION_REMOVE_ALL: DefaultTypes.AnyFunction;
    MESSAGE_REACTION_REMOVE_EMOJI: DefaultTypes.AnyFunction;
    MESSAGE_REVEAL: DefaultTypes.AnyFunction;
    MESSAGE_SEND_FAILED: DefaultTypes.AnyFunction;
    MESSAGE_UPDATE: DefaultTypes.AnyFunction;
    OVERLAY_INITIALIZE: DefaultTypes.AnyFunction;
    RELATIONSHIP_ADD: DefaultTypes.AnyFunction;
    RELATIONSHIP_REMOVE: DefaultTypes.AnyFunction;
    THREAD_CREATE_LOCAL: DefaultTypes.AnyFunction;
    THREAD_DELETE: DefaultTypes.AnyFunction;
    THREAD_MEMBER_LIST_UPDATE: DefaultTypes.AnyFunction;
    TRUNCATE_MESSAGES: DefaultTypes.AnyFunction;
    UPLOAD_START: DefaultTypes.AnyFunction;
    USER_SETTINGS_PROTO_UPDATE: DefaultTypes.AnyFunction;
  };
  name: string;
  storeDidChange: DefaultTypes.AnyFunction;
}
export interface deleteData {
  channelId: string;
  guildId: string;
  id?: string;
  ids?: string[];
  type: string;
}
export interface editData {
  guildId: string;
  message: Message;
  typed: string;
}
export interface editMessage {
  timestamp: Date;
  content: string;
}
export interface LocaleManager {
  Messages: DefaultTypes.ObjectExports;
  loadPromise: DefaultTypes.ObjectExports;
  _chosenLocale: string;
  _events: DefaultTypes.ObjectExports;
  _eventsCount: number;
  _getMessages: DefaultTypes.AnyFunction;
  _getParsedMessages: DefaultTypes.AnyFunction;
  _handleNewListener: DefaultTypes.AnyFunction;
  _languages: Array<{
    code: string;
    enabled: boolean;
    englishName: string;
    name: string;
    postgresLang: string;
  }>;
  _maxListeners: undefined | string;
  _provider: DefaultTypes.ObjectExports;
  _requestedLocale: string;
}
export interface MessageContentType {
  type: DefaultTypes.AnyFunction;
  compare: DefaultTypes.AnyFunction;
  $$typeof: symbol;
}
export interface MessageClassesAndStyles {
  alt: string;
  applicationName: string;
  asianCompactTimeStamp: string;
  avatar: string;
  avatarDecoration: string;
  avatarDecorationSize: string;
  avatarSize: string;
  badgesContainer: string;
  botTag: string;
  botTagCompact: string;
  botTagCozy: string;
  buttonContainer: string;
  clickable: string;
  commandIcon: string;
  commandName: string;
  communicationDisabled: string;
  communicationDisabledOpacity: string;
  compact: string;
  compactCommunicationDisabled: string;
  contentOnly: string;
  contents: string;
  cozy: string;
  desaturateUserColors: string;
  edited: string;
  executedCommand: string;
  executedCommandAvatar: string;
  hasBadges: string;
  hasReply: string;
  hasRoleIcon: string;
  hasThread: string;
  header: string;
  headerText: string;
  isFailed: string;
  isSending: string;
  isSystemMessage: string;
  latin12CompactTimeStamp: string;
  latin24CompactTimeStamp: string;
  marginCompactIndent: string;
  marginHorizontal: string;
  marginLeftContentCozy: string;
  markupRtl: string;
  messageContent: string;
  messageEditorCompact: string;
  metaSpace: string;
  paddingVerticalContainerCompact: string;
  repliedMessage: string;
  repliedTextContent: string;
  repliedTextContentIcon: string;
  repliedTextPlaceholder: string;
  repliedTextPreview: string;
  replyAvatar: string;
  replyBadge: string;
  replyIcon: string;
  replyIndent: string;
  replyLink: string;
  replyMessagePreviewLineHeight: string;
  roleDot: string;
  roleIcon: string;
  separator: string;
  sizeEmoji: string;
  spacingVerticalContainerCozy: string;
  systemMessageAccessories: string;
  threadMessageAccessory: string;
  threadMessageAccessoryAvatar: string;
  threadMessageAccessoryContent: string;
  threadMessageAccessoryContentIcon: string;
  threadMessageAccessoryPlaceholder: string;
  threadMessageAccessoryPreview: string;
  ticketIcon: string;
  timestamp: string;
  timestampInline: string;
  timestampTooltip: string;
  timestampVisibleOnHover: string;
  userJoinSystemMessageIcon: string;
  username: string;
  wrapper: string;
  zalgo: string;
}
export interface GenericModule {
  [key: string]: DefaultTypes.AnyFunction;
}
export interface GenericExport {
  exports: GenericModule;
}
export interface Settings {
  deleteStyle: string;
  ignoreSelf: boolean;
  ignoreBots: boolean;
  ignorePurges: boolean;
}
