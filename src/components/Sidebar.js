import React from "react";
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { sidebarLinks } from "../data/dashboard-links";
import SidebarLink from "../components/SidebarLink";
import { logout } from "../services/operations/auth";

function Sidebar() {
  const { user } = useSelector((state) => state.profile);
  const dispatch = useDispatch()
  const navigate = useNavigate()
  function btnHandler(){
    dispatch(logout(navigate));
  }
  return (
    <>
      <div>Dashboard </div>

      {sidebarLinks.map((link) => {
        if (link.role && user?.role !== link.role) return null;
        return <SidebarLink key={link.id} link={link} iconName={link.icon} />;
      })}

      <button onClick={btnHandler}>
        <div>
          <span>Logout</span>
        </div>
      </button>
    </>
  );
}

export default Sidebar;
