import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import RulesBtn from './Home/RulesBtn';

export default () => {
  return (
    <div className="Navbar">
      <ul className="myList">
        <li>
          <NavLink activeClassName="active" to="/Highscores">
            Highscores
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/Contact">
            Contact
          </NavLink>
          &nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;
          <NavLink activeClassName="active" to="/Legal">
            Legal
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/Rules">
            <RulesBtn />
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
