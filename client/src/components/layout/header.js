
// or less ideally
import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'


export default class header extends Component {
    render() {
        return (
            <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/schools">school</Nav.Link>
      <Nav.Link href="/students">student</Nav.Link>
      <Nav.Link href="/teacher">teacher</Nav.Link>

   
    </Nav>
  
  </Navbar.Collapse>
</Navbar>
        )
    }
}
