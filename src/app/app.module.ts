import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { HttpModule, BaseRequestOptions } from '@angular/http';
import { CustomerModule } from './customer/customer.module'

import { AppComponent } from './app.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { PriceHandler } from './services/PriceHandler';
import { OrderListComponent } from './order-list/order-list.component'
import { appRoutes } from './config/routes'
import { routing } from './app.routing'
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './_guards/auth.guard';
import { AuthenticationService } from './_services/authentication.service';
import { UserService } from './_services/user.service';
import { fakeBackendProvider } from './_helpers/fake-backend';
import { MockBackend } from '@angular/http/testing';

@NgModule({
  declarations: [
    AppComponent,
    OrderDetailComponent,
    OrderListComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CustomerModule,
    routing
    // RouterModule.forRoot(appRoutes)
    // HttpModule,
  ],
  providers: [
    AuthGuard,
    AuthenticationService,
    UserService,
    fakeBackendProvider,
    MockBackend,
    BaseRequestOptions
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }