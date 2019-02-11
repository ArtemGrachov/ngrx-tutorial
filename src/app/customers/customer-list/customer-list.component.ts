import { Component } from '@angular/core';

import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as customerActions from '../state/customer.actions';
import * as fromCustomer from '../state/customer.reducer';
import { ICustomer } from 'src/app/customer.interface';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html'
})
export class CustomerListComponent {
  constructor(private store: Store<fromCustomer.IAppState>) { }

  public ngOnInit(): void {
    this.store.dispatch(new customerActions.LoadCustomers());
  }

  public customers$: Observable<ICustomer[]> = this.store.pipe(
    select(fromCustomer.getCustomers)
  )
}
