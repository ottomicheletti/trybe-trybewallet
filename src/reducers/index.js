import { GET_CURRENCIES, SAVE_USER_EMAIL } from '../actions/index';

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
  case SAVE_USER_EMAIL:
    return {
      ...state,
      user: { email: action.payload },
    };
  case GET_CURRENCIES:
    return {
      ...state,
      wallet: { currencies: [...state.wallet.currencies, ...action.payload] },
    };
  default:
    return state;
  }
}
