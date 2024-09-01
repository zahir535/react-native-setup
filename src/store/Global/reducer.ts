import { GlobalAction } from "./actions";
import { globalInitialState, GlobalState } from "./state";

export const globalReducer = (state = globalInitialState, action: GlobalAction): GlobalState => {
  switch (action.type) {
    case "global/ADD_CONFIG":
      return {
        ...state,
        config: action.payload,
      };
    case "global/ADD_GLOBAL":
      return {
        ...state,
        ...action.payload,
      };
    case "global/RESET_GLOBAL":
      return {
        config: undefined,
        isLogout: undefined,
        loading: false,
      };
    case "global/SET_LOADING":
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};
