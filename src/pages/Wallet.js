import React from 'react';
import { useSelector } from 'react-redux';
import Header from './components/Header';

function Wallet() {
  const email = useSelector(({ user }) => user.email);
  const total = useSelector(({ wallet }) => wallet.total);
  const currency = useSelector(({ wallet }) => wallet.currency);

  return (
    <div className="wallet-page">
      <Header email={ email } total={ total } currency={ currency } />
    </div>
  );
}

export default Wallet;
