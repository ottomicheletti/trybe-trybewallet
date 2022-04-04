export const UPDATE_USER_EMAIL = 'UPDATE_USER_EMAIL';

export const updateUserEmail = (payload) => ({ type: UPDATE_USER_EMAIL, payload });

export const GET_CURRENCIES = 'GET_CURRENCIES';

export const getCurrencies = (payload) => ({ type: GET_CURRENCIES, payload });

export const UPDATE_EXPENSES = 'UPDATE_EXPENSES';

export const updateExpenses = (payload) => ({ type: UPDATE_EXPENSES, payload });

export const EDIT_EXPENSE = 'EDIT_EXPENSE';

export const editExpense = (payload) => ({ type: EDIT_EXPENSE, payload });

export const EDITING_STATUS = 'EDIT_STATUS';

export const editingStatus = (payload) => ({ type: EDITING_STATUS, payload });

export const ON_EDIT = 'ON_EDIT';

export const onEdit = (payload) => ({ type: ON_EDIT, payload });
