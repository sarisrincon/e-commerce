import React from 'react';
import { render, screen } from '@testing-library/react';
import WelcomeBanner from './WelcomeBanner';
import { MemoryRouter } from 'react-router-dom';

describe('WelcomeBanner', () => {
  it('Displays the welcome message', () => {
    render(
      <MemoryRouter>
        <WelcomeBanner onClose={() => { }} />
      </MemoryRouter>);
    expect(screen.getByText(/Hola/i)).toBeInTheDocument();
    expect(screen.getByText(/Para realizar búsquedas/i)).toBeInTheDocument();
  });

  it('Calls onClose when the close button is clicked', () => {
    const onClose = jest.fn();
    render(
      <MemoryRouter>
        <WelcomeBanner onClose={onClose} />
      </MemoryRouter>

    );
  });
});