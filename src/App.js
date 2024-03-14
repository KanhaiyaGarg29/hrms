
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


function App() {
  

  return (
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/login" element={<Login/>}/>
   
    <Route path='/dashboard/:id' element={<Dashboard/>}>

    <Route path='dashboard/askLeave' element={<Leave/>} />
    <Route path="dashboard/create" element={<AddEmployee/>}/>
    <Route path="dashboard/category" element={<AddCategory/>}/>
    <Route path="dashboard/viewEmployee" element={<EmployeeList/>}/>
    <Route path="dashboard/viewAdmin" element={<AdminList/>}/>
    </Route>

    </Routes>
  );
}

export default App;
