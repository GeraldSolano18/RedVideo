import React from 'react';
import "../assets/styles/components/Categories.scss";

const Categories = ({ children, titulo }) => (
  <div className="categories">
    <h3 className="categories__title">{titulo}</h3>
    {children}
  </div>
);
export default Categories; 
