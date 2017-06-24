import React, { Component } from 'react';
import { Accounts } from 'meteor/std:accounts-ui';

Accounts.ui.config({
  passwordSignupFields: 'EMAIL_ONLY',
  minimumPasswordLength: 6,
});

export default Login = () => (
  <div>
    <Accounts.ui.LoginForm />
  </div>
);