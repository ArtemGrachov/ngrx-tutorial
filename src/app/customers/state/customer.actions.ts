import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { ICustomer } from 'src/app/customer.interface';

export enum CustomerActionTypes {
  LOAD_CUSTOMERS = '[Customer] Load Customers',
  LOAD_CUSTOMERS_SUCCESS = '[Customer] Load Customers Success',
  LOAD_CUSTOMERS_FAIL = '[Customer] Load Customers Fail',
  LOAD_CUSTOMER = '[Customer] Load Customer',
  LOAD_CUSTOMER_SUCCESS = '[Customer] Load Customer Success',
  LOAD_CUSTOMER_FAIL = '[Customer] Load Customer Fail',
  CREATE_CUSTOMER = '[Customer] Create Customer',
  CREATE_CUSTOMER_SUCCESS = '[Customer] Create Customer Success',
  CREATE_CUSTOMER_FAIL = '[Customer] Create Customer Fail',
  UPDATE_CUSTOMER = '[Customer] Update Customer',
  UPDATE_CUSTOMER_SUCCESS = '[Customer] Update Customer Success',
  UPDATE_CUSTOMER_FAIL = '[Customer] Update Customer Fail',
  DELETE_CUSTOMER = '[Customer] Delete Customer',
  DELETE_CUSTOMER_SUCCESS = '[Customer] Delete Customer Success',
  DELETE_CUSTOMER_FAIL = '[Customer] Delete Customer Fail'
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

export class LoadCustomer implements Action {
  constructor(public payload: number) { }

  public readonly type: string = CustomerActionTypes.LOAD_CUSTOMER;
}

export class LoadCustomerSuccess implements Action {
  constructor(public payload: ICustomer) { }

  public readonly type: string = CustomerActionTypes.LOAD_CUSTOMER_SUCCESS;
}

export class LoadCustomerFail implements Action {
  constructor(public payload: string) { }

  public readonly type: string = CustomerActionTypes.LOAD_CUSTOMER_FAIL;
}

export class CreateCustomer implements Action {
  constructor(public payload: ICustomer) { }

  public readonly type: string = CustomerActionTypes.CREATE_CUSTOMER;
}

export class CreateCustomerSuccess implements Action {
  constructor(public payload: ICustomer) { }

  public readonly type: string = CustomerActionTypes.CREATE_CUSTOMER_SUCCESS;
}

export class CreateCustomerFail implements Action {
  constructor(public payload: string) { }

  public readonly type: string = CustomerActionTypes.CREATE_CUSTOMER_FAIL;
}

export class UpdateCustomer implements Action {
  constructor(public payload: ICustomer) { }

  public readonly type: string = CustomerActionTypes.UPDATE_CUSTOMER;
}

export class UpdateCustomerSuccess implements Action {
  constructor(public payload: Update<ICustomer>) { }

  public readonly type: string = CustomerActionTypes.UPDATE_CUSTOMER_SUCCESS;
}

export class UpdateCustomerFail implements Action {
  constructor(public payload: string) { }

  public readonly type: string = CustomerActionTypes.UPDATE_CUSTOMER_FAIL;
}

export class DeleteCustomer implements Action {
  constructor(public payload: number) { }

  public readonly type: string = CustomerActionTypes.DELETE_CUSTOMER;
}

export class DeleteCustomerSuccess implements Action {
  constructor(public payload: number) { }

  public readonly type: string = CustomerActionTypes.DELETE_CUSTOMER_SUCCESS;
}

export class DeleteCustomerFail implements Action {
  constructor(public payload: string) { }

  public readonly type: string = CustomerActionTypes.DELETE_CUSTOMER_FAIL;
}

export type Action =
  LoadCustomers |
  LoadCustomersSuccess |
  LoadCustomersFail |
  CreateCustomer |
  CreateCustomerSuccess |
  CreateCustomerFail |
  UpdateCustomer |
  UpdateCustomerSuccess |
  UpdateCustomerFail |
  DeleteCustomer |
  DeleteCustomerSuccess |
  DeleteCustomerFail;