import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import FormContainer from "../component/FormContainer";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import Message from "../component/Message";
import Loader from "../component/Loader";
import { login } from "../action/business";

const BusinessLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const businessLogin = useSelector((state) => state.businessLogin);
  const { loading, error, businessInfo } = businessLogin;

  if (businessInfo) {
    return <Redirect to="/business/dashboard" />;
  }

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <Container>
      <Row>
        <Col
          style={{
            height: "90vh",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <FormContainer>
            <h2 className="lead">Welcome back</h2>
            <hr />
            <Form onSubmit={submitHandler}>
              {error && <Message variant="danger">{error}</Message>}
              {loading && <Loader />}
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Remeber my login" />
              </Form.Group>
              <div className="d-grid gap-2">
                <Button
                  variant="primary"
                  type="submit"
                  style={{ backgroundColor: "#10F504", border: "none" }}
                >
                  Submit
                </Button>
                <i>
                  Don't have an account?{" "}
                  <a href="/business/register">Register</a>
                </i>
              </div>
            </Form>
          </FormContainer>
        </Col>

        <Col>
          <div
            style={{
              height: "90vh",
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <h2>Mopaybe Exclusive</h2>
            <p>
              <i>Trading made convenient</i>
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default BusinessLogin;
