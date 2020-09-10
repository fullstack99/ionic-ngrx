import * as userData from "../actions/user.action";

export interface UserState {
  user: object;
  loading: boolean;
  error: any;
}

export const initialState: UserState = {
  user: null,
  loading: false,
  error: null,
};

export function reducer(
  state = initialState,
  action: userData.ActionsUnion
): UserState {
  switch (action.type) {
    case userData.ActionTypes.LoadUserInfoBegin: {
      return {
        ...state,
        loading: true,
        error: null,
      };
    }

    case userData.ActionTypes.LoadUserInfoSuccess: {
      return {
        ...state,
        loading: false,
        user: action.payload.data,
      };
    }

    case userData.ActionTypes.LoadUserInfoFailure: {
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    }

    case userData.ActionTypes.UpdateUserInfoSuccess: {
      return {
        ...state,
        loading: false,
        user: action.payload.data,
      };
    }

    case userData.ActionTypes.UpdateUserInfoFailure: {
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    }

    default: {
      return state;
    }
  }
}
