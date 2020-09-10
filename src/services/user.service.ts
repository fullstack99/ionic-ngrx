import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { of, from } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class UserService {
  constructor(private http: HttpClient) {}

  getUser() {
    return this.http.get("/assets/user-data.json");
  }

  updateUserInfo(data) {
    return of(data);
  }
}
