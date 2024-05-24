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
    UPDATE_LEAVE_STATUS:BASE_URL+"/updateLeave",
    GET_PARTICULAR_LEAVE:BASE_URL+"/viewLeave",
    GET_LEAVE_TYPE:BASE_URL+"/getLeaveType",
    ADD_TASK:BASE_URL+"/addTask",
    GET_TASK:BASE_URL+"/viewTask",
    GET_PARTICULAR_TASK:BASE_URL+"/etask",
    UPDATE_TASK_STATUS:BASE_URL+"/updateTaskStatus",
    GET_USER_BY_CATEGORY:BASE_URL+"/getUsersByCategory"
  }