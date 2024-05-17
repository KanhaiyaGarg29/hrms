import React from "react";
import {Navbar} from './LandingPage/Navbar/Navbar.js';
import Mainpage from "./LandingPage/Mainpage/mainpage.js";
import Secondpage from "./LandingPage/Secondpage/secondpage.js"
import Thirdpage from "./LandingPage/Thirdpage/thirdpage.js";
import Review from "./LandingPage/testimonials/Review.js";
import Footer from "./LandingPage/Footer/MainFooter.js";
function Home() {

  return (
    <>
      <div>
        <Navbar />
        <Mainpage />
        <Secondpage />
        <Thirdpage />
        <Review></Review>
        <Footer></Footer>
      </div>
    </>
  );
}

export default Home;