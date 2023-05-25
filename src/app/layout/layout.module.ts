import {NgModule} from '@angular/core';

import {LayoutComponent} from './layout.component';
import {MatButtonModule} from "@angular/material/button";
import {LayoutRoutingModule} from "./layout-routing.module";
import {MatToolbarModule} from "@angular/material/toolbar";
import {UsersModule} from "../users/users.module";

@NgModule({
  declarations: [LayoutComponent],
    imports: [
      MatButtonModule,
      LayoutRoutingModule,
      MatToolbarModule,
      UsersModule,
    ],
  exports: [LayoutComponent],
  providers: [],
})
export class LayoutModule {
}
