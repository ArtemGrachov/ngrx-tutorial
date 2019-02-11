import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import * as customerActions from '../state/customer.actions';
import * as fromCustomer from '../state/customer.reducer';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html'
})
export class CustomerAddComponent {
  constructor(
    private formBuilder: FormBuilder,
    private store: Store<fromCustomer.IAppState>
  ) { }

  public customerForm: FormGroup = this.formBuilder.group({
    name: ['', Validators.required],
    phone: ['', Validators.required],
    address: ['', Validators.required],
    membership: ['', Validators.required],
  })

  public formSubmit(): void {
    this.store.dispatch(new customerActions.CreateCustomer(this.customerForm.value));
    this.customerForm.reset();
  }
}
