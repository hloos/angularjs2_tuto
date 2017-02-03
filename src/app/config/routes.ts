import { Routes } from '@angular/router'
import { OrderDetailComponent } from '../order-detail/order-detail.component'
import { OrderListComponent } from '../order-list/order-list.component'
import { CustomerFormComponent } from '../customer/customer-form/customer-form.component'

export const appRoutes: Routes = [
{
    path: '',
    component: CustomerFormComponent 
},{
    path: 'order',
    component: OrderListComponent 
},{
    path: 'order/:id',
    component: OrderDetailComponent 
}
]