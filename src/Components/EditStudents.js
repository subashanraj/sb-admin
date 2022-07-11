import React,{useState} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useParams, useNavigate } from 'react-router-dom'

function EditStudents(props) {
  let params=useParams();

  let [name,setName]=useState(props.data.studentdetails[params.id].name)
  let [email,setEmail]=useState(props.data.studentdetails[params.id].email)
  let [mobile,setMobile]=useState(props.data.studentdetails[params.id].mobile)
  let [batch,setBatch]=useState(props.data.studentdetails[params.id].batch)

  let navigate=useNavigate()

  let handleSubmit=()=>{
    let data={
      name,
      email,
      mobile,
      batch
    }

    let studentdetails=[...props.data.studentdetails]
    studentdetails.splice(params.id,1,data)
    props.data.setStudentdetails(studentdetails)
    
    navigate('/dashboard')
      }

  return <>
  <div className="col-xl-4 col-md-6 mb-4">
        <div className="card border-left-warning shadow h-100 py-2">
          <div className="card-body">
            <div className="row no-gutters align-items-center">
              <div className="col mr-2">
                <h1>Edit Student Details</h1>
   <Form>
  <Form.Group className="mb-3">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text"  value={name} placeholder="Enter Name " onChange={(e)=>setName(e.target.value)}/>
  </Form.Group>
 
  <Form.Group className="mb-3">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="text" value={email} placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)} />
  </Form.Group>
  <Form.Group className="mb-3">
    <Form.Label>Mobile</Form.Label>
    <Form.Control type="text" value={mobile} placeholder="Enter Mobile" onChange={(e)=>setMobile(e.target.value)} />
  </Form.Group>
  <Form.Group className="mb-3">
    <Form.Label>Batch</Form.Label>
    <Form.Control type="text" value={batch} placeholder="Enter Batch" onChange={(e)=>setBatch(e.target.value)}/>
  </Form.Group>
  <div className="row align-items-center">
  <Button  variant="primary" onClick={()=>handleSubmit()} >
    Submit
  </Button>
  </div>
</Form>
</div>
</div>
</div></div>
</div>
  </>
  
}

export default EditStudents