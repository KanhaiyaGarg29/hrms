import React from 'react'
import { useSelector } from 'react-redux';
import { sidebarLinks } from "../data/dashboard-links";
import SidebarLink from "../components/SidebarLink";

function Sidebar() {
    const { user } = useSelector((state) => state.profile)
  return (
    <>
    <div>Dashboard </div>
    
    {sidebarLinks.map((link) => {
        if (link.role && user?.role !== link.role) return null
        return (
          <SidebarLink key={link.id} link={link} iconName={link.icon} />
        )
      })}
    </>
  )
}

export default Sidebar