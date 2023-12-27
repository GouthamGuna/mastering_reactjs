import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "none" : "none",
    };
  };

  return (
    <nav className="primary-nav">
      <NavLink style={navLinkStyles} to="/">
        Home
      </NavLink>
      <NavLink style={navLinkStyles} to="/staff-time-sheets">
        Staff Time Sheets
      </NavLink>
      <NavLink style={navLinkStyles} to="/file-data-reader">
        File-Data-Reader
      </NavLink>
    </nav>
  );
};

export default Navbar;
