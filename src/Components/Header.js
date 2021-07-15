/* eslint-disable */

import React from 'react';
import '../App.css';
import { Form, FormControl, Button, Nav, Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom'

function Header(){
    return(
      <Navbar id='navBar' className='border' variant="light">
        <Navbar.Brand id='Logo' as={Link} to='/'>Paprika</Navbar.Brand>
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="검색"
            aria-label="Search"
            id='searchInput'
          />
          <Button variant="outline-success">Search</Button>
        </Form>
        <Nav className="me-auto">
          <Nav.Link href="#features">내정보</Nav.Link>
          <Nav.Link href="#pricing">로그인</Nav.Link>
        </Nav>
      </Navbar>
    )
}

export default Header;