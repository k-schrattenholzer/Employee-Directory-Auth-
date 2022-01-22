import { render } from '@testing-library/react';
import UserForm from './UserForm.jsx'

it('should display a form for login stuff', () => {
  const { container } = render(<UserForm />);
  expect(container).toMatchSnapshot();
});