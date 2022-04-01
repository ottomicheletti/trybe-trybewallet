import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrencies, updateExpenses } from '../actions/index';
import Header from './components/Header';
import Table from './components/Table';

function Wallet() {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState({
    value: '',
    currency: 'USD',
    method: 'Dinheiro',
    tag: 'Alimento',
    description: '',
    id: 0,
    exchangeRates: {},
  });
  const currencies = useSelector(({ wallet }) => wallet?.currencies);
  const expenses = useSelector(({ wallet }) => wallet?.expenses);

  const fetchCurrencies = useCallback(async () => {
    try {
      const response = await fetch('https://economia.awesomeapi.com.br/json/all');
      const data = await response.json();
      delete data.USDT;
      dispatch(getCurrencies(Object.keys(data)));
      setInputValue((prevState) => ({ ...prevState, exchangeRates: data }));
    } catch (e) {
      console.error(e);
    }
  }, [dispatch]);

  useEffect(() => {
    fetchCurrencies();
  }, [fetchCurrencies]);

  const handleChange = ({ target: { name, value } }) => {
    setInputValue((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetchCurrencies();
    setInputValue((prevState) => ({ ...prevState, id: expenses.length + 1 }));
    const { value, currency, method, tag, description, id, exchangeRates } = inputValue;
    dispatch(updateExpenses({
      value,
      currency,
      method,
      tag,
      description,
      id,
      exchangeRates,
    }));
    setInputValue((prevState) => ({ ...prevState, value: '' }));
  };

  return (
    <div className="wallet-page">
      <Header />
      <form onSubmit={ handleSubmit }>
        <label htmlFor="value">
          Valor
          <input
            value={ inputValue.value }
            type="number"
            name="value"
            onChange={ handleChange }
            data-testid="value-input"
          />
        </label>
        <label htmlFor="currency">
          Moeda
          <select
            name="currency"
            id="currency"
            onChange={ handleChange }
            data-testid="currency-input"
          >
            {currencies.map((currency, index) => (
              <option key={ index }>{ currency }</option>
            ))}
          </select>
        </label>
        <label htmlFor="method">
          Método de pagamento
          <select
            name="method"
            id="method"
            onChange={ handleChange }
            data-testid="method-input"
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Categoria
          <select
            name="tag"
            id="tag"
            onChange={ handleChange }
            data-testid="tag-input"
          >
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
        <label htmlFor="description">
          Descrição
          <input
            type="text"
            name="description"
            onChange={ handleChange }
            data-testid="description-input"
          />
        </label>
        <button type="submit">Adicionar despesa</button>
      </form>
      <Table expenses={ expenses } />
    </div>
  );
}

export default (Wallet);
