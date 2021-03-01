import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeDashBoardComponent } from './home-dash-board/home-dash-board.component';

const routes: Routes = [
  {
   path:'',
   component:HomeDashBoardComponent
  },
  // {
  //   path:'admin',
  //   loadChildren: () => import ('./admin/admin.module').then(m =>{
  //     m.AdminModule
  //   })
  // }
  {
    path:'admin-panel',
    loadChildren: () => import('./admin/admin.module').then(m =>     
      m.AdminModule) 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
