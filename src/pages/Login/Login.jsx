import './Login.css';

import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  return (
    <main>
      <div className="container">
        <div className="pt-login">
          <h1>WELCOME</h1>
          <input type="text" className="user" placeholder="User" />
          <button className="button-login" onClick={() => navigate('/')}>
            Log IN
          </button>
        </div>
      </div>
    </main>
  );
};

export default Login;
