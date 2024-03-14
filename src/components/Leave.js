import { useState} from "react"
import { useDispatch } from "react-redux"
import { useSelector } from 'react-redux';
import { addLeave } from "../services/operations/add";




function Leave() {
  const dispatch=useDispatch();
  const { user } = useSelector((state) => state.profile)
  const [formData, setFormData] = useState({
    name:"",
    sdate: "",
    edate:"",
    ltype:""
    
  })
  
  
  const {name,sdate,edate,ltype} = formData
  

  
  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }))
  }
  
  const handleOnSubmit = (e) => {
    e.preventDefault()
    
    const startDate=new Date(sdate).toISOString();
    const endDate=new Date(edate).toISOString();
    dispatch(addLeave(user._id,name,startDate,endDate,ltype))
    // console.log(formData)
  }

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <label>
          <p>
            Member <sup>*</sup>
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
            Start Date <sup>*</sup>
          </p>
          <input
            required
            type="date"
            name="sdate"
            value={sdate}
            onChange={handleOnChange}
          />
        </label>
        <label>
          <p>
            End Date <sup>*</sup>
          </p>
          <input
            required
            type="date"
            name="edate"
            value={edate}
            onChange={handleOnChange}
          />
        </label>

        <label>
          <p>
            Leave Type <sup>*</sup>
          </p>

          <select name="ltype" value={ltype} onChange={handleOnChange}>
            <option value="">Leave Type</option>
            <option value="Sick Leave">Sick Leave</option>
            <option value="Casual Leave">Casual Leave</option>
          </select>
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Leave;
