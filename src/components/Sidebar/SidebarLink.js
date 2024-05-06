// import { NavLink } from "react-router-dom";


// export default function SidebarLink({ link }) {
//   return (
//     <NavLink to={link.path}>
//       <div>
//         {/* Icon Goes Here */}
//         {/* <Icon className="text-lg" /> */}
//         <span  ></span>
//         <span>{link.name}</span>
//       </div>
//     </NavLink>
//   );
// }
import React  from "react";
import { NavLink } from "react-router-dom";
import './Sidebar.css'


export default function SidebarLink({ link }) {

  return (
    <div>
       <NavLink to={link.path}>
      <div>
         {/* Icon Goes Here */}
         {/* <Icon className="text-lg" /> */}
        <span  ></span>
        <span>{link.name}</span>
       </div>
     </NavLink>
    </div>
  );
}

