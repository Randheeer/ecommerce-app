import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav style={{ display: 'flex', gap: '1rem', padding: '1rem', backgroundColor: '#333', color: '#fff' }}>
      <Link to="/" style={{ color: '#fff' }}>Home</Link>
      <Link to="/cart" style={{ color: '#fff' }}>Cart</Link>
      {user ? (
        <>
          <Link to="/profile" style={{ color: '#fff' }}>Profile</Link>
          {user.isAdmin && <Link to="/admin" style={{ color: '#fff' }}>Admin</Link>}
          <button onClick={handleLogout} style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer' }}>Logout</button>
        </>
      ) : (
        <>
          <Link to="/login" style={{ color: '#fff' }}>Login</Link>
          <Link to="/register" style={{ color: '#fff' }}>Register</Link>
        </>
      )}
    </nav>
  );
};

export default Navbar;
