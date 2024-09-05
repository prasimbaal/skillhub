import React, { useState, useEffect } from 'react';
import axios from 'axios';

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.withCredentials = true;

const client = axios.create({
  baseURL: "http://127.0.0.1:8000"
});

function LoginPage() {
  const [currentUser, setCurrentUser] = useState();
  const [registrationToggle, setRegistrationToggle] = useState(false);
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    client.get("/api/profile/")
    .then(function(res) {
      setCurrentUser(true);
    })
    .catch(function(error) {
      setCurrentUser(false);
    });
  }, []);

  function update_form_btn() {
    setRegistrationToggle(!registrationToggle);
  }

  function submitRegistration(e) {
    e.preventDefault();
    client.post(
      "/api/registration/",
      {
        email: email,
        username: username,
        password: password
      }
    ).then(function(res) {
      client.post(
        "/api/login/",
        {
          email: email,
          password: password
        }
      ).then(function(res) {
        setCurrentUser(true);
      });
    });
  }

  function submitLogin(e) {
    e.preventDefault();
    client.post(
      "/api/login/",
      {
        username: username,
        password: password
      }
    ).then(function(res) {
      setCurrentUser(true);
    });
  }

  function submitLogout(e) {
    e.preventDefault();
    client.post(
      "/api/logout/",
      { withCredentials: true }
    ).then(function(res) {
      setCurrentUser(false);
    });
  }

  if (currentUser) {
    return (
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-gray-900 text-white py-4 px-6">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-semibold">Authentication App</h1>
            <button 
              onClick={submitLogout} 
              className="bg-red-600 px-4 py-2 rounded-md hover:bg-red-700"
            >
              Log out
            </button>
          </div>
        </nav>
        <div className="flex justify-center items-center h-screen">
          <h2 className="text-3xl font-bold">You're logged in!</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-gray-900 text-white py-4 px-6">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-semibold">Authentication App</h1>
          <button 
            onClick={update_form_btn} 
            className="bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700"
          >
            {registrationToggle ? 'Log in' : 'Register'}
          </button>
        </div>
      </nav>
      <div className="flex justify-center items-center h-screen">
        {registrationToggle ? (
          <form onSubmit={submitRegistration} className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4">Register</h2>
            <div className="mb-4">
              <label className="block text-gray-700">Email address</label>
              <input 
                type="email" 
                className="w-full p-2 border border-gray-300 rounded mt-1" 
                placeholder="Enter email" 
                value={email} 
                onChange={e => setEmail(e.target.value)} 
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Username</label>
              <input 
                type="text" 
                className="w-full p-2 border border-gray-300 rounded mt-1" 
                placeholder="Enter username" 
                value={username} 
                onChange={e => setUsername(e.target.value)} 
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Password</label>
              <input 
                type="password" 
                className="w-full p-2 border border-gray-300 rounded mt-1" 
                placeholder="Enter password" 
                value={password} 
                onChange={e => setPassword(e.target.value)} 
              />
            </div>
            <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 w-full">
              Register
            </button>
          </form>
        ) : (
          <form onSubmit={submitLogin} className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4">Log in</h2>
            <div className="mb-4">
              <label className="block text-gray-700">Username</label>
              <input 
                type="text" 
                className="w-full p-2 border border-gray-300 rounded mt-1" 
                placeholder="Enter username" 
                value={username} 
                onChange={e => setUsername(e.target.value)} 
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Password</label>
              <input 
                type="password" 
                className="w-full p-2 border border-gray-300 rounded mt-1" 
                placeholder="Enter password" 
                value={password} 
                onChange={e => setPassword(e.target.value)} 
              />
            </div>
            <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 w-full">
              Log in
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default LoginPage;