
import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import AddEmployee from './pages/AddEmployee';
import AddCategory from './pages/AddCategory';
import EmployeeList from './pages/EmployeeList';
import AdminList from './pages/AdminList';
import Dashboard from './pages/Dashboard';



function App() {
  

  return (
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/login" element={<Login/>}/>
    <Route path="/create" element={<AddEmployee/>}/>
    <Route path="/category" element={<AddCategory/>}/>
    <Route path="/viewEmployee" element={<EmployeeList/>}/>
    <Route path="/viewAdmin" element={<AdminList/>}/>
    <Route path='/dashboard/:id' element={<Dashboard/>} />
    </Routes>
  );
}

export default App;
