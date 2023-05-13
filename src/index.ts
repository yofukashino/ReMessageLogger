import { Injector, Logger, common, settings } from "replugged";
import { defaultSettings } from "./lib/consts";
import "./style.css";
export const PluginLogger = Logger.plugin("ReMessageLogger");
export const SettingValues = await settings.init("dev.tharki.ReMessageLogger", defaultSettings);
export const PluginInjector = new Injector();
export const { fluxDispatcher: FluxDispatcher, users: UserStore, parser: Parser } = common;
import { registerSettings } from "./Components/Settings";
import { applyInjections } from "./patches/index";
export const start = (): void => {
  registerSettings();
  applyInjections();
};

export const stop = (): void => {
  PluginInjector.uninjectAll();
};

export { Settings } from "./Components/Settings";
