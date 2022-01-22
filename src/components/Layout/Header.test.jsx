import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { UserProvider } from '../../context/ProvideAuth.jsx';
import Header from './Header.jsx';

jest.mock('../../context/ProvideAuth.jsx');
jest.mock('../../services/users.js');

it('should display a header with `Not Signed In` when signed out', () => {
  const { container } = render(
    <UserProvider>
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    </UserProvider>
  );
  expect(container).toMatchSnapshot();
});

it('should display a header with users email displayed when signed in', () => {
  const { container } = render (
    <UserProvider mockUser={{ id: 1, email: 'test@example.com'}}>
      <MemoryRouter>
        <Header/>
      </MemoryRouter>
    </UserProvider>
  )
  screen.getByText('test@example.com', { exact: false });
  expect(container).toMatchSnapshot();
});
