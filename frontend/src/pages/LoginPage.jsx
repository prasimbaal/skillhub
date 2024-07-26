import React, { useState } from 'react';

const LoginPage = () => {
  const [isRegistered, setIsRegistered] = useState(false);

  const handleLogin = () => {
    // Implement login logic here
    console.log('Login logic');
  };

  const handleRegister = () => {
    // Implement registration logic here
    console.log('Register logic');
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl mb-4">{isRegistered ? 'Login' : 'Register'}</h2>
        {isRegistered ? (
          <>
            <input type="text" placeholder="Username" className="w-full p-2 mb-4 border rounded" />
            <input type="password" placeholder="Password" className="w-full p-2 mb-4 border rounded" />
            <button onClick={handleLogin} className="w-full bg-blue-500 text-white py-2 rounded">
              Login
            </button>
          </>
        ) : (
          <>
            <input type="text" placeholder="Username" className="w-full p-2 mb-4 border rounded" />
            <input type="email" placeholder="Email" className="w-full p-2 mb-4 border rounded" />
            <input type="password" placeholder="Password" className="w-full p-2 mb-4 border rounded" />
            <button onClick={handleRegister} className="w-full bg-green-500 text-white py-2 rounded">
              Register
            </button>
          </>
        )}
        <div className="text-center mt-4">
          <button
            onClick={() => setIsRegistered(!isRegistered)}
            className="text-blue-500 underline"
          >
            {isRegistered ? 'Need to register?' : 'Already registered?'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;