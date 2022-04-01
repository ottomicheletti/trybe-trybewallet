import React from 'react';
import { useSelector } from 'react-redux';

export default function Header() {
  const email = useSelector(({ user }) => user?.email);
  // const expenses = useSelector(({ wallet }) => wallet?.expenses);
  return (
    <header>
      <span data-testid="email-field">{email}</span>
      <br />
      <span data-testid="total-field">{0}</span>
      <span data-testid="header-currency-field">BRL</span>
    </header>
  );
}
