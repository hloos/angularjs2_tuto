import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CustomerFormComponent } from './customer-form/customer-form.component';

/**
 * Module handling customer management.
 */
@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [CustomerFormComponent],
  exports: [CustomerFormComponent]
})
export class CustomerModule { }
