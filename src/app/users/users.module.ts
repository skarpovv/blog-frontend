import {NgModule} from '@angular/core';

import {UsersComponent} from './users.component';
import { UserComponent } from './user/user.component';
import {MatCardModule} from "@angular/material/card";
import {CommonModule} from "@angular/common";
import {UsersRoutingModule} from "./users-routing.module";
import { UserPageComponent } from './user-page/user-page.component';
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {AppModule} from "../app.module";
import {FilterUsersPipe} from "../pipes/filter-users.pipe";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    UsersRoutingModule,
    MatInputModule,
    FormsModule,
    MatProgressSpinnerModule,
  ],
  exports: [
    UserPageComponent
  ],
  declarations: [UsersComponent, UserComponent, UserPageComponent, FilterUsersPipe],
  providers: [],
})
export class UsersModule {
}
