import { GET_CURRENCIES, RM_EXPENSE, UPDATE_EXPENSES } from '../actions/index';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_CURRENCIES:
    return {
      ...state,
      currencies: [...action.payload],
    };
  case UPDATE_EXPENSES:
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };
  case RM_EXPENSE:
    return {
      ...state,
      expenses: state.expenses.filter((expense) => expense !== action.payload),
    };
  default:
    return state;
  }
};

export default wallet;
