import {
  ACCOUNT_ACTIONS,
  Account,
  AccountAction,
  AccountProps,
} from "../actions/accountActions";

const initialState: AccountProps = {
  account: { email: "", password: "", isLogged: false },
};

const accountReducer = (state = initialState, action: AccountAction) => {
  switch (action.type) {
    case ACCOUNT_ACTIONS.ADD_ACCOUNT:
      return {
        ...state,
        account: action.payload,
      };
    case ACCOUNT_ACTIONS.LOGIN_ACCOUNT:
      if (
        state.account.email === action.payload.email &&
        state.account.password === action.payload.password
      )
        return {
          account: {
            ...state,
            isLogged: true,
          },
        };
    case ACCOUNT_ACTIONS.LOGOUT_ACCOUNT:
      return initialState;

    default:
      return state;
  }
};

export default accountReducer;