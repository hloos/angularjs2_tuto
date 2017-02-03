import { Customer } from '../../model/Customer'
import { Injectable } from '@angular/core'
import { CustomerProvider, CustomerProvider2 } from './customer-provider'

@Injectable()
export class CustomerManager {
    private uri: string;
    private customerList: Customer[] = []
    private errorMessage: any

    constructor(private customerProvider: CustomerProvider, private customerProvider2: CustomerProvider2) {
        this.customerProvider.provideCustomers().then(customers => this.customerList = customers)
        this.customerProvider2.provideCustomers().subscribe(
                       customers  => this.customerList = this.customerList.concat(customers),
                       error =>  this.errorMessage = <any>error);
    }

    addCustomer(customer: Customer) {
        this.customerList.push(customer)
    }

    get customers() {
        return this.customerList
    }
}