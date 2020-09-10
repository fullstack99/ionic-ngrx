import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";
import {
  FormControl,
  FormBuilder,
  FormGroup,
  Validators,
} from "@angular/forms";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";

import { UserService } from "../../services/user.service";

@Component({
  selector: "app-setting",
  templateUrl: "setting.page.html",
  styleUrls: ["setting.page.scss"],
})
export class SettingPage implements OnInit {
  public user: any = {};

  userForm: FormGroup;
  validation_messages = {
    userName: [
      { type: "required", message: "Username is required." },
      {
        type: "minlength",
        message: "Username must be at least 5 characters long.",
      },
      {
        type: "maxlength",
        message: "Username cannot be more than 25 characters long.",
      },
    ],
    firstName: [{ type: "required", message: "First Name is required." }],
    lastName: [{ type: "required", message: "Last name is required." }],
    dob: [{ type: "required", message: "Date of Birth is required." }],
    email: [
      { type: "required", message: "Email is required." },
      {
        type: "pattern",
        message: "Please provide valid email",
      },
    ],
  };

  user$: Observable<any> = this.store.select(
    (state: any) => state.userState.user
  );

  constructor(
    public navCtrl: NavController,
    public formBuilder: FormBuilder,
    private userService: UserService,
    private store: Store
  ) {}

  ngOnInit() {
    this.user$.subscribe((res) => {
      this.user = res;
    });
    this.userForm = this.formBuilder.group({
      firstName: [
        this.user.firstName || "",
        Validators.compose([Validators.required]),
      ],
      lastName: [
        this.user.lastName || "",
        Validators.compose([Validators.required]),
      ],
      email: [
        this.user.email || "",
        Validators.compose([
          Validators.minLength(4),
          Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$"),
          Validators.required,
        ]),
      ],
      userName: [
        this.user.userName || "",
        Validators.compose([
          Validators.required,
          Validators.maxLength(25),
          Validators.minLength(5),
        ]),
      ],
      dob: [this.user.dob || "", Validators.compose([Validators.required])],
    });
  }

  updateInfo() {
    this.store.dispatch({
      type: "[User] Update User Info begin",
      data: this.userForm.value,
    });
  }

  getDate(e) {
    let date = new Date(e.target.value).toISOString().substring(0, 10);
    this.userForm.get("dob").setValue(date, {
      onlyself: true,
    });
  }
}
