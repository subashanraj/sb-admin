import "./App.css";
import { useState } from "react";
import Sidebar from "./Components/Sidebar";
import Dashboard from "./Components/Dashboard";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import CreateStudents from "./Components/CreateStudents";
import EditStudents from "./Components/EditStudents";

function App() {
  let data = {
    monthly: "Rs.40,000",
    annual: "Rs.4,80,000",
    task: 80,
    pending: 9,
  }

  let [studentdetails,setStudentdetails]=useState([
    {
      name:"Raj",
      email:"raj@gmail.com",
      mobile:"123423486",
      batch:"B36WDT"
    },
    {
      name:"subash",
      email:"subash@gmail.com",
      mobile:"13423566",
      batch:"B36WDT"
    },
    {
      name:"kumar",
      email:"kumar@gmail.com",
      mobile:"123463435",
      batch:"B36WDT"
    }
  ])


  return (
    <>
      <div className="main-wrapper">
       
        <BrowserRouter>
        <Sidebar />
        <Routes>
        
         <Route path='dashboard' element={ <Dashboard data={{data,studentdetails,setStudentdetails}} />}/>
         <Route path='create-student' element={ <CreateStudents />}/>
         <Route path='edit-student' element={ <EditStudents />}/>
         <Route path='*' element={<Dashboard data={{data,studentdetails,setStudentdetails}}/>}/>
        </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
