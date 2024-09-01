import { typedAction } from "../actionCreator";
import { GlobalState } from "./state";

export const addConfig = (config: IConfig) => {
  return typedAction("global/ADD_CONFIG", config);
};

export const addGlobal = (global: GlobalState) => {
  return typedAction("global/ADD_GLOBAL", global);
};

export const setLoading = (loading: boolean) => {
  return typedAction("global/SET_LOADING", loading);
};

export const resetGlobal = () => {
  return typedAction("global/RESET_GLOBAL");
};

export type GlobalAction = ReturnType<typeof addConfig | typeof addGlobal | typeof resetGlobal | typeof setLoading>;

export const GlobalActionProps = {
  addConfig,
  addGlobal,
  resetGlobal,
  setLoading,
};

export type GlobalActionTypes = typeof GlobalActionProps;
