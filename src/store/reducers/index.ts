import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from "@ngrx/store";
import { environment } from "../../environments/environment";

import * as userData from "./user.reducer";

export interface AppState {
  userState: userData.UserState;
}

export const reducers: ActionReducerMap<AppState> = {
  userState: userData.reducer,
};
