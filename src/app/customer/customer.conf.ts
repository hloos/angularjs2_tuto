import { OpaqueToken } from '@angular/core'
import { CustomerManager } from './customer-manager'

export let CUSTOMER_CONFIG = new OpaqueToken('customer.config')

export const CUSTOMER_CONFIG_DATA = {
    cacheSize: 10,
    dataSource: 'api.customer.com/public' 
}

export let customerFactory = () => {
    return new CustomerManager()
}