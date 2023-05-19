import React, { useState  } from 'react';


function Login() {

  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isLogin) {
      // Add login logic here
    } else {
      // Add sign-up logic here
    }
  };

  const handleToggleMode = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">{isLogin ? 'Login' : 'Sign Up'}</h2>
       <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="username" className="block mb-2">
            Email
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
            className="border border-gray-300 px-4 py-2 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            className="border border-gray-300 px-4 py-2 w-full"
            required
          />
        </div>
        {!isLogin && (
          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              className="border border-gray-300 px-4 py-2 w-full"
              required
            />
          </div>
        )}
        <button type="submit" className="bg-green-500 hover:bg-green-600 text-white px-4 py-2">
          {isLogin ? 'Login' : 'Sign Up'}
        </button>
      </form> */} 
      <div className="mt-4">
        {isLogin ? (
          <p>
            Don't have an account?{' '}
            <button className="text-blue-500" onClick={handleToggleMode}>
              Sign Up
            </button> 
            <button className="text-blue-500" onClick={signOut}>Sign out</button> 
          </p>
        ) 
        : (
          <p>
            Already have an account?{' '}
            <button className="text-blue-500" onClick={handleToggleMode}>
              Login
            </button> 
          </p>
        )
        }
      </div>
    </div>
  );
}

export default App;
