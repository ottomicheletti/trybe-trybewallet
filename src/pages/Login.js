import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { userEmail } from '../actions/index';

function Login(props) {
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  const SEIS = 6;

  const submitBtn = (event) => {
    event.preventDefault();
    const { history, saveUserEmail } = props;
    saveUserEmail(email);
    history.push('/carteira');
  };

  return (
    <form className="login-page">
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
          onClick={ submitBtn }
        >
          Entrar
        </button>
      </fieldset>
    </form>
  );
}

const mapDispatchToProps = (dispatch) => ({
  saveUserEmail: (info) => dispatch(userEmail(info)),
});

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
  saveUserEmail: PropTypes.func,
}.isRequired;

export default connect(null, mapDispatchToProps)(Login);
