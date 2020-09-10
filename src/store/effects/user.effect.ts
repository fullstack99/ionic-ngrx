import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { map, switchMap, catchError } from "rxjs/operators";
import { of } from "rxjs";

import { UserService } from "../../services/user.service";
import * as UserActions from "../actions/user.action";

@Injectable()
export class DataEffects {
  constructor(private actions: Actions, private userService: UserService) {}

  @Effect()
  loadUserInfo = this.actions.pipe(
    ofType(UserActions.ActionTypes.LoadUserInfoBegin),
    switchMap(() => {
      return this.userService.getUser().pipe(
        map((data) => new UserActions.LoadUserInfoSuccess({ data: data })),
        catchError((error) =>
          of(new UserActions.LoadUserInfoFailure({ error: error }))
        )
      );
    })
  );

  @Effect()
  updateUserInfo = this.actions.pipe(
    ofType(UserActions.ActionTypes.UpdateUserInfoBegin),
    switchMap((payload: any) => {
      return this.userService.updateUserInfo(payload.data).pipe(
        map((data) => new UserActions.UpdateUserInfoSuccess({ data: data })),
        catchError((error) =>
          of(new UserActions.UpdateUserInfoFailure({ error: error }))
        )
      );
    })
  );
}
