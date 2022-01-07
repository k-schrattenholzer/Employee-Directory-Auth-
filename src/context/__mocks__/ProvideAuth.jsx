import { createContext, useContext, useMemo, useState } from 'react';


const ProvideAuth = createContext();

const UserProvider = ({ mockUser, children }) => {

  const [user, setUser] = useState(
    mockUser ? { id: mockUser.id, email: mockUser.email } : {}
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

export { UserProvider, useUser }
