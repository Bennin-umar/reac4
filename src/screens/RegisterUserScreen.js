import React, { useState, useContext } from "react";
import { Form, Col, Button } from "react-bootstrap";
import { UsersContext } from "../contexts/UsersContext";

function RegisterUserScreen() {
  const { registerUser } = useContext(UsersContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handlesubmit(e) {
    e.prevenDefault();
    registerUser()
  }

  return (
    <div>
      <Col xs={12} sm={6} lg={6}>
        <Form> onClick={handlesubmit}
          <Form.Group>
            <Form.Label>name</Form.Label>
            <Form.Control
            value={name}
              placeholder="enter name"
              onChange={(text) => setName(text.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>email</Form.Label>
            <Form.Control
            value={email}
              placeholder="enter email"
              onChange={(text) => setEmail(text.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>password</Form.Label>
            <Form.Control
            value={password}
              placeholder="enter password"
              onChange={(text) => setPassword(text.target.value)}
            />
          </Form.Group>
          <Button className="btn btn-success" type="submit">
            SIGN UP
          </Button>
        </Form>
      </Col>
    </div>
  );
}

export default RegisterUserScreen;
