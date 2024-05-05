// // import { useState ,useEffect} from "react"
// // import { useDispatch } from "react-redux"

// // import { useNavigate } from "react-router-dom"
// // import { getCategory } from "../services/operations/add"
// // import { addEmployee } from "../services/operations/add"


// // function AddEmployee() {
// //   const navigate = useNavigate()
// //   const dispatch = useDispatch()
// //   const [formData, setFormData] = useState({
// //     name:"",
// //     email: "",
// //     password:"",
// //     address:"",
// //     role:"",
// //     // category:""
// //     // password: "",
// //   })

// // //   const [showPassword, setShowPassword] = useState(false)
// // const [categories, setCategories] = useState([]);

// //   const { name,email,password,address,role,category} = formData

// //   useEffect(() => {
// //     // Fetch categories when component mounts
// //     const fetchCategoriesData = async () => {
// //       const fetchedCategories = await getCategory();
// //       setCategories(fetchedCategories);
// //     };
// //     fetchCategoriesData();
// //   }, []); 

// //   const handleOnChange = (e) => {
// //     setFormData((prevData) => ({
// //       ...prevData,
// //       [e.target.name]: e.target.value,
// //     }))
// //   }

// //   const handleOnSubmit = (e) => {
// //     e.preventDefault()
// //     // dispatch(login(email, password, navigate))
// //     dispatch(addEmployee(name,email,password,address,role,category,navigate))
// //     // console.log(formData)
// //   }

// //   return (
// //     <form
// //     onSubmit={handleOnSubmit}
// //     >
// //         <label>
// //         <p>
// //           Name <sup>*</sup>
// //         </p>
// //         <input
// //           required
// //           type="text"
// //           name="name"
// //           value={name}
// //           onChange={handleOnChange}
// //           placeholder="Enter Name"
          
// //         />
// //       </label>
// //       <label>
// //         <p>
// //           Email Address <sup>*</sup>
// //         </p>
// //         <input
// //           required
// //           type="text"
// //           name="email"
// //           value={email}
// //           onChange={handleOnChange}
// //           placeholder="Enter email address"
          
// //         />
// //       </label>
// //       <label>
// //         <p>
// //           Password <sup>*</sup>
// //         </p>
// //         <input
// //           required
// //           type="password"
// //           name="password"
// //           value={password}
// //           onChange={handleOnChange}
// //           placeholder="Enter password"
          
// //         />
// //       </label>
// //       <label>
// //         <p>
// //           Address <sup>*</sup>
// //         </p>
// //         <input
// //           required
// //           type="text"
// //           name="address"
// //           value={address}
// //           onChange={handleOnChange}
// //           placeholder="Enter Address"
          
// //         />
// //       </label>

// //       <label>
// //         <p>Category *</p>
// //         <select name="category" value={category} onChange={handleOnChange}>
// //           <option value="">Select Category</option>
// //           {categories.map((category) => (
// //             <option key={category.id} value={category.id}>
// //               {category.categoryName}
// //             </option>
// //           ))}
// //         </select>
// //       </label>


// //       <label>
// //         <p>
// //           Role <sup>*</sup>
// //         </p>
        
// //         <select name="role" value={role} onChange={handleOnChange}
// //         >
// //            <option value="">Select Role</option> {/* Add this option */}
// //            <option value="Admin">Admin</option>
// //            <option value="Employee">Employee</option>
// // </select>
// //       </label>
      
// //       <button
// //         type="submit"
// //       >
// //         Add
// //       </button>
// //     </form>
// //   )
// // }

// // export default AddEmployee



// import React, { useState, useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { getCategory } from "../../../services/operations/add";
// import { addEmployee } from "../../../services/operations/add";
// import "./AddEmployee.css";
// import empimage from "../../../assets/download9.png"

// function AddEmployee() {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     address: "",
//     role: "",
//   });

//   const [categories, setCategories] = useState([]);
//   const { name, email, password, address, role, category } = formData;

//   useEffect(() => {
//     const fetchCategoriesData = async () => {
//       const fetchedCategories = await getCategory();
//       setCategories(fetchedCategories);
//     };
//     fetchCategoriesData();
//   }, []);

//   const handleOnChange = (e) => {
//     setFormData((prevData) => ({
//       ...prevData,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const handleOnSubmit = (e) => {
//     e.preventDefault();
//     dispatch(addEmployee(name, email, password, address, role, category, navigate));
//   };

//   return (
//     <section>
//       <div className="emp-container">

//         <div>
//           <form onSubmit={handleOnSubmit} className="emp-form" >
//             <div>
//               <img src={empimage} alt="Employee" className="emp-image" />
//             </div>
//             <div>
//               <h1 className="emp-heading">Add Employee</h1>
//             </div>
//             <div className="emp-inputGroup">
//               <label className="label">
//                 <input
//                   required
//                   type="text"
//                   name="name"
//                   value={name}
//                   onChange={handleOnChange}
//                   placeholder="Name*"
//                   className="emp-input"
//                 />
//               </label>
//             </div>
//             <div className="emp-inputGroup">
//               <label className="label">
//                 <input
//                   required
//                   type="text"
//                   name="email"
//                   value={email}
//                   onChange={handleOnChange}
//                   placeholder="Email address*"
//                   className="emp-input"
//                 />
//               </label>
//             </div>
//             <div className="emp-inputGroup">
//               <label className="label">
//                 <input
//                   required
//                   type="password"
//                   name="password"
//                   value={password}
//                   onChange={handleOnChange}
//                   placeholder="Password*"
//                   className="emp-input"
//                 />
//               </label>
//             </div>
//             <div className="emp-inputGroup">
//               <label className="label">
//                 <input
//                   required
//                   type="text"
//                   name="address"
//                   value={address}
//                   onChange={handleOnChange}
//                   placeholder="Address*"
//                   className="emp-input"
//                 />
//               </label>
//             </div>
//             <div className="emp-inputGroup">
//               {/* <label className="label"> */}
//               <select name="category" value={category} onChange={handleOnChange} className="emp-select">
//                 <option value="">Select Category*</option>
//                 {categories.map((category) => (
//                   <option key={category.id} value={category.id}>
//                     {category.categoryName}
//                   </option>
//                 ))}
//               </select>
//               {/* </label> */}
//             </div>
//             <div className="emp-inputGroup">
//               {/* <label className="label"> */}
//               <select name="role" value={role} onChange={handleOnChange} className="emp-select">
//                 <option value="">Select Role*</option>
//                 <option value="Admin">Admin</option>
//                 <option value="Employee">Employee</option>
//               </select>
//               {/* </label> */}
//             </div>
//             <button type="submit" className="empbutton">
//               Add
//             </button>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default AddEmployee;

import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCategory } from "../../../services/operations/add";
import { addEmployee } from "../../../services/operations/add"
import "./AddEmployee.css";
// import empimage from "../assets/images/download15.png";


function AddEmployee() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
    role: "",
  });

  const [categories, setCategories] = useState([]);
  const { name, email, password, address, role, category } = formData;

  useEffect(() => {
    const fetchCategoriesData = async () => {
      const fetchedCategories = await getCategory();
      setCategories(fetchedCategories);
    };
    fetchCategoriesData();
  }, []);

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(addEmployee(name, email, password, address, role, category, navigate));
  };

  return (
    <section>
      <div className="emp-container">
      {/* <div>
              <img src={empimage} alt="Employee" className="emp-image" />
            </div> */}
        <div>
        
          <form onSubmit={handleOnSubmit} className="emp-form" >
            
            <div>
              <h1 className="addemp-heading">Add Employee</h1>
            </div>
            <div className="emp-inputGroup">
              <label>
                <input
                  required
                  type="text"
                  name="name"
                  value={name}
                  onChange={handleOnChange}
                  placeholder="Name*"
                  className="emp-input"
                />
              </label>
            </div>
            <div className="emp-inputGroup">
              <label className="label">
                <input
                  required
                  type="text"
                  name="email"
                  value={email}
                  onChange={handleOnChange}
                  placeholder="Email address*"
                  className="emp-input"
                />
              </label>
            </div>
            <div className="emp-inputGroup">
              <label className="label">
                <input
                  required
                  type="password"
                  name="password"
                  value={password}
                  onChange={handleOnChange}
                  placeholder="Password*"
                  className="emp-input"
                />
              </label>
            </div>
            <div className="emp-inputGroup">
              <label className="label">
                <input
                  required
                  type="text"
                  name="address"
                  value={address}
                  onChange={handleOnChange}
                  placeholder="Address*"
                  className="emp-input"
                />
              </label>
            </div>
            <div className="emp-inputGroup">
              {/* <label className="label"> */}
              <select name="category" value={category} onChange={handleOnChange} className="emp-select">
                <option value="">Select Category*</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.categoryName}
                  </option>
                ))}
              </select>
              {/* </label> */}
            </div>
            <div className="emp-inputGroup">
              {/* <label className="label"> */}
              <select name="role" value={role} onChange={handleOnChange} className="emp-select">
                <option value="">Select Role*</option>
                <option value="Admin">Admin</option>
                <option value="Employee">Employee</option>
              </select>
              {/* </label> */}
            </div>
            {/* <div className="emp-inputGroup">
              <label className="label-employee">
                Image: <br></br>
                <input
                  type="file"
                  name="image"
                  accept="image/*"
                  onChange={handleOnChange}
                  className="emp-input"
                />
              </label>
            </div> */}
            <button type="submit" className="empbutton">
              Add
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default AddEmployee;