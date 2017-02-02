import { Component, OnInit } from '@angular/core';
import { Customer } from '../../../model/Customer'
import { NgForm } from '@angular/forms'
import { CustomerManager } from '../customer-manager'
import { CUSTOMER_CONFIG_DATA } from '../customer.conf'

@Component({
  selector: '.app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
  // providers: [CustomerManager]
    // providers: [ { provide: CustomerManager, useClass: CustomerManager }]
    // the second is also usable instead of the fist one, the scope is just this component 
})
export class CustomerFormComponent implements OnInit {

  private customer: Customer
  private customers: Customer[] = []
  constructor(private customerManager: CustomerManager) { }

  ngOnInit() {
    this.customer = new Customer("", "", new Date(), "")
  }

  addCustomer(form: NgForm) {
    this.customerManager.addCustomer(this.customer)
    this.customer = new Customer('', '', new Date(), '');
    this.customers = this.customerManager.customers
    form.reset
  }
}
