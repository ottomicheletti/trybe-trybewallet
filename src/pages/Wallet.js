import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateCurrencies } from '../actions/index';
import Header from './components/Header';

function Wallet() {
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchCurrencies() {
      try {
        const response = await fetch('https://economia.awesomeapi.com.br/json/all');
        const data = await response.json();
        delete data.USDT;
        dispatch(updateCurrencies(Object.keys(data)));
      } catch (e) {
        console.error(e);
      }
    }
    fetchCurrencies();
  }, [dispatch]);

  return (
    <div className="wallet-page">
      <Header />
    </div>
  );
}

export default (Wallet);
