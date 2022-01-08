import { render } from '@testing-library/react';
import { UserProvider } from '../../context/ProvideAuth.jsx';
import ProfileForm from './ProfileForm.jsx'

jest.mock('../../context/ProvideAuth.jsx');
jest.mock('../../services/profiles.js')
jest.mock('../../services/users.js');

it('should display a profile form', () => {
  const { container } =  render(
        <UserProvider>
          <ProfileForm />
        </UserProvider>
  )
  expect(container).toMatchSnapshot();
})