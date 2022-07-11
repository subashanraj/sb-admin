import "./App.css";
import { useState } from "react";
import Sidebar from "./Components/Sidebar";
import Dashboard from "./Components/Dashboard";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import CreateStudents from "./Components/CreateStudents";
import EditStudents from "./Components/EditStudents";
import Userdashboard from "./Components/Userdashboard";
import Edituser from "./Components/Edituser"
import Footer from "./Components/Footer";
import Createuser from "./Components/Createuser";

function App() {
  let [user,setUser] = useState([
    { 
      name:"Subash",
      monthly: "Rs.40,000",
        annual: "Rs.4,80,000",
        task: 80,
        pending: 9,
      },
      { 
        name:"Raj",
        monthly: "Rs.45,000",
          annual: "Rs.5,00,000",
          task: 50,
          pending: 26,
       },
      { 
          name:"Ram",
          monthly: "Rs.30,000",
            annual: "Rs.3,60,000",
            task: 70,
            pending: 1,
       },
          { 
            name:"Vinoth",
            monthly: "Rs.50,000",
              annual: "Rs.6,00,000",
              task: 50,
              pending: 9,
            },
  ])
  

  let [studentdetails,setStudentdetails]=useState([
    {
      name:"Raj",
      email:"raj@gmail.com",
      mobile:"123423486",
      age:"25",
      batch:"B36WDT"
    },
    {
      name:"subash",
      email:"subash@gmail.com",
      mobile:"13423566",
      age:"21",
      batch:"B36WDT"
    },
    {
      name:"kumar",
      email:"kumar@gmail.com",
      mobile:"123463435",
      age:"23",
      batch:"B36WDT"
    }
  ])


  return (
    <>
      <div className="main-wrapper">
       
        <BrowserRouter>
        <Sidebar />
        <Routes>
        
         <Route path='dashboard' element={ <Dashboard data={{user,studentdetails,setStudentdetails}} />}/>
         <Route path='create-student' element={ <CreateStudents data={{studentdetails,setStudentdetails}} />}/>
         <Route path='edit-student/:id' element={ <EditStudents data={{studentdetails,setStudentdetails}}/>}/>
         <Route path='*' element={<Dashboard data={{user,studentdetails,setStudentdetails}}/>}/>
         <Route path='user-dashboard' element={ <Userdashboard data={{user,setUser}} />}/>
         <Route path='edit-user/:id' element={ <Edituser data={{user,setUser}}/>}/>
         <Route path='create-user'element={ <Createuser data={{user,setUser}}/>}/>

        </Routes>
        
        </BrowserRouter>
        
      </div>
      <Footer/>
    </>
  );
}

export default App;
