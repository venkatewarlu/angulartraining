import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { ProductsComponent } from './products/products.component';
import { LogisticsComponent } from './logistics/logistics.component';
import { UserviewComponent } from './userview/userview.component';
import { AddproductComponent } from './addproduct/addproduct.component';
const routes: Routes = [
  {
    path: '',
    component: LoginpageComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent

  },
  {
    path: 'users',
    component: UsersComponent

  },
  {
    path: 'products',
    component: ProductsComponent

  },
  {
    path: 'logistics',
    component: LogisticsComponent

  },
  {
    path: 'users/:id',
    component: UserviewComponent

  },
  {
    path: 'products/addproduct',
    component: AddproductComponent

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
