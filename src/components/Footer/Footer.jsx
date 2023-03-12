import './Footer.css';

import React from 'react';

const Footer = () => {
  return (
    <footer className="pt-footer">
      <div className="footer-div1">
        <ul>
          <li>
            <a href="/">Home |</a>
          </li>
          <li>
            <a href="#">Terms and Conditions |</a>
          </li>
          <li>
            <a href="#">Privacy Policy |</a>
          </li>
          <li>
            <a href="#">Collection Statement |</a>
          </li>
          <li>
            <a href="#">Help |</a>
          </li>
          <li>
            <a href="#">Manage Account</a>
          </li>
        </ul>
      </div>
      <div className="footer-div2">
        <p>Copyrigth © 2016 DEMO Streaming. All Rigths Reserved.</p>
      </div>
      <div className="footer-div3">
        <div className="list1">
          <ul>
            <li>
              <a href="https://es-es.facebook.com/" target="_blank" rel="noreferrer">
                <img
                  src="../../../public/images/facebook-white.svg"
                  alt="logo facebook"
                  className="facebook"
                />
              </a>
            </li>

            <li>
              <a href="https://twitter.com/?lang=es" target="_blank" rel="noreferrer">
                <img
                  src="../../../public/images/twitter-white.svg"
                  alt="logo twitter"
                  className="logo"
                />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                <img
                  src="../../../public/images/instagram-white.svg"
                  alt="logo instagram"
                  className="logo"
                />
              </a>
            </li>
          </ul>
        </div>
        <div className="list2">
          <ul>
            <li>
              <a
                href="https://www.apple.com/es/app-store/"
                target="_blank"
                rel="noreferrer"
              >
                <img src="../../../public/images/app-store.svg" alt="app store" />
              </a>
            </li>
            <li>
              <a href="https://play.google.com/" target="_blank" rel="noreferrer">
                <img src="../../../public/images/play-store.svg" alt="app store" />
              </a>
            </li>
            <li>
              <a href="https://www.microsoft.com/" target="_blank" rel="noreferrer">
                <img
                  src="../../../public/images/windows-store.svg"
                  alt="logo windows"
                  className="windows"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
