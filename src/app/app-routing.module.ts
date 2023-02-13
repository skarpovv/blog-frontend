import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthGuard} from "./guards/auth.guard";

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule),
    canActivate: [AuthGuard],
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: () => import('./components/auth/auth.module').then(m => m.AuthModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
