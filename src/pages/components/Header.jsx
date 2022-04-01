import React from 'react';

export default function Header(props) {
  return (
    <header>
      <p>
        {`Email: `}
        <span data-testid="email-field">{props.email}</span>
      </p>
      <p>
        {`Despesa Total: `}
        <span data-testid="total-field">{props.total}</span>
        <span data-testid="header-currency-field">{props.currency}</span>
      </p>
    </header>
  );
}
