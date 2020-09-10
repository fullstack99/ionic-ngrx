import { IonicModule } from "@ionic/angular";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SettingPage } from "./setting.page";
import { ExploreContainerComponentModule } from "../explore-container/explore-container.module";

import { SettingPageRoutingModule } from "./setting-routing.module";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    SettingPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [SettingPage],
})
export class SettingPageModule {}
