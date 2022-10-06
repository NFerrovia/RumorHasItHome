import React from 'react';
import '../css/Header.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <NavLink
        end
        to="/"
        className={({ isActive }) => (isActive ? 'item active' : 'item')}
      >
        Raiding Schedule
      </NavLink>
      <NavLink
        to="/Activity"
        className={({ isActive }) => (isActive ? 'item active' : 'item')}
      >
        Active Raiders
      </NavLink>
      <NavLink
        to="/Mythicplus"
        className={({ isActive }) => (isActive ? 'item active' : 'item')}
      >
        M+ Spreadsheet
      </NavLink>
      <NavLink
        to="/Events"
        className={({ isActive }) => (isActive ? 'item active' : 'item')}
      >
        Events
      </NavLink>
    </div>
  );
};

export default Header;
