import React from 'react';
import BtmFooter from './btmFooter';


const PageLayout = ({ children }) => {
  return (
    <div className="page-container">
      <div className="content">
        {children}
      </div>
      <BtmFooter />
    </div>
  );
};

export default PageLayout;
