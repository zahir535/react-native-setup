import { bindActionCreators, Dispatch } from "redux";

import { RootState } from "../rootReducer";
import { GlobalActionProps } from "./actions";

export const GlobalMapStateToProps = (state: RootState) => ({
  config: state.global.config,
  global: state.global,
  isLoading: state.global.loading,
});

export const GlobalMapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators(
    {
      ...GlobalActionProps,
    },
    dispatch,
  );
};

export type GlobalStoreProps = ReturnType<typeof GlobalMapStateToProps> & ReturnType<typeof GlobalMapDispatchToProps>;
