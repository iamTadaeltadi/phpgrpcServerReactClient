import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'
import App from './App';

test('renders the app component', () => {
  render(<App />);
  const headerElement = screen.getByText(/gRPC Ping Client/i);
  expect(headerElement).toBeInTheDocument();
});

test('renders input and button elements', () => {
  render(<App />);
  const inputElement = screen.getByRole('textbox');
  const buttonElement = screen.getByRole('button', { name: /send/i });

  expect(inputElement).toBeInTheDocument();
  expect(buttonElement).toBeInTheDocument();
});

test('handles user input and button click', async () => {
  render(<App />);
  const inputElement = screen.getByRole('textbox');
  const buttonElement = screen.getByRole('button', { name: /send/i });

  fireEvent.change(inputElement, { target: { value: 'test message' } });
  fireEvent.click(buttonElement);

  const responseElement = await screen.findByText(/test message:/i);

  expect(responseElement).toBeInTheDocument();
});
