export type GlobalState = {
  config?: IConfig;
  isLogout?: boolean;
  loading?: boolean;
};

export const globalInitialState: GlobalState = {
  config: undefined,
  isLogout: undefined,
  loading: false,
};
