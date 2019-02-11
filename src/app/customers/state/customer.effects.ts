import { Injectable } from '@angular/core';

import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';

import { Observable, of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';

import { CustomerService } from '../customer.service';
import * as customerActions from './customer.actions';
import { ICustomer } from 'src/app/customer.interface';

@Injectable()
export class CustomerEffect {
  constructor(
    private actions$: Actions,
    private customerService: CustomerService
  ) { }

  @Effect() private loadCustomers$: Observable<Action> = this.actions$.pipe(
    ofType<customerActions.LoadCustomers>(
      customerActions.CustomerActionTypes.LOAD_CUSTOMERS
    ),
    mergeMap(
      (actions: customerActions.LoadCustomers) =>
        this.customerService.getCustomers()
          .pipe(
            map((customers: ICustomer[]) => new customerActions.LoadCustomersSuccess(customers)),
            catchError(err => of(new customerActions.LoadCustomersFail(err)))
          )
    )
  )
}