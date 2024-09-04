import React, { useState } from 'react';
import axios from 'axios';

const LoginPage = ({ onLogin }) => {
  const [isRegistered, setIsRegistered] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      // Send login request to the backend
      const response = await axios.post('/api/login', {
        username,
        password,
      });
      
      if (response.data.success) {
        // If login is successful
        onLogin();
      } else {
        // Handle login failure
        alert('Login failed. Please check your credentials.');
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('An error occurred during login. Please try again later.');
    }
  };

  const handleRegister = async () => {
    try {
      // Send registration request to the backend
      const response = await axios.post('/api/register', {
        username,
        email,
        password,
      });
      
      if (response.data.success) {
        // If registration is successful
        onLogin();
      } else {
        // Handle registration failure
        alert('Registration failed. Please try again.');
      }
    } catch (error) {
      console.error('Registration error:', error);
      alert('An error occurred during registration. Please try again later.');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl mb-4">{isRegistered ? 'Login' : 'Register'}</h2>
        {isRegistered ? (
          <>
            <input
              type="text"
              placeholder="Username"
              className="w-full p-2 mb-4 border rounded"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-2 mb-4 border rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              onClick={handleLogin}
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-all"
            >
              Login
            </button>
          </>
        ) : (
          <>
            <input
              type="text"
              placeholder="Username"
              className="w-full p-2 mb-4 border rounded"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 mb-4 border rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-2 mb-4 border rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              onClick={handleRegister}
              className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition-all"
            >
              Register
            </button>
          </>
        )}
        <div className="text-center mt-4">
          <button
            onClick={() => setIsRegistered(!isRegistered)}
            className="text-blue-500 underline hover:text-blue-700 transition-all"
          >
            {isRegistered ? 'Need to register?' : 'Already registered?'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

