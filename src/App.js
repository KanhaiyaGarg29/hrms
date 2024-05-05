
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login/Login";
import AddEmployee from './components/Employee/Add Employee/AddEmployee';
import AddCategory from './components/AddCategory';
import EmployeeList from './components/Employee/Lists/EmployeeList';
import AdminList from './components/Employee/Lists/AdminList';
import Dashboard from './pages/DashBoard/Dashboard';
import Leave from './components/Leave';
import ViewLeave from './components/ViewLeave';
import ViewStatus from './components/ViewStatus';
import DashboardHome from './components/DashboardHome';
import EDashBoard from './components/EDashBoard';
import AddTask from './components/AddTask';
import ViewTask from './components/ViewTask';
import ETaskList from './components/ETaskList';
import ContactForm from './pages/Contact/ContactUs';

function App() {
  

  return (
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/login" element={<Login/>}/>
    <Route path="/contact" element={<ContactForm/>}/>
   
    <Route element={<Dashboard/>}>
     <Route path="/dashboard/Ahome" element={<DashboardHome></DashboardHome>}></Route>
     <Route path="/dashboard/Ehome" element={<EDashBoard></EDashBoard>}></Route>
    <Route path='dashboard/askLeave' element={<Leave/>} />
    <Route path="dashboard/create" element={<AddEmployee/>}/>
    <Route path="dashboard/category" element={<AddCategory/>}/>
    <Route path="dashboard/viewEmployee" element={<EmployeeList/>}/>
    <Route path="dashboard/viewAdmin" element={<AdminList/>}/>
    <Route path="dashboard/viewLeaves" element={<ViewLeave/>}/>
    <Route path="dashboard/viewStatus" element={<ViewStatus/>}/>
    <Route path="dashboard/Task" element={<AddTask/>}></Route>
    <Route path="dashboard/viewTask" element={<ViewTask/>}></Route>
    <Route path="dashboard/Etask" element={<ETaskList/>}></Route>
    </Route>

    </Routes>
  );
}

export default App;
