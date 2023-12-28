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
        Logout
      </NavLink>
      <NavLink style={navLinkStyles} to="/dashboard/home">
        Teacher Class Teacher
      </NavLink>
      <NavLink style={navLinkStyles} to="/dashboard/staff-time-sheets">
        Staff Time Sheets
      </NavLink>
      <NavLink style={navLinkStyles} to="/dashboard/file-data-reader">
        File-Data-Reader
      </NavLink>
    </nav>
  );
};

export default Navbar;
