import {NgModule} from '@angular/core';

import {AuthComponent} from './auth.component';
import {AuthRoutingModule} from "./auth-routing.module";
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [AuthComponent, LoginComponent, RegisterComponent],
  imports: [CommonModule, AuthRoutingModule, MatInputModule, MatButtonModule, FormsModule, ReactiveFormsModule],
  exports: [AuthComponent],
  providers: [],
})
export class AuthModule {
}
