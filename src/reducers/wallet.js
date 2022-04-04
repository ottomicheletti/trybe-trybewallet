import { EDITING_STATUS, EDIT_EXPENSE,
  GET_CURRENCIES, ON_EDIT,
  UPDATE_EXPENSES } from '../actions/index';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  editStatus: false,
  onEdit: {},
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
  case EDIT_EXPENSE:
    return {
      ...state,
      expenses: action.payload,
    };
  case EDITING_STATUS:
    return {
      ...state,
      editStatus: !state.editStatus,
    };
  case ON_EDIT:
    return {
      ...state,
      onEdit: action.payload,
    };
  default:
    return state;
  }
};

export default wallet;
