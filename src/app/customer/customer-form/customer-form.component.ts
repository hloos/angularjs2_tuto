import { Component, OnInit } from '@angular/core';
import { Customer } from '../../../model/Customer'

@Component({
  selector: '.app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit {

  private customer: Customer
  constructor() { }

  ngOnInit() {
    this.customer = new Customer("", "", new Date(), "")
  }

}
