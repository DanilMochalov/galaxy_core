import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { login, logout } from '../store/store';

const Profile: React.FC = () => {
  const dispatch = useDispatch();
  const email = useSelector((state: RootState) => state.user.email);
  const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn);

  const handleLogin = () => {
    dispatch(login('user@example.com'));
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      <h2>Profile</h2>
      {isLoggedIn ? (
        <div>
          <p>Email: {email}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <p>Please log in.</p>
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
};

export default Profile;
