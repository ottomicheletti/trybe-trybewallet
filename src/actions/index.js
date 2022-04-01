export const UPDATE_USER_EMAIL = 'UPDATE_USER_EMAIL';

export const updateUserEmail = (payload) => ({ type: UPDATE_USER_EMAIL, payload });

export const GET_CURRENCIES = 'GET_CURRENCIES';

export const getCurrencies = (payload) => ({ type: GET_CURRENCIES, payload });

export const UPDATE_EXPENSES = 'UPDATE_EXPENSES';

export const updateExpenses = (payload) => ({ type: UPDATE_EXPENSES, payload });
