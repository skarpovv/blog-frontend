import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {UsersComponent} from "./users.component";
import {UserPageComponent} from "./user-page/user-page.component";

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
  },
  {
    path: ':id',
    component: UserPageComponent,
  },
  {
    path: '**',
    redirectTo: '',
  }
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {
}
