import { render } from '@testing-library/react';
import { MemoryRouter } from "react-router-dom";
import { UserProvider } from "../../context/ProvideAuth.jsx";
import Header from "./Header.jsx";

jest.mock('../../context/ProvideAuth');
jest.mock('../../services/users');
jest.mock('../../services/client');
jest.mock('../../services/profiles');

it('should display a header with `Not Signed In` when signed out', () => {
  const { container } = render (
    <UserProvider>
      <MemoryRouter>
        <Header/>
      </MemoryRouter>
    </UserProvider>
  )
  expect(container).toMatchSnapshot();
})