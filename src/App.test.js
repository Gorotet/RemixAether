// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders RemixAether title', () => {
    render(<App />);
    const titleElement = screen.getByText(/RemixAether/i);
    expect(titleElement).toBeInTheDocument();
});
