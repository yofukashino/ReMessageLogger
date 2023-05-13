import { common, util } from "replugged";
import { PluginInjector, SettingValues } from "../index";
import * as Types from "../types";
import * as lodash from "lodash";
const { React } = common;
export const findInTree = (
  tree: object,
  searchFilter: Types.DefaultTypes.AnyFunction | string,
  searchOptions?: { ignore?: string[]; walkable?: null | string[] },
): unknown => {
  const { walkable = null, ignore = [] } = searchOptions ?? {};
  if (typeof searchFilter === "string") {
    if (Object.hasOwnProperty.call(tree, searchFilter)) return tree[searchFilter];
  } else if (searchFilter(tree)) {
    return tree;
  }
  if (typeof tree !== "object" || tree == null) return;

  let tempReturn: unknown;
  if (Array.isArray(tree)) {
    for (const value of tree) {
      tempReturn = findInTree(value, searchFilter, { walkable, ignore });
      if (typeof tempReturn !== "undefined") return tempReturn;
    }
  } else {
    const toWalk = walkable == null ? Object.keys(tree) : walkable;
    for (const key of toWalk) {
      if (!Object.hasOwnProperty.call(tree, key) || ignore.includes(key)) continue;
      tempReturn = findInTree(tree[key], searchFilter, { walkable, ignore });
      if (typeof tempReturn !== "undefined") return tempReturn;
    }
  }
  return tempReturn;
};

export const findInReactTree = (
  tree: Types.ReactElement,
  searchFilter: Types.DefaultTypes.AnyFunction | string,
): unknown | Types.ReactElement => {
  return findInTree(tree, searchFilter, { walkable: ["props", "children", "child", "sibling"] });
};

export const isObject = (testMaterial: unknown): boolean =>
  typeof testMaterial === "object" && !Array.isArray(testMaterial) && testMaterial != null;

export const hasProps = (mod: object, props: string[] | unknown[]): boolean =>
  isObject(mod) && props.every((prop: string | unknown) => Object.hasOwnProperty.call(mod, prop));

export const forceUpdate = (element: Element): void => {
  if (!element) return;
  const toForceUpdate = util.getOwnerInstance(element);
  const forceRerender = PluginInjector.instead(toForceUpdate, "render", () => {
    forceRerender();
    return null;
  });

  toForceUpdate.forceUpdate(() => toForceUpdate.forceUpdate(() => {}));
};

export const useSetting = (
  settingsManager: typeof SettingValues,
  path: string,
  defaultValue?: string,
  options?: { clearable?: boolean },
): {
  value: string;
  onChange: (newValue: string | { value: string }) => void;
  onClear: () => void;
} => {
  const { clearable = false } = options ?? {};
  const [key, ...realPath] = path.split(".");
  const realPathJoined = realPath.join(".");
  const setting = settingsManager.get(key as keyof Types.Settings);
  const initial = realPath.length
    ? lodash.get(setting, realPathJoined, defaultValue)
    : (setting as unknown as string);
  const [value, setValue] = React.useState(initial);

  return {
    value,
    onClear: clearable
      ? () => {
          setValue("");
          const changed = realPath.length
            ? (lodash.set(setting as unknown as object, realPathJoined, "") as unknown as string)
            : ("" as never);
          settingsManager.set(key as keyof Types.Settings, changed as unknown as boolean);
        }
      : () => null,
    onChange: (newValue) => {
      if (typeof newValue == "object") newValue = newValue.value;
      setValue(newValue);
      const changed = realPath.length
        ? (lodash.set(setting as unknown as object, realPathJoined, newValue) as unknown as string)
        : (newValue as never);
      settingsManager.set(key as keyof Types.Settings, changed as unknown as boolean);
    },
  };
};
