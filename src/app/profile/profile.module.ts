import {NgModule} from '@angular/core';

import {ProfileComponent} from './profile.component';
import {ProfileRoutingModule} from "./profile-routing.module";

@NgModule({
  imports: [ProfileRoutingModule],
  exports: [ProfileComponent],
  declarations: [ProfileComponent],
  providers: [],
})
export class ProfileModule {
}
