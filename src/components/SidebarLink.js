import { NavLink } from "react-router-dom";


export default function SidebarLink({ link }) {
  return (
    <NavLink to={link.path}>
      <div>
        {/* Icon Goes Here */}
        {/* <Icon className="text-lg" /> */}
        <span  ></span>
        <span>{link.name}</span>
      </div>
    </NavLink>
  );
}
