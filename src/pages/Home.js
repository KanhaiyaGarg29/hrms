import React from "react";
import {Navbar} from './LandingPage/Navbar/Navbar.js';
import Mainpage from "./LandingPage/Mainpage/mainpage.js";
import Secondpage from "./LandingPage/Secondpage/secondpage.js"
import Thirdpage from "./LandingPage/Thirdpage/thirdpage.js";
function Home() {

  return (
    <>
      <div>
        <Navbar />
        <Mainpage />
        <Secondpage />
        <Thirdpage />
      </div>
    </>
  );
}

export default Home;