import {NgModule} from '@angular/core';

import {LayoutComponent} from './layout.component';
import {MatButtonModule} from "@angular/material/button";
import {LayoutRoutingModule} from "./layout-routing.module";

@NgModule({
  declarations: [LayoutComponent],
  imports: [
    MatButtonModule,
    LayoutRoutingModule,
  ],
  exports: [LayoutComponent],
  providers: [],
})
export class LayoutModule {
}
