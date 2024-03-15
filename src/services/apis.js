const BASE_URL = "http://localhost:4000"

// AUTH ENDPOINTS
export const endpoints = {
  
    LOGIN_API: BASE_URL + "/login",
    ADD_API:BASE_URL + "/create",
    ADD_CATEGORY_API:BASE_URL+"/addCategory",
    GET_CATEGORY:BASE_URL+"/getCategory",
    GET_EMPLOYEES:BASE_URL+"/getAll",
    GET_ADMIN:BASE_URL+"/getAdmin",
    ADD_LEAVE:BASE_URL+"/addLeave",
    GET_LEAVE:BASE_URL+"/getLeaves",
    UPDATE_LEAVE_STATUS:BASE_URL+"/updateLeave"
  }