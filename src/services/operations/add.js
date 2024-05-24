import { apiConnector } from "../apiConnector";
import { endpoints } from "../apis";
import { toast } from "react-hot-toast";

const { ADD_API, ADD_CATEGORY_API, GET_CATEGORY, GET_EMPLOYEES,GET_ADMIN ,ADD_LEAVE,GET_LEAVE,UPDATE_LEAVE_STATUS,GET_PARTICULAR_LEAVE,ADD_TASK,GET_TASK,GET_PARTICULAR_TASK,UPDATE_TASK_STATUS,GET_LEAVE_TYPE,GET_USER_BY_CATEGORY} = endpoints;

export function addEmployee(
  name,
  email,
  password,
  address,
  role,
  category,
  navigate
) {
  return async () => {
    try {
      const response = await apiConnector("POST", ADD_API, {
        name,
        email,
        password,
        address,
        role,
        category,
      });

      console.log(response);

      if (!response.data.success) {
        throw new Error(response.data.message);
      }
      toast.success("Added Successful");
      navigate("/dashboard/Ahome");
    } catch (error) {
      console.log(error);
      toast.error("Not Added Succesfully");
    }
  };
}

export function addCategory(categoryName, categoryDescription, navigate) {
  return async () => {
    try {
      const response = await apiConnector("POST", ADD_CATEGORY_API, {
        categoryName,
        categoryDescription,
      });

      console.log(response);

      if (!response.data.success) {
        throw new Error(response.data.message);
      }
      toast.success(" Category Added Successful");
      navigate("/dashboard/Ahome");
    } catch (error) {
      console.log(error);
      toast.error(" Category Not Added Succesfully");
    }
  };
}

export async function getCategory() {
  try {
    const response = await apiConnector("GET", GET_CATEGORY);
    if (!response.data.success) {
      throw new Error(response.data.message);
    }
   
    return response.data.data;
  } catch (error) {
    console.error(error);
    toast.error("Category Not Fetched Successfully");
    throw error;
  }
}

export async function getEmployees() {
  try {
    const response = await apiConnector("GET", GET_EMPLOYEES);
    if (!response.data.success) {
      throw new Error(response.data.message);
    }
    console.log(response);
    return response.data.data;
  } catch (error) {
    console.error(error);
    toast.error("Employees Not Fetched Successfully");
    throw error;
  }
}

export async function getAdmin() {
  try {
    const response = await apiConnector("GET", GET_ADMIN);
    if (!response.data.success) {
      throw new Error(response.data.message);
    }
    console.log(response);
    return response.data.data;
  } catch (error) {
    console.error(error);
    toast.error("Employees Not Fetched Successfully");
    throw error;
  }
}

export function addLeave(
  user,
  name,
  startDate,
  endDate,
  leaveType,
  category
) {
  return async () => {
    try {
      const response = await apiConnector("POST", ADD_LEAVE, {
        user,
        name,
        startDate,
        endDate,
        leaveType,
        category
      });

      console.log(response);

      if (!response.data.success) {
        throw new Error(response.data.message);
      }
      toast.success("Leave Submitted Successful");
     
    } catch (error) {
      console.log(error);
      toast.error("Leave not submitted Succesfully");
    }
  };
}

export function addTask(
  task,deadline,category
  
) {
  return async () => {
    try {
      // console.log(task,deadline,category);
      const response = await apiConnector("POST", ADD_TASK, {
        task,deadline,category
      });

      console.log(response);

      if (!response.data.success) {
        throw new Error(response.data.message);
      }
      toast.success("Task Assigned Successful");
     
    } catch (error) {
      console.log(error);
      toast.error("Task is not assigned Succesfully");
    }
  };
}

export async function getLeaves() {
  try {
    const response = await apiConnector("GET", GET_LEAVE);
    if (!response.data.success) {
      throw new Error(response.data.message);
    }
    console.log(response);
    return response.data.data;
  } catch (error) {
    console.error(error);
    toast.error("Leaves not Fetched Successfully");
    throw error;
  }
}

export async function getTask() {
  try {
    const response = await apiConnector("GET", GET_TASK);
    if (!response.data.success) {
      throw new Error(response.data.message);
    }
    console.log(response);
    return response.data.data;
  } catch (error) {
    console.error(error);
    toast.error("Tasks not Fetched Successfully");
    throw error;
  }
}


export async function getParticularLeave(userId) {
  try {
    const response = await apiConnector("GET",   `${GET_PARTICULAR_LEAVE}/${userId}`);
    if (!response.data.success) {
      throw new Error(response.data.message);
    }
    console.log(response);
    return response.data.data;
  } catch (error) {
    console.error(error);
    toast.error("Leaves not Fetched Successfully");
    throw error;
  }
}

// export async function getLeaveType(){
//   try{
//     const response = await apiConnector("GET", GET_LEAVE_TYPE);
//     if (!response.data.success) {
//       throw new Error(response.data.message);
//     }
//     console.log(response);
//     return response.data.data;
//   } catch (error) {
//     console.error(error);
//     toast.error("Leaves Fetched Successfully");
//     throw error;
//   }
// }

export async function getParticulartasks(userCategory) {
  try {
    const response = await apiConnector("GET",   `${GET_PARTICULAR_TASK}/${userCategory}`);
    if (!response.data.success) {
      throw new Error(response.data.message);
    }
   
    return response.data.data;
  } catch (error) {
    console.error(error);
    toast.error("Tasks not Fetched Successfully");
    throw error;
  }
}

export function updateLeaveStatus(
  leaveId,
  leaveStatus
) {
  return async () => {
    try {
      const response = await apiConnector("PUT", UPDATE_LEAVE_STATUS, {
        leaveId,
        leaveStatus
      });

    

      if (!response.data.success) {
        throw new Error(response.data.message);
      }
      toast.success(`Leave ${leaveStatus} Successful`);
     
    } catch (error) {
      console.log(error);
      toast.error(`Leave not ${leaveStatus} Succesfully`);
    }
  };
}


export function updateTaskStatus(
  taskId,
  taskStatus
) {
  return async () => {
    try {
      const response = await apiConnector("PUT", UPDATE_TASK_STATUS, {
        taskId,
        taskStatus
      });

    

      if (!response.data.success) {
        throw new Error(response.data.message);
      }
      toast.success(`Task ${taskStatus} Successfully`);
     
    } catch (error) {
      console.log(error);
      toast.error(`Task not ${taskStatus} Succesfully`);
    }
  };
}

export async function getLeaveType(userId) {
  try {
    const response = await apiConnector("GET",   `${GET_LEAVE_TYPE}/${userId}`);
    if (!response.data.success) {
      throw new Error(response.data.message);
    }
    console.log(response);
    return response.data.data;
  } catch (error) {
    console.error(error);
    toast.error("Leaves not Fetched Successfully");
    throw error;
  }
}


export function getuserbycategory(
  category
  
) {
  return async () => {
    try {
      // console.log(task,deadline,category);
      const response = await apiConnector("POST", GET_USER_BY_CATEGORY, {
        category
      });

      

      if (!response.data.success) {
        throw new Error(response.data.message);
      }
      toast.success("User found");
      return response;
     
    } catch (error) {
      console.log(error);
      toast.error("User not found");
    }
  };
}

