import { UPDATE_CURRENCIES, UPDATE_USER_EMAIL } from '../actions/index';

const INITIAL_STATE = {
  user: {
    email: '',
  },
  wallet: {
    currencies: [],
    expenses: [],
  },
};

export default function reducers(state = INITIAL_STATE, action) {
  switch (action.type) {
  case UPDATE_USER_EMAIL:
    return {
      ...state,
      user: { email: action.payload },
    };
  case UPDATE_CURRENCIES:
    return {
      ...state,
      wallet: { currencies: [...action.payload], expenses: [...state.wallet.expenses] },
    };
  default:
    return state;
  }
}
