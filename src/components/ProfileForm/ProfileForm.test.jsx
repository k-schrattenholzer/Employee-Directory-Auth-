import { render } from '@testing-library/react';
import ProfileForm from './ProfileForm.jsx'

it.skip('should display a profile form', () => {
  const { container } =  render(
        <ProfileForm />
  )
  expect(container).toMatchSnapshot();
})