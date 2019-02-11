const initialState: any = {
  customers: [
    {
      address: '123 Sub Street',
      id: 1,
      membership: 'Platinum',
      name: 'John Doe',
      phone: '910928392098'
    }, {
      address: '893 Main Voulevard',
      id: 2,
      membership: 'Pro',
      name: 'Mary Johnson',
      phone: '808937482734'
    }
  ],
  loading: false,
  loaded: true
}

export function customerReducer(state: any = initialState, action: any): any {
  switch (action.type) {
    case 'LOAD_CUSTOMER':
      return {
        ...state,
        loading: true,
        loaded: false
      }
    default:
      return state;
  }
}