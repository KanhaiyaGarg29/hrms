import { apiConnector } from "../apiConnector"
import { endpoints } from "../apis"
import { toast } from "react-hot-toast"
import { setToken } from "../../slices/authSlice"
import { setUser } from "../../slices/profileSlice"


const {
    LOGIN_API,
  } = endpoints

export function login(email, password, navigate) {
    return async (dispatch) => {
      
      try {

        const response = await apiConnector("POST", LOGIN_API, {
          email,
          password,
        })
  
        console.log("LOGIN API RESPONSE............", response)
  
        if (!response.data.success) {
          throw new Error(response.data.message)
        }
        console.log(response.data);
        toast.success("Login Successful")
        dispatch(setToken(response.data.token))
        dispatch(setUser({ ...response.data.user}))
        
      localStorage.setItem("token", JSON.stringify(response.data.token))
      localStorage.setItem("user", JSON.stringify(response.data.user))
        if(response.data.user.role==="Admin"){
          navigate(`/dashboard/Ahome`)
        }
        else{
          navigate(`/dashboard/Ehome`)
        }
       
      } catch (error) {
        console.log("LOGIN API ERROR............", error)
        toast.error("Login Failed")
      }
     
    }
  }