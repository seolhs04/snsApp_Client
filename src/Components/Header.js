// eslint-disable-next-line

import React from 'react';
import '../App.css';
import { Nav, Navbar, Container } from 'react-bootstrap';

function Header(){
    return(
      <Navbar bg="light" variant="light">
        <Container>
        <Navbar.Brand href="/">SNS App</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#features">내정보</Nav.Link>
          <Nav.Link href="#pricing">로그인</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
    )
}

export default Header;