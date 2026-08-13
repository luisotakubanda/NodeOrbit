// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders NodeOrbit title', () => {
    render(<App />);
    const titleElement = screen.getByText(/NodeOrbit/i);
    expect(titleElement).toBeInTheDocument();
});
