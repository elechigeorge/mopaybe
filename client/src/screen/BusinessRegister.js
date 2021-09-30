import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import FormContainer from "../component/FormContainer";

function BusinessRegister() {
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
            <h2 className="lead">Register an account</h2>
            <hr />
            <Form>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Fullname</Form.Label>
                <Form.Control
                  type="name"
                  placeholder="Enter your business name"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
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
                  Already have an account? <a href="/business/login">Login</a>
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
}

export default BusinessRegister;
