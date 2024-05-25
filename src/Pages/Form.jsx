import React, { useState, useEffect } from 'react';
function LoginPage() {
  // State variables to store email, password, and whether to remember the user
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  // Effect to retrieve saved email and rememberMe from local storage on component mount
  useEffect(() => {
    const savedEmail = localStorage.getItem('email');
    const savedRememberMe = localStorage.getItem('rememberMe') === 'true';
    if (savedEmail && savedRememberMe) {
      setEmail(savedEmail);
      setRememberMe(savedRememberMe);
    }
  }, []);

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can perform login authentication logic
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Remember Me:', rememberMe);
    // Save email and rememberMe to local storage if rememberMe is checked
    if (rememberMe) {
      localStorage.setItem('email', email);
      localStorage.setItem('rememberMe', rememberMe);
    } else {
      // If rememberMe is not checked, clear saved email and rememberMe from local storage
      localStorage.removeItem('email');
      localStorage.removeItem('rememberMe');
    }
    // You can redirect the user or perform further actions based on the authentication result
  };

  return (
    <div className="wrapper">
      <div className="login-box">
        <form onSubmit={handleSubmit}>
          <h2>Login</h2>

          <div className="input-box">
            <span className="icon">
              <ion-icon name="mail"></ion-icon>
            </span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label>Email</label>
          </div>

          <div className="input-box">
            <span className="icon">
              <ion-icon name="lock-closed"></ion-icon>
            </span>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label>Password</label>
          </div>

          <div className="remember-forgot">
            <label>
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />{' '}
              Remember me
            </label>
            <a href="#">Forgot Password?</a>
          </div>

          <button type="submit">Login</button>

          <div className="register-link">
            <p>
              Don't have an account? <a href="#">Register</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
