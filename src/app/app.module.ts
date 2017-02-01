import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CustomerModule } from './customer/customer.module'

import { AppComponent } from './app.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { PriceHandler } from './services/PriceHandler'

@NgModule({
  declarations: [
    AppComponent,
    OrderDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CustomerModule
    // HttpModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
