import React from 'react';
import { useSelector } from 'react-redux';

export default function Header() {
  const email = useSelector(({ user }) => user?.email);
  const total = useSelector(({ wallet }) => wallet?.total);
  const currency = useSelector(({ wallet }) => wallet?.currency);
  return (
    <header>
      <p>
        {`Email: `}
        <span data-testid="email-field">{email}</span>
      </p>
      <p>
        {`Despesa Total: `}
        <span data-testid="total-field">{total}</span>
        <span data-testid="header-currency-field">{currency}</span>
      </p>
    </header>
  );
}
