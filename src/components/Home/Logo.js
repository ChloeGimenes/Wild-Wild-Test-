import React from 'react';
import Logo from '../../assets/img/logo.png';
import './Logo.css';

export default () => {
  return (
    <div className="logo">
      <img src={Logo} id="logo_parrot" alt="Logo"></img>
    </div>
  );
};
