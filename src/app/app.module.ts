import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddResrCategoryComponent } from './add-resr-category/add-resr-category.component';
import { AddRestaurantComponent } from './add-restaurant/add-restaurant.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { BookingforuserComponent } from './bookingforuser/bookingforuser.component';
import { BookinglistComponent } from './bookinglist/bookinglist.component';
import { BookpageComponent } from './bookpage/bookpage.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RestCategoryComponent } from './rest-category/rest-category.component';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { RestforuserComponent } from './restforuser/restforuser.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserComponent } from './user/user.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    AddResrCategoryComponent,
    AddRestaurantComponent,
    AdminHomeComponent,
    BookingforuserComponent,
    BookinglistComponent,
    BookpageComponent,
    DashboardComponent,
    ForgotpasswordComponent,
    HomeComponent,
    LoginComponent,
    RestCategoryComponent,
    RestaurantListComponent,
    RestforuserComponent,
    SignUpComponent,
    UserComponent,
    UserdetailsComponent,
    UserprofileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
