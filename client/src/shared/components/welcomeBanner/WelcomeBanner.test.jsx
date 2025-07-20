import React from 'react';
import { render, screen} from '@testing-library/react';
import WelcomeBanner from './WelcomeBanner';

describe('WelcomeBanner', () => {
  it('muestra el texto de bienvenida', () => {
    render(<WelcomeBanner onClose={() => {}} />);
    expect(screen.getByText(/Hola/i)).toBeInTheDocument();
    expect(screen.getByText(/Para realizar búsquedas/i)).toBeInTheDocument();
  });

  it('llama a onClose al hacer clic en el botón de cerrar', () => {
    const onClose = jest.fn();
    render(<WelcomeBanner onClose={onClose} />);
  });
});