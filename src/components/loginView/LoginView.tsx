import * as React from 'react';

const LoginView = ({ onSubmit }) => {
  return (
    <div>
      <h1>Sign up</h1>
      <form onSubmit={onSubmit}>
        <label>
          Password
          <input name="password" type="password" placeholder="Password" />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginView;
