import React from 'react';
import { useAuth } from '../context/AuthContext';

const Admin = () => {
  const { user } = useAuth();

  if (!user) return <div>Please log in</div>;
  if (!user.isAdmin) return <div>Access denied. Admins only.</div>;

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <p>Welcome, {user.name}!</p>
      <p>Here you can manage products and orders.</p>
    </div>
  );
};

export default Admin;
