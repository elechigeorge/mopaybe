import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav, Container } from "react-bootstrap";

import { logout } from "../action/business";

const Header = () => {
  const dispatch = useDispatch();

  const businessLogin = useSelector((state) => state.businessLogin);
  const { businessInfo } = businessLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <header>
      <Navbar
        style={{ backgroundColor: "#10F504" }}
        variant="dark"
        expand="lg"
        collapseOnSelect
      >
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>MOPAYBE</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="mr-auto">
              {businessInfo ? (
                <>
                  <Nav.Link onClick={logoutHandler}> Logout</Nav.Link>
                </>
              ) : (
                <>
                  <LinkContainer to="/business/login">
                    <Nav.Link>
                      <i className="fas fa-user"></i> Sign In
                    </Nav.Link>
                  </LinkContainer>

                  <LinkContainer to="/about">
                    <Nav.Link>
                      <i className="fas fa-user"></i> About
                    </Nav.Link>
                  </LinkContainer>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
