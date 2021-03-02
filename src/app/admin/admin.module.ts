import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AngularMaterialModule} from '../angular-material/angular-material.module';
import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import {ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CategoriesComponent } from './categories/categories.component';
import { BlogComponent } from './blog/blog.component';
import { UpdateComponent } from './blog/update/update.component';
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [DashboardComponent, CategoriesComponent, BlogComponent, UpdateComponent, UsersComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
   
    AngularMaterialModule,
   
  ]
})
export class AdminModule { }
