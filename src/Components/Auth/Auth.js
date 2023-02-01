import { useState } from 'react';
import React from 'react';
import { authUser } from '../../services/auth.js';
import { NavLink, Redirect, useParams } from 'react-router-dom';
import { useUser } from '../../Context/UserProvider.js';

export default function Auth() {
  const { user, setUser } = useUser();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { type } = useParams();

  if (user) {
    return <Redirect to="/items" />;
  }

  const submitAuth = async (e) => {
    e.preventDefault();
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
          <NavLink to="/auth/sign-in">Sign In </NavLink>
          <NavLink to="/auth/sign-up">Sign Up</NavLink>
        </div>
        <form onSubmit={submitAuth}>
          <div className="email">
            <label>Email: </label>
            <input
              className="input"
              type="email"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="pass">
            <label>Password: </label>
            <input
              className="input"
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="controls">
            <button>Submit</button>
          </div>
        </form>
      </nav>
    </div>
  );
}
