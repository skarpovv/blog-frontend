import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { LayoutComponent } from "./layout.component";

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'users',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadChildren: () => import('./../home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('./../profile/profile.module').then(m => m.ProfileModule)
      },
      {
        path: 'blogs',
        loadChildren: () => import('./../blogs/blogs.module').then(m => m.BlogsModule)
      },
      {
        path: 'users',
        loadChildren: () => import('./../users/users.module').then(m => m.UsersModule)
      },
      {
        path: '**',
        redirectTo: 'users'
      }
      // Add more routes for other pages as needed
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {
}
