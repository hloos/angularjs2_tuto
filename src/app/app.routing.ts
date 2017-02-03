import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/index';
import { HomeComponent } from './home/index';
import { AuthGuard } from './_guards/index';
import { CustomerFormComponent } from './customer/customer-form/customer-form.component';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';

const appRoutes: Routes = [
    {
        path: 'order',
        children: [
            {
                path: '',
                component: OrderListComponent 
            },
            {
                path: 'customer',
                component: CustomerFormComponent 
            },
            {
                path: ':id',
                component: OrderDetailComponent 
            }
        ]
    },
    {
        path: 'customer',
        component: CustomerFormComponent 
    },
    // {
    //     path: 'order/:id',
    //     component: OrderDetailComponent 
    // },
    { path: 'login', component: LoginComponent },
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },

    // otherwise redirect to home - the order matter since the first route  which matches in the list will be the one used
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);