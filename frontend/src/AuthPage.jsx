import axios from 'axios';
import React from 'react';

const AuthPage = (props) => {
  const onSubmit = (e) => {
    e.preventDefault();
    const username = e.target.elements.username.value; // Get the username value from the form

    axios.post('http://localhost:3001/authenticate', { username })
      .then(response => {
        const secret = response.data.secret; // Assuming response.data contains a secret field
        props.onAuth({ ...response.data, secret }); // Spread the response data and override/add the secret field
      })
      .catch(error => {
        console.error('Authentication error:', error); // Handle any errors
      });
  };

  return (
    <div className="background">
      <form onSubmit={onSubmit} className="form-card">
        <div className="form-title">Welcome 👋</div>
        <div className="form-subtitle">Set a username to get started</div>
        <div className="auth">
          <div className="auth-label">Username</div>
          <input className="auth-input" name="username" />
          <button className="auth-button" type="submit">Enter</button>
        </div>
      </form>
    </div>
  );
};

export default AuthPage;
