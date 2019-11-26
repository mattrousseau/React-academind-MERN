import React, { useState, useContext } from 'react';

import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import Card from '../../shared/components/UIelements/Card';
import { useForm } from '../../shared/hooks/form-hook';
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH
} from '../../shared/util/validators';
import { AuthContext } from '../../shared/context/AuthContext';
import './Auth.css';

const Auth = () => {
  const auth = useContext(AuthContext);

  const [isLoginMode, setIsLoginMode] = useState(true);

  const [formState, InputHandler, setFormData] = useForm(
    {
      email: {
        value: '',
        isValid: false
      },
      password: {
        value: '',
        isValid: false
      }
    },
    false
  );

  const authSubmitHandler = event => {
    event.preventDefault();
    auth.login();
  };

  const swithModeHandler = event => {
    if (!isLoginMode) {
      setFormData(
        {
          ...formState.inputs,
          username: undefined
        },
        formState.inputs.email.isValid && formState.inputs.password.isValid
      );
    } else {
      setFormData(
        {
          ...formState.inputs,
          username: {
            value: '',
            isValid: false
          }
        },
        false
      );
    }
    setIsLoginMode(prevMov => !prevMov);
  };

  return (
    <Card className="authentication">
      <h2>{isLoginMode ? 'Login' : 'Sign Up'}</h2>
      <hr />
      <form className="user-form" onSubmit={authSubmitHandler}>
        {!isLoginMode && (
          <Input
            id="username"
            type="text"
            label="Username"
            element="input"
            validators={[VALIDATOR_MINLENGTH(3)]}
            errorText="Please provide a valid username."
            onInput={InputHandler}
          />
        )}
        <Input
          id="email"
          type="email"
          label="Email"
          element="input"
          validators={[VALIDATOR_EMAIL()]}
          errorText="Please provide a valid email."
          onInput={InputHandler}
        />
        <Input
          id="password"
          type="password"
          label="Password"
          element="input"
          validators={[VALIDATOR_MINLENGTH(6)]}
          errorText="Please provide a valid password."
          onInput={InputHandler}
        />
        <Button disabled={!formState.isValid}>
          {isLoginMode ? 'LOGIN' : 'SIGN UP'}
        </Button>
      </form>
      <Button inverse onClick={swithModeHandler}>
        Switch to {isLoginMode ? 'Sign Up' : 'Login'}
      </Button>
    </Card>
  );
};

export default Auth;
