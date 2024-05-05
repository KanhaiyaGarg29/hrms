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
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import './Sidebar.css'
import { BiChevronDown } from "react-icons/bi";
import { BiChevronUp } from "react-icons/bi";

export default function SidebarLink({ link }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div>
      {link.subLinks ? (
        <div className="dropdown">
          <div onClick={toggleDropdown}>
            <span>{link.name}</span>
            <span className="dropdown-icon">{isDropdownOpen ? <BiChevronUp /> : <BiChevronDown />}</span>
          </div>
          {isDropdownOpen && (
            <div className="sublinks">
              {link.subLinks.map((subLink) => (
                <NavLink to={subLink.path}>
                <div>
                  <span></span>
                  <span>{subLink.name}</span>
                </div>
              </NavLink>
              ))}
              </div>
            
          )}
        </div>
      ) : (
        <div>
        <NavLink to={link.path}>
          <div>
            {/* Icon Goes Here */}
            {/* <Icon className="text-lg" /> */}
            <span></span>
            <span>{link.name}</span>
          </div>
        </NavLink>
        </div>
      )}
    </div>
  );
}

