import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import * as customerActions from '../state/customer.actions';
import * as fromCustomer from '../state/customer.reducer';
import { Subscription } from 'rxjs';
import { ICustomer } from 'src/app/customer.interface';


@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html'
})
export class CustomerEditComponent {
  constructor(
    private formBuilder: FormBuilder,
    private store: Store<fromCustomer.IAppState>
  ) { }

  public customerForm: FormGroup = this.formBuilder.group({
    name: ['', Validators.required],
    phone: ['', Validators.required],
    address: ['', Validators.required],
    membership: ['', Validators.required],
    id: null
  })

  public formSubmit(): void {
    this.store.dispatch(new customerActions.UpdateCustomer(this.customerForm.value));
    this.customerForm.reset();
  }

  private currentCustomerSub: Subscription = this.store
    .select(fromCustomer.getCurrentCustomer)
    .subscribe(
      (currentCustomer: ICustomer) => {
        if (currentCustomer) {
          this.customerForm.patchValue(currentCustomer)
        }
      }
    )

  public ngOnDestroy(): void {
    this.currentCustomerSub.unsubscribe();
  }
}
