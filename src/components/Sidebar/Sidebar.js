
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { sidebarLinks } from "../../data/dashboard-links";
import SidebarLink from "./SidebarLink";
import { logout } from "../../services/operations/auth";
import "./Sidebar.css";

function Sidebar() {
  const { user } = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function btnHandler() {
    dispatch(logout(navigate));
  }

  return (
    <div className="sidebar">
      <header>Dashboard</header>

      <nav className="sidebar-nav">
        <ul>
          {sidebarLinks.map((link) => {
            if (link.role && user?.role !== link.role) return null;
            return <SidebarLink key={link.id} link={link} iconName={link.icon} />;
          })}
        </ul>
      </nav>

      <button className="logoutButton" onClick={btnHandler}>
        <span>Logout</span>
      </button>
    </div>
  );
}

export default Sidebar;
