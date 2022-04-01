import React from 'react';
import { useSelector } from 'react-redux';

export default function Header() {
  const email = useSelector(({ user }) => user?.email);
  const expenses = useSelector(({ wallet }) => wallet?.expenses);
  return (
    <header>
      <span data-testid="email-field">{email}</span>
      <br />
      <span data-testid="total-field">
        {expenses.length > 0
          ? expenses
              .map(
                ({ value, currency, exchangeRates }) =>
                  parseFloat(value) * parseFloat(exchangeRates[currency].ask)
              )
              .reduce((acc, curr) => acc + curr, 0)
              .toFixed(2)
          : 0}
      </span>
      <span data-testid="header-currency-field"> BRL</span>
    </header>
  );
}
