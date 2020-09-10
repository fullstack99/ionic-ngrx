import { Action } from "@ngrx/store";

export enum ActionTypes {
  LoadUserInfoBegin = "[User] Load data begin",
  LoadUserInfoSuccess = "[User] Load data success",
  LoadUserInfoFailure = "[User] Load data failure",
  UpdateUserInfoBegin = "[User] Update User Info begin",
  UpdateUserInfoSuccess = "[User] Update User Info success",
  UpdateUserInfoFailure = "[User] Update User Info failure",
}

export class LoadUserInfoBegin implements Action {
  readonly type = ActionTypes.LoadUserInfoBegin;
}

export class LoadUserInfoSuccess implements Action {
  readonly type = ActionTypes.LoadUserInfoSuccess;

  constructor(public payload: { data: any }) {}
}

export class LoadUserInfoFailure implements Action {
  readonly type = ActionTypes.LoadUserInfoFailure;

  constructor(public payload: { error: any }) {}
}

export class UpdateUserInfoBegin implements Action {
  readonly type = ActionTypes.UpdateUserInfoBegin;
  constructor(public payload: { data: any }) {}
}

export class UpdateUserInfoSuccess implements Action {
  readonly type = ActionTypes.UpdateUserInfoSuccess;

  constructor(public payload: { data: any }) {}
}

export class UpdateUserInfoFailure implements Action {
  readonly type = ActionTypes.UpdateUserInfoFailure;

  constructor(public payload: { error: any }) {}
}

export type ActionsUnion =
  | LoadUserInfoBegin
  | LoadUserInfoSuccess
  | LoadUserInfoFailure
  | UpdateUserInfoSuccess
  | UpdateUserInfoFailure;
