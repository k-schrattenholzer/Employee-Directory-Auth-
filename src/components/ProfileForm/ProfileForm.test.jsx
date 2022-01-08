import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ProfileForm from './ProfileForm.jsx'

it.skip('should display a profile form', () => {
  const { container } =  render(
      <MemoryRouter>
        <ProfileForm />
      </MemoryRouter>
  )
  expect(container).toMatchSnapshot();
})