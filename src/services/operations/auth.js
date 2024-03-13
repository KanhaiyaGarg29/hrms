import { apiConnector } from "../apiConnector"
import { endpoints } from "../apis"
import { toast } from "react-hot-toast"


const {
    LOGIN_API,
  } = endpoints

export function login(email, password, navigate) {
    return async () => {
      
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
        navigate(`/dashboard/${response.data.user._id}`)
      } catch (error) {
        console.log("LOGIN API ERROR............", error)
        toast.error("Login Failed")
      }
     
    }
  }