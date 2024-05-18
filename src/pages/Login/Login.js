import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../services/operations/auth";
import "./Login.css"
import { IoMdArrowBack } from "react-icons/io";
import userImage from "../../assets/download7.jpg"

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const { email, password } = formData;

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  }

  // const handleTogglePassword = () => {
  //   setShowPassword((prev) => !prev);
  // };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(login(email, password, navigate));
  };

  return (
    <div className="jmycontainer">
      <div className="jform-box">
        <div className="jmargin">
        <div className="back-icon"> <IoMdArrowBack color="white" fontSize={20}/></div>
        <div className="back-icon-content" onClick={()=>{navigate("/")}}>Back to Home</div>
          <div className="juser-image-container">
            <img src={userImage} alt="User" className="juser-image" />
          </div>
          <div><h2 className="jlogin">Login</h2></div>
          <form className="jform" onSubmit={handleOnSubmit}>
            <div className="jinput-group">
              {/* <label htmlFor="email">Email Address<sup>*</sup></label> */}
              <input
                id="email"
                required
                type="text"
                name="email"
                value={email}
                onChange={handleOnChange}
                className="jplaceholder jinput"
                
                placeholder="Email address"
              />
            </div>
            <div className="jinput-group">
              {/* <label htmlFor="password">Password<sup>*</sup></label> */}
              <input
                // id="password"
                required
                type={showPassword ? "text" : "password"}
                name="password"
                value={password}
                className="jplaceholder jinput"
                onChange={handleOnChange}
                placeholder="Password"
              />

              <div>
                <Link to="/forgot-password" className="jlink">
                  Forgot Password
                </Link>
              </div>
            </div>
            <div className="jinput-group">
              <button className="jbutton" type="submit">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;