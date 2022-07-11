import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Signup from './signup';

test('Name input should be rendered', () => {
  render(
    <Router>
      <Signup />
    </Router>
  );
  const nameInputEl = screen.getByPlaceholderText(/name/i);
  expect(nameInputEl).toBeInTheDocument();
});

test('Email input should be rendered', () => {
  render(
    <Router>
      <Signup />
    </Router>
  );
  const emailInputEl = screen.getByPlaceholderText(/email/i);
  expect(emailInputEl).toBeInTheDocument();
});

test('Password input should be rendered', () => {
  render(
    <Router>
      <Signup />
    </Router>
  );
  const passwordInputEl = screen.getByPlaceholderText(/password/i);
  expect(passwordInputEl).toBeInTheDocument();
});

test('Button should be rendered', () => {
  render(
    <Router>
      <Signup />
    </Router>
  );
  const buttonInputEl = screen.getByRole('button');
  expect(buttonInputEl).toBeInTheDocument();
});
