import * as customerActions from './customer.actions';

import * as fromRoot from '../../state/app-state';
import { ICustomer } from 'src/app/customer.interface';

export interface ICustomerState {
  customers: ICustomer[];
  loading: boolean;
  loaded: boolean;
  error: string;
}

export interface IAppState extends fromRoot.IAppState {
  customers: ICustomerState
}

export const initialState: ICustomerState = {
  customers: [],
  loading: false,
  loaded: false,
  error: ''
}

export function customerReducer(
  state: ICustomerState = initialState,
  action: customerActions.Action
): ICustomerState {
  switch (action.type) {
    case customerActions.CustomerActionTypes.LOAD_CUSTOMERS:
      return {
        ...state,
        loading: true
      }
    case customerActions.CustomerActionTypes.LOAD_CUSTOMERS_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        customers: <ICustomer[]>action.payload
      }
    case customerActions.CustomerActionTypes.LOAD_CUSTOMERS_FAIL:
      return {
        ...state,
        customers: [],
        loading: false,
        loaded: false,
        error: <string>action.payload
      }
    default:
      return state;
  }
}