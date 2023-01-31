import { useContext, useState } from 'react';
import React from 'react';
import { type } from '@testing-library/user-event/dist/type/index.js';
import { UserContext } from '../../Context/UserProvider.js';
import { authUser } from '../../services/auth.js';
import { NavLink } from 'react-router-dom';

export default function Auth() {
  const { user, setUser } = useContext(UserContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitAuth = async () => {
    try {
      const user = await authUser(email, password, type);
      setUser(user);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="auth-form">
      <nav>
        <div>Welcome back to your list of things to do!</div>
        <div className="tabs">
          <NavLink to="/auth/sign">Sign Up</NavLink>
        </div>
      </nav>
    </div>
  );
}
