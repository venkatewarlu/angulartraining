import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { LoginalertComponent } from './loginalert/loginalert.component';
import { StatcardComponent } from './statcard/statcard.component';
import { HeadercompComponent } from './headercomp/headercomp.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserTableComponent } from './user-table/user-table.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { UsersComponent } from './users/users.component';
import { ProductsComponent } from './products/products.component';
import { LogisticsComponent } from './logistics/logistics.component';
import { UserviewComponent } from './userview/userview.component';
import { AmazecardComponent } from './amazecard/amazecard.component';
import { ReactiveformsComponent } from './reactiveforms/reactiveforms.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddproductComponent } from './addproduct/addproduct.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductServiceService } from './product-service.service';
import { UsersService } from './users.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginpageComponent,
    LoginalertComponent,
    StatcardComponent,
    HeadercompComponent,
    DashboardComponent,
    UserTableComponent,
    AnalyticsComponent,
    UsersComponent,
    ProductsComponent,
    LogisticsComponent,
    UserviewComponent,
    AmazecardComponent,
    ReactiveformsComponent,
    AddproductComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    ProductServiceService,
    UsersService,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
