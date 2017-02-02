import { Customer } from '../../model/Customer'
import { Injectable } from '@angular/core'

@Injectable()
export class CustomerManager {
    private customerList: Customer[] = []

    addCustomer(customer: Customer) {
        this.customerList.push(customer)
    }

    get customers() {
        return this.customerList
    }
}