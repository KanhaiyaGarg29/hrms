import { useState } from "react"
import { useDispatch } from "react-redux"

import { Link, useNavigate } from "react-router-dom"
import { login } from "../services/operations/auth"


function Login() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const [showPassword, setShowPassword] = useState(false)

  const { email, password } = formData

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }))
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()
    dispatch(login(email, password, navigate))
  }
// const handleOnSubmit = async (e) => {
//     e.preventDefault();
    
//     try {
//       // Send form data to the backend for user authentication
//       const response = await fetch("http://localhost:4000/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         // User authenticated successfully, navigate to home page
//         navigate("/");
//         console.log("ok")
//       } else {
//         // Handle authentication failure, e.g., show error message
//         console.error("Authentication failed");
//       }
//     } catch (error) {
//       console.error("Error authenticating user:", error);
//     }
//   };

  return (
    <form
    onSubmit={handleOnSubmit}
    >
      <label>
        <p>
          Email Address <sup>*</sup>
        </p>
        <input
          required
          type="text"
          name="email"
          value={email}
          onChange={handleOnChange}
          placeholder="Enter email address"
          
        />
      </label>
      <label className="relative">
        <p>
          Password <sup>*</sup>
        </p>
        <input
          required
          type={showPassword ? "text" : "password"}
          name="password"
          value={password}
          onChange={handleOnChange}
          placeholder="Enter Password"
         
        />
        <span
          onClick={() => setShowPassword((prev) => !prev)}
         
        >
         
        </span>
        <Link to="/forgot-password">
          <p>
            Forgot Password
          </p>
        </Link>
      </label>
      <button
        type="submit"
      >
        Sign In
      </button>
    </form>
  )
}

export default Login