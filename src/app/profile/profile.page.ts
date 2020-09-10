import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";

@Component({
  selector: "app-profile",
  templateUrl: "profile.page.html",
  styleUrls: ["profile.page.scss"],
})
export class ProfilePage {
  public user = {};
  user$: Observable<any> = this.store.select(
    (state: any) => state.userState.user
  );
  constructor(private store: Store) {}
}
