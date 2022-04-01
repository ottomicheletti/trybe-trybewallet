import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateUserEmail } from '../actions/index';

function Login(props) {
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  const SEIS = 6;
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const { history } = props;
    dispatch(updateUserEmail(email));
    history.push('/carteira');
  };

  return (
    <form className="login-page" onSubmit={ handleSubmit }>
      <fieldset>
        <input
          type="text"
          id="email"
          onChange={ ({ target: { value } }) => setEmail(value) }
          data-testid="email-input"
        />
        <input
          type="password"
          id="pwd"
          onChange={ ({ target: { value } }) => setPwd(value) }
          data-testid="password-input"
        />
        <button
          type="submit"
          disabled={ !(regex.test(email) && pwd.length >= SEIS) }
        >
          Entrar
        </button>
      </fieldset>
    </form>
  );
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
}.isRequired;

export default Login;
