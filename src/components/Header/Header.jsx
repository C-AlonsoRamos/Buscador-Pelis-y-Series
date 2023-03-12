import './Header.css';

import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  return (
    <header>
      <div className="pt-header1">
        <div>
          <h1>DEMO Streaming</h1>
        </div>

        <div className="pt-list">
          <ul>
            <li>
              <NavLink to="/login">Log in</NavLink>
            </li>
            <li>
              <button onClick={() => navigate('/')}>Start your free trial</button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
