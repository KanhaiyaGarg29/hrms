import React from "react";
// import { Link} from "react-router-dom"
import { sidebarLinks } from "../data/dashboard-links";
import SidebarLink from "../components/SidebarLink";

function Home() {
  return (
    <>
      <div>Home kashish</div>
      {/* <Link to="/create">
          <p>
            Add Employee
          </p>
        </Link>

        <Link to="/category">
          <p>
            Add Category
          </p>
        </Link>

        <Link to="/viewEmployee">
          <p>
            Employee List
          </p>
        </Link> */}
      {sidebarLinks.map((link) => {
        return <SidebarLink key={link.id} link={link} />;
      })}
    </>
  );
}

export default Home;
