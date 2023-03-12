import './Home.css';

import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <main className="home">
      <div className="box1">
        <div className="pt-header2">
          <h2>Popular Titles</h2>
        </div>
        <div className="box2">
          <div className="div1">
            <div className="pt-series">
              <NavLink to="/series">Series</NavLink>
            </div>
            <p>Popular Series</p>
          </div>
          <div className="div2">
            <div className="pt-movies">
              <NavLink to="/movies">Movies</NavLink>
            </div>
            <p>Popular Movies</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
