import './Layout_base.css';

import React from 'react';

const Layout = ({ children }) => {
  return <div className="pt-layout">{children}</div>;
};

export default Layout;
