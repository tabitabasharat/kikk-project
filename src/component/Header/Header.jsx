import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../../assets/SVG.png";
import { Button, Image } from "react-bootstrap";
import "./Header.css";

function Header() {
  return (
    <div className="nav-cont">
      <div className="d-flex justify-content-between nav-cont-top  color-issue">
        <div>
          <p>
            Strong → 26th-29th October 2023
            <span className="text-secondary">/Numar, wallonia, belgium</span>
          </p>
        </div>
        <div className="d-flex nav-title justify-content-around">
          <Nav.Link href="#About" className="nav-spacing-top ">
            About
          </Nav.Link>
          <Nav.Link href="#Sponsors" className="nav-spacing-top">
            Sponsors
          </Nav.Link>
          <Nav.Link href="#Volunteer" className="nav-spacing-top">
            Volunteer
          </Nav.Link>
          <NavDropdown
            title="English"
            id="collapsible-nav-English"
            className="nav-title-top"
          >
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </div>
      </div>
      <hr />
      <Navbar collapseOnSelect expand="lg" className="">
        <Container className="mx-0 px-0 d-flex mw-100 justify-content-between">
          <Navbar.Brand href="#home">
            <Image src={logo} className="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown
                title={
                  <span className="nav-title nav-dropdown-box" >
                    <span className="titlePartOne">kikk for</span>{" "}
                    <span className="titlePartTwo text-warning">Pro</span>
                  </span>
                }
                id="collapsible-nav-dropdown"
                className="nav-dropdown-box"
              >
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title={
                    <span className="nav-title" >
                      <span className="titlePartOne">kikk for</span>{" "}
                      <span className="titlePartTwo text-warning">All</span>
                    </span>
                  }
                id="collapsible-nav-Kikk-for-All"
              >
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title="practical"
                id="collapsible-nav-practical"
                className="nav-dropdown-box nav-title"
              >
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#Map" className="nav-title color-issue me-5">
                Map
              </Nav.Link>
            </Nav>
            <Nav className="buttons">
              <Button className="rounded-pill nav-view-buttn">
                View Program
              </Button>
              <Button className="rounded-pill navbuttn bg-warning border-warning">Get Tickets</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
