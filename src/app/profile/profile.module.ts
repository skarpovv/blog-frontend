import {NgModule, OnInit} from '@angular/core';

import {ProfileComponent} from './profile.component';
import {ProfileRoutingModule} from "./profile-routing.module";
import {UsersModule} from "../users/users.module";
import {NgForOf} from "@angular/common";

@NgModule({
  imports: [ProfileRoutingModule, UsersModule, NgForOf],
  exports: [ProfileComponent],
  declarations: [ProfileComponent],
  providers: [],
})
export class ProfileModule {}
