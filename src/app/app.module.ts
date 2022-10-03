import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErrorInterceptor } from './error.interceptor';
import { HeaderComponent } from './header/header.component';
import { LoginInterceptor } from './login.interceptor';
import { LoginComponent } from './login/login.component';
import { GallaryComponent } from './gallary/gallary.component';
import { AdminRoleDirective } from './admin-role.directive';
import { UserRoleDirective } from './user-role.directive';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    LoginComponent,
    GallaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,ReactiveFormsModule,FormsModule,HttpClientModule
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:LoginInterceptor,
    multi:true
  },{
    provide:HTTP_INTERCEPTORS,
    useClass:ErrorInterceptor,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
