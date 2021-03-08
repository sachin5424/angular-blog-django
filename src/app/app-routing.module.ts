import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { HomeDashBoardComponent } from './home-dash-board/home-dash-board.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { VerfiyUserComponent } from './verfiy-user/verfiy-user.component';

const routes: Routes = [
  {
   path:'',
   component:HomeDashBoardComponent
  },
 
  {
    path:'admin-panel',
    canActivate:[AuthGuard],
    loadChildren: () => import('./admin/admin.module').then(m =>     
      m.AdminModule) 
  },
  {
    path:'blog',
    component:BlogListComponent
  },
  {
    path:'blog/:id',
    component:BlogDetailsComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'verfiy-user',
    component:VerfiyUserComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
