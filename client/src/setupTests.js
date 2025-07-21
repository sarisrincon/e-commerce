// src/setupTests.js
import '@testing-library/jest-dom';

jest.mock('react-router-dom', () => {
  const actual = jest.requireActual('react-router-dom');
  return {
    ...actual,
    useParams: jest.fn(() => ({ id: '123' })),
    useLocation: jest.fn(() => ({ state: { fromQuery: 'busqueda' } })),
  };
});
