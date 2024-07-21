import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function UserProfile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        const response = await axios.get('/api/profile', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setUser(response.data);
      }
    };

    fetchUser();
  }, []);

  return (
    <div>
      {user ? (
        <div>
          <h1>Welcome, {user.username}</h1>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};

