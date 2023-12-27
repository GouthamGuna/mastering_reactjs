import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "none" : "underline",
    };
  };

  return (
    <nav className="primary-nav">
      <NavLink style={navLinkStyles} to="/">
        Home
      </NavLink>
      <NavLink style={navLinkStyles} to="/staffTimeSheets">
        Staff Time Sheets
      </NavLink>
      <NavLink style={navLinkStyles} to="/file-data-reader">
        File-Data-Reade
      </NavLink>
    </nav>
  );
};

export default Navbar;