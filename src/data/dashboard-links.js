
export const sidebarLinks = [
  {
    id: 1,
    name: "Employee",
    subLinks: [
      {
        id: 1.1,
          name: "Add Employee",
          path: "dashboard/create",
          role:"Admin"
      },
      {
        id: 1.2,
        name: "Employee List",
        path: "dashboard/viewEmployee",
        role: "Admin"
      },
      {
        id: 1.3,
        name: "Admin List",
        path: "dashboard/viewAdmin",
        role: "Admin"
      },
      {
        id:1.4,
        name: "Add Category",
        path: "dashboard/category",
        role:"Admin"
      }
    ],
    role:"Admin"
  },
  // {
  //   id: 2,
  //   name: "Add Category",
  //   path: "dashboard/category",
  //   role:"Admin"
  // },
  {
    id: 3,
    name: "Leave",
    subLinks: [
      {
        id: 3.1,
          name: "Leave",
          path: "dashboard/askLeave",
          role:"Employee"
      },
      {
        id: 3.2,
        name: "View Leave Status",
        path: "dashboard/viewStatus",
        role: "Employee"
      },
    ],
    role:"Employee"
  },
  {
    id:4,
    name:"View Leave Request",
    path:"dashboard/viewLeaves",
    role:"Admin"
  },
  {
    id:5,
    name:"Home",
    path:"dashboard/Ahome",
    role:"Admin"
  },
  {
    id:6,
    name:"Home",
    path:"dashboard/Ehome",
    role:"Employee"
  },
  {
    id: 7,
    name: "Tasks",
    subLinks: [
      {
        id: 7.1,
        name:"Add Task",
        path:"dashboard/Task",
        role:"Admin"
      },
      {
        id: 7.2,
        name:"View Task",
        path:"dashboard/viewTask",
        role:"Admin"
      },
    ],
    role:"Admin"
  },
  {
    id:8,
    name:"Task for the day",
    path:"dashboard/Etask",
    role:"Employee"
  }
];
