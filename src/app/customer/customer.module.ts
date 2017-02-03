import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CustomerManager } from './customer-manager'
import { CustomerProvider, CustomerProvider2 } from './customer-provider'
import { CustomerFormComponent } from './customer-form/customer-form.component';
// import { CUSTOMER_CONFIG_DATA, CUSTOMER_CONFIG } from './customer.conf'
import * as conf from './customer.conf'
// the both above are valid, the second one needs the prefix on all imports

/**
 * Module handling customer management.
 */
@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [CustomerFormComponent],
  // providers: [CustomerManager],
  // providers: [ { provide: CustomerManager, useClass: CustomerManager }],
  // providers: [ { provide: CustomerManager, useValue: CustomerManager }],
  // providers: [ { provide: CustomerManager, useValue: conf.customerFactory }],
  // providers: [ { provide: CustomerManager, useFactory: () => new CustomerManager()) }],
  // the 3 are usable, the scope is the whole module
  // the last one uses an object instead of a class, need to be exported somewhere
  providers: [
    CustomerProvider,
    CustomerProvider2,
    { provide: CustomerManager, useClass: CustomerManager }
    // { provide: conf.CUSTOMER_CONFIG, useValue: conf.CUSTOMER_CONFIG_DATA }
    //  { provide: conf.CUSTOMER_CONFIG, useValue: { key: 'value' } }
  ],
  exports: [CustomerFormComponent]
})
export class CustomerModule { }
