import React from 'react';

// Plain in-content page heading.
const PageTitle = ({ title, children }) => {
   return (
      <div className="page__heading container">
         <h1>{title}</h1>
         {children}
      </div>
   );
};

export default PageTitle;
