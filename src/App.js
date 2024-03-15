
import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import AddEmployee from './components/AddEmployee';
import AddCategory from './components/AddCategory';
import EmployeeList from './components/EmployeeList';
import AdminList from './components/AdminList';
import Dashboard from './pages/Dashboard';
import Leave from './components/Leave';
import ViewLeave from './components/ViewLeave';
import ViewStatus from './components/ViewStatus';
import DashboardHome from './components/DashboardHome';
import EDashBoard from './components/EDashBoard';


function App() {
  

  return (
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/login" element={<Login/>}/>
   
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
    </Route>

    </Routes>
  );
}

export default App;
