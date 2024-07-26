import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from '../../src/backend/AuthContext'
import RegisterUser from './RegisterUser';
import Login from './Login';
import UserProfile from './UserProfile';
import ProtectedRoute from '../../src/backend/ProtectedRoute';

const UserDashboard = () => {
  const isAuthenticated = true; // Replace with actual authentication logic
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/register" component={RegisterUser} />
          <Route path="/login" component={Login} />
          <ProtectedRoute path="/profile" component={UserProfile} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default UserDashboard;
