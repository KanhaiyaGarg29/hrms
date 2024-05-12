import { useState,useEffect} from "react"
import { useDispatch } from "react-redux"
import { useSelector } from 'react-redux';
import { addTask } from "../services/operations/add";
import { getCategory } from "../services/operations/add"
import "./AddTask.css"

function AddTask(){

    const dispatch=useDispatch();
//   const { user } = useSelector((state) => state.profile)
  const [formData, setFormData] = useState({
    task:"",
    dline:"",category:""
    
  })
  const [categories, setCategories] = useState([]);
    const {task,dline,category} = formData

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
        
        const deadline=new Date(dline).toISOString();
        // const endDate=new Date(edate).toISOString();
        dispatch(addTask(task,deadline,category));
        // console.log(formData)
      }

    return(
       <div className="addtask-container">
        <form onSubmit={handleOnSubmit} id="add-form">
        <label>
          <p className='addingp'>
            Task <sup>*</sup>
          </p>
          <textarea
          required
          name="task"
          value={task}
          onChange={handleOnChange}
          placeholder="Enter Task"/>
        </label>
        <br/>
        <label>
          <p className='addingp'>
            DeadLine  <sup>*</sup>
          </p>
          <input
            required
            type="date"
            name="dline"
            value={dline}
            onChange={handleOnChange}
          />
        </label>
        <label>
        <p className='addingp'>Category *</p>
        <select name="category" value={category} onChange={handleOnChange}>
          <option value="">Select Category</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.categoryName}
            </option>
          ))}
        </select>
      </label>
        <button type="submit">Submit</button>
        </form>
       </div>
    )
}

export default AddTask;