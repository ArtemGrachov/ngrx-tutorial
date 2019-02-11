import { Component } from '@angular/core';

import { Store } from '@ngrx/store';
import { ICustomer } from 'src/app/customer.interface';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html'
})
export class CustomerListComponent {
  constructor(private store: Store<any>) { }

  public customers: ICustomer[];

  public ngOnInit(): void {
    this.store.dispatch({
      type: 'LOAD_CUSTOMERS'
    });
    this.store.subscribe(state => (this.customers = state.customers.customers))
  }
}
