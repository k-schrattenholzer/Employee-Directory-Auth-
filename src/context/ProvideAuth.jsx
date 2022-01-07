import { createContext, useContext, useMemo, useState } from 'react';
import { getUser } from '../services/users.js';

const ProvideAuth = createContext();

const UserProvider = ({ children }) => {
  const currentUser = getUser();
  const [user, setUser] = useState(
    currentUser ? { id: currentUser.id, email: currentUser.email } : {}
  );

  const value = useMemo(() => ({ user, setUser }), [user]);

  return <ProvideAuth.Provider value={value}>{children}</ProvideAuth.Provider>;
};

const useUser = () => {
  const context = useContext(ProvideAuth);

  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }

  return context;
};

export { ProvideAuth, UserProvider, useUser };
