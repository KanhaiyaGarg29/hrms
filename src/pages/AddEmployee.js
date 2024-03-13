import { useState ,useEffect} from "react"
import { useDispatch } from "react-redux"

import { useNavigate } from "react-router-dom"
import { getCategory } from "../services/operations/add"
import { addEmployee } from "../services/operations/add"


function AddEmployee() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    name:"",
    email: "",
    password:"",
    address:"",
    role:"",
    // password: "",
  })

//   const [showPassword, setShowPassword] = useState(false)
const [categories, setCategories] = useState([]);

  const { name,email,password,address,role,category} = formData

  useEffect(() => {
    // Fetch categories when component mounts
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
    }))
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()
    // dispatch(login(email, password, navigate))
    dispatch(addEmployee(name,email,password,address,role,category,navigate))
    // console.log(formData)
  }

  return (
    <form
    onSubmit={handleOnSubmit}
    >
        <label>
        <p>
          Name <sup>*</sup>
        </p>
        <input
          required
          type="text"
          name="name"
          value={name}
          onChange={handleOnChange}
          placeholder="Enter Name"
          
        />
      </label>
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
      <label>
        <p>
          Password <sup>*</sup>
        </p>
        <input
          required
          type="password"
          name="password"
          value={password}
          onChange={handleOnChange}
          placeholder="Enter password"
          
        />
      </label>
      <label>
        <p>
          Address <sup>*</sup>
        </p>
        <input
          required
          type="text"
          name="address"
          value={address}
          onChange={handleOnChange}
          placeholder="Enter Address"
          
        />
      </label>

      <label>
        <p>Category *</p>
        <select name="category" value={category} onChange={handleOnChange}>
          <option value="">Select Category</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.categoryName}
            </option>
          ))}
        </select>
      </label>


      <label>
        <p>
          Role <sup>*</sup>
        </p>
        
        <select name="role" value={role} onChange={handleOnChange}
        >
           <option value="">Select Role</option> {/* Add this option */}
           <option value="Admin">Admin</option>
           <option value="Employee">Employee</option>
</select>
      </label>
      
      <button
        type="submit"
      >
        Add
      </button>
    </form>
  )
}

export default AddEmployee