import * as customerActions from './customer.actions';
import { createFeatureSelector, createSelector } from '@ngrx/store';

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

const getCustomerFeatureState = createFeatureSelector<ICustomerState>('customers');

export const getCustomers = createSelector(
  getCustomerFeatureState,
  (state: ICustomerState) => state.customers
);

export const getCustomersLoading = createSelector(
  getCustomerFeatureState,
  (state: ICustomerState) => state.loading
);

export const getCustomersLoaded = createSelector(
  getCustomerFeatureState,
  (state: ICustomerState) => state.loaded
);

export const getError = createSelector(
  getCustomerFeatureState,
  (state: ICustomerState) => state.error
);