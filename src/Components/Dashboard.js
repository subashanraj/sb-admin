import React from 'react'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/esm/Button'
import { useNavigate } from 'react-router-dom'
import AddIcon from '@mui/icons-material/Add'

function Dashboard(props) {

    let navigate=useNavigate();

    let handleDelete=(i)=>{
            let studentdetails=[...props.data.studentdetails]
            studentdetails.splice(i,1)
props.data.setStudentdetails(studentdetails)
        } 
         return <>
   

   <div className="col-xl-8 col-md-6 mb-4">
        <div className="card border-left-warning shadow h-100 py-2">
          <div className="card-body">
            <div className="row no-gutters align-items-center">
              <div className="col mr-2">
<div className="col-xl-3 col-md-6 mb-4">

    <Button className='primary' onClick={()=>navigate(`/create-student`)}><AddIcon/>Create Student</Button>
</div>

<Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>email</th>
          <th>phone</th>
          <th>batch</th>
        </tr>
      </thead>
      <tbody>
        {
            props.data.studentdetails.map((e,i)=>{
                return <tr key ={i}>
                <td>{i+1}</td>
                <td>{e.name}</td>
                <td>{e.email}</td>
                <td>{e.mobile}</td>
                <td>{e.batch}</td>
                <td>
                    <Button variant="primary" onClick={()=>navigate(`/edit-student/${i}`)}>Edit</Button>
                    &nbsp;&nbsp;
                    <Button variant="danger" onClick={()=>handleDelete(i)}>Delete</Button>
                </td>
                </tr>
            })
        }
        
        
      </tbody>
    </Table>
 
</div>
</div>
</div>
</div>
</div>

  </>
}

export default Dashboard