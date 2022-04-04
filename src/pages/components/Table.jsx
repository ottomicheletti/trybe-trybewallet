import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editExpense, editingStatus, onEdit } from '../../actions/index';

function Table() {
  const dispatch = useDispatch();
  const expenses = useSelector(({ wallet }) => wallet?.expenses);

  const handleEditBtn = (index, expense) => {
    dispatch(editingStatus(true));
    dispatch(onEdit([index, expense]));
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Descrição</th>
          <th>Tag</th>
          <th>Método de pagamento</th>
          <th>Valor</th>
          <th>Moeda</th>
          <th>Câmbio utilizado</th>
          <th>Valor convertido</th>
          <th>Moeda de conversão</th>
          <th>Editar/Excluir</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map(({
          description,
          tag,
          method,
          value,
          currency,
          exchangeRates,
          id,
        }, index) => (
          <tr key={ id } >
            <td role="cell">{description}</td>
            <td role="cell">{tag}</td>
            <td role="cell">{method}</td>
            <td role="cell">{parseFloat(value).toFixed(2)}</td>
            <td role="cell">{exchangeRates[currency].name}</td>
            <td role="cell">{parseFloat(exchangeRates[currency].ask).toFixed(2)}</td>
            <td role="cell">{(value * exchangeRates[currency].ask).toFixed(2)}</td>
            <td role="cell">Real</td>
            <td role="cell">
              <button
                type="button"
                data-testid="edit-btn"
                onClick={ () => handleEditBtn(index,
                  { description, tag, method, value, currency, exchangeRates, id }) }
              >
                Editar
              </button>
              <button
                type="button"
                data-testid="delete-btn"
                onClick={ () => dispatch(editExpense(expenses
                  .filter((exp) => exp !== expenses[index]))) }
              >
                Excluir
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
