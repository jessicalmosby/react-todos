import React, { createContext, useContext } from 'react';
import { useState } from 'react';
import { getUser } from '../services/auth';

const UserContext = createContext();
const UserProvider = ({ children }) => {
  const currentUser = getUser();
  const [user, setUser] = useState(currentUser);

  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
};

const useUser = () => {
  const data = useContext(UserContext);

  if (!data) {
    throw Error('useUser must be wrapped in a UserProvider');
  }
  return data;
};

export { UserProvider, useUser };
