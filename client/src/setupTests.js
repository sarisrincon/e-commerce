
import '@testing-library/jest-dom';


jest.mock('react-router', () => ({
  ...jest.requireActual('react-router'),
  useParams: jest.fn(),
  useLocation: jest.fn(),
}));
