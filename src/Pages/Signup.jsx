import React, { useState } from 'react';

function SignUpPage() {
  // State variables to store email, password, and whether to remember the user
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can perform sign-up logic
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
    // Save email to local storage
    localStorage.setItem('email', email);
    // You can redirect the user or perform further actions based on the sign-up result
  };

  return (
    <div className="wrapper" id='signup'>
      <div className="signup-box">
        <form onSubmit={handleSubmit}>
          <h2>Sign Up</h2>

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

          <div className="input-box">
            <span className="icon">
              <ion-icon name="lock-closed"></ion-icon>
            </span>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <label>Confirm Password</label>
          </div>

          <button type="submit">Sign Up</button>

          <div className="login-link">
            <p>
              Already have an account? <a href="#">Login</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUpPage;
