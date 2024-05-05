import { useState} from "react"
import { useDispatch } from "react-redux"
import { useSelector } from 'react-redux';
import { addLeave } from "../services/operations/add";
import './Leave.css';


function Leave() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.profile)
  const [formData, setFormData] = useState({
    name: "",
    sdate: "",
    edate: "",
    ltype: ""

  })


  const { name, sdate, edate, ltype } = formData



  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }))
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()

    const startDate = new Date(sdate).toISOString();
    const endDate = new Date(edate).toISOString();
    dispatch(addLeave(user._id, name, startDate, endDate, ltype,user.category))
    // console.log(formData)
  }

  return (
    <div className="applyleave-container">
      <div className="applyleave-content">
        <h3 className="applyleave-heading">Apply Leave</h3>
        <form onSubmit={handleOnSubmit}>
          <label>
            <p className="applyleave-ph">
              Name<sup>*</sup>
            </p>
            <input
              required
              type="text"
              name="name"
              value={name}
              onChange={handleOnChange}
              placeholder="Enter Name"
              className="applyleaveinput"
            />
          </label>
          <label>
            <p className="applyleave-ph">
              Start Date<sup>*</sup>
            </p>
            <input
              className="applyleaveinput"
              required
              type="date"
              name="sdate"
              value={sdate}
              onChange={handleOnChange}
            />
          </label>
          <label>
            <p className="applyleave-ph">
              End Date<sup>*</sup>
            </p>
            <input
              className="applyleaveinput"
              required
              type="date"
              name="edate"
              value={edate}
              onChange={handleOnChange}
            />
          </label>

          <label>
            <p className="applyleave-ph">
              Leave Type<sup>*</sup>
            </p>

            <select className="applyleaveinput"
              name="ltype" value={ltype} onChange={handleOnChange}>
              <option value="">Leave Type</option>
              <option value="Sick Leave">Sick Leave</option>
              <option value="Annual Leave">Annual Leave</option>
            </select>
          </label>
          <div>
            <button className="applyleave-button" type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Leave;

// function Leave() {
//   const dispatch=useDispatch();
//   const { user } = useSelector((state) => state.profile)
//   const [formData, setFormData] = useState({
//     name:"",
//     sdate: "",
//     edate:"",
//     ltype:""
    
//   })
  
  
//   const {name,sdate,edate,ltype} = formData
  

  
//   const handleOnChange = (e) => {
//     setFormData((prevData) => ({
//       ...prevData,
//       [e.target.name]: e.target.value,
//     }))
//   }
  
//   const handleOnSubmit = (e) => {
//     e.preventDefault()
    
//     const startDate=new Date(sdate).toISOString();
//     const endDate=new Date(edate).toISOString();
//     dispatch(addLeave(user._id,name,startDate,endDate,ltype,user.category))
//     // console.log(formData)
//   }

//   return (
//     <div>
//       <form onSubmit={handleOnSubmit}>
//         <label>
//           <p>
//             Member <sup>*</sup>
//           </p>
//           <input
//             required
//             type="text"
//             name="name"
//             value={name}
//             onChange={handleOnChange}
//             placeholder="Enter Name"
//           />
//         </label>
//         <label>
//           <p>
//             Start Date <sup>*</sup>
//           </p>
//           <input
//             required
//             type="date"
//             name="sdate"
//             value={sdate}
//             onChange={handleOnChange}
//           />
//         </label>
//         <label>
//           <p>
//             End Date <sup>*</sup>
//           </p>
//           <input
//             required
//             type="date"
//             name="edate"
//             value={edate}
//             onChange={handleOnChange}
//           />
//         </label>

//         <label>
//           <p>
//             Leave Type <sup>*</sup>
//           </p>

//           <select name="ltype" value={ltype} onChange={handleOnChange}>
//             <option value="">Leave Type</option>
//             <option value="Sick Leave">Sick Leave</option>
//             <option value="Annual Leave">Annual Leave</option>
//           </select>
//         </label>

//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

// export default Leave;
