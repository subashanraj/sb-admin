import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

function Createuser(props) {
  let [name, setName] = useState("");
  let [monthly, setMonthly] = useState("");
  let [annual, setAnnual] = useState("");
  let [task, setTask] = useState("");
  let [pending, setPending] = useState("");

  let navigate = useNavigate();

  let handleSubmit = () => {
    let data = {
      name,
      monthly,
      annual,
      task,
      pending
    };

    let user= [...props.data.user];
    user.push(data);
    props.data.setUser(user);
    navigate("/user-dashboard");
  };
  return (
    <>
      <div className="col-xl-4 col-md-6 mb-4">
        <div className="card border-left-warning shadow h-100 py-2">
          <div className="card-body">
            <div className="row no-gutters align-items-center">
              <div className="col mr-2">
                <h1>Enter User Details</h1>
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
                    <Form.Label>Monthly Income</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Monthly Income"
                      onChange={(e) => setMonthly(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Annual Income</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Annual Income"
                      onChange={(e) => setAnnual(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Task</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Tasks"
                      onChange={(e) => setTask(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Pending Tasks</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Pending Tasks"
                      onChange={(e) => setPending(e.target.value)}
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

export default Createuser;
