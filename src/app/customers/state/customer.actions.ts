import { Action } from '@ngrx/store';
import { ICustomer } from 'src/app/customer.interface';

export enum CustomerActionTypes {
  LOAD_CUSTOMERS = '[Customer] Load Customers',
  LOAD_CUSTOMERS_SUCCESS = '[Customer] Load Customers Success',
  LOAD_CUSTOMERS_FAIL = '[Customer] Load Customers Fail'
}

export class LoadCustomers implements Action {
  public readonly type: string = CustomerActionTypes.LOAD_CUSTOMERS;

  public payload: void;
}

export class LoadCustomersSuccess implements Action {
  constructor(public payload: ICustomer[]) { }

  public readonly type: string = CustomerActionTypes.LOAD_CUSTOMERS_SUCCESS;
}

export class LoadCustomersFail implements Action {
  constructor(public payload: string) { }

  public readonly type: string = CustomerActionTypes.LOAD_CUSTOMERS_FAIL;
}

export type Action = LoadCustomers | LoadCustomersSuccess | LoadCustomersFail;