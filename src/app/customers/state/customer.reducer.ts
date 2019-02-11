import * as customerActions from './customer.actions';
import { createFeatureSelector, createSelector } from '@ngrx/store';

import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as fromRoot from '../../state/app-state';
import { ICustomer } from 'src/app/customer.interface';

export interface ICustomerState {
  ids: number[];
  entities: { [key: number]: ICustomer };
  selectedCustomerId: number;
  loading: boolean;
  loaded: boolean;
  error: string;
}

export interface IAppState extends fromRoot.IAppState {
  customers: ICustomerState
}

export const customerAdapter: EntityAdapter<ICustomer> = createEntityAdapter<ICustomer>();

export const defaultCustomer: ICustomerState = {
  ids: [],
  entities: {},
  selectedCustomerId: null,
  loading: false,
  loaded: false,
  error: ''
}

export const initialState: ICustomerState = customerAdapter.getInitialState(defaultCustomer);

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
      return customerAdapter.addAll(<ICustomer[]>action.payload, {
        ...state,
        loading: false,
        loaded: true
      })
    case customerActions.CustomerActionTypes.LOAD_CUSTOMERS_FAIL:
      return {
        ...state,
        entities: {},
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
  customerAdapter.getSelectors().selectAll
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