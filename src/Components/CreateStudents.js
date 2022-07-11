import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

function CreateStudents(props) {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [mobile, setMobile] = useState("");
  let [batch, setBatch] = useState("");

  let navigate = useNavigate();

  let handleSubmit = () => {
    let data = {
      name,
      email,
      mobile,
      batch,
    };
    let studentdetails = [...props.data.studentdetails];
    studentdetails.push(data);
    props.data.setStudentdetails(studentdetails);
    navigate("/dashboard");
  };
  return (
    <>
      <div className="col-xl-4 col-md-6 mb-4">
        <div className="card border-left-warning shadow h-100 py-2">
          <div className="card-body">
            <div className="row no-gutters align-items-center">
              <div className="col mr-2">
                <h1>Enter Student Details</h1>
                <Form>
                  <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Name "
                      onChange={(e) => setName(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Mobile</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Mobile"
                      onChange={(e) => setMobile(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Batch</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Batch"
                      onChange={(e) => setBatch(e.target.value)}
                    />
                  </Form.Group>
                  <div className="row align-items-center">
                    <Button variant="primary" onClick={() => handleSubmit()}>
                      Submit
                    </Button>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateStudents;
