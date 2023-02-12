import {NgModule} from '@angular/core';

import {LoginComponent} from './login.component';
import {LoginRoutingModule} from "./login-routing.module";

@NgModule({
  declarations: [LoginComponent],
  imports: [LoginRoutingModule],
  exports: [LoginComponent],
  providers: [],
})
export class LoginModule {
}
