export const SAVE_USER_EMAIL = 'SAVE_USER_EMAIL';

export const userEmail = (payload) => ({ type: SAVE_USER_EMAIL, payload });

export const GET_CURRENCIES = 'GET_CURRENCIES';

export const getCurrencies = (payload) => ({ type: GET_CURRENCIES, payload });

export function fetchCurrenciesAPI() {
  return async (dispatch) => {
    try {
      const { data } = await (await fetch('https://economia.awesomeapi.com.br/json/all')).json();
      const coins = Object.keys(data).filter((coin) => coin !== 'USDT');
      dispatch(getCurrencies(coins));
    } catch (error) {
      console.log(error);
    }
  };
}
