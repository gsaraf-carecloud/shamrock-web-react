import React from 'react';
import TextInput from '../common/TextInput';

const LoginForm = ({usernameLabel, passwordLabel}) => {
  return (
    <form>
      <h1>Login to Shamrock</h1>
      <TextInput
        name="username"
        label={usernameLabel}/>
      <TextInput
        name="username"
        type="password"
        label={passwordLabel}/>

      <input
        type="submit"/>
    </form>
  );
};

LoginForm.propTypes = {
  usernameLabel: React.PropTypes.string,
  passwordLabel: React.PropTypes.string,
};

export default LoginForm;
