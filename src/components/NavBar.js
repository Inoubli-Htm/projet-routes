import React, { useState } from 'react'
import { Button, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap'
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

function NavBar({getText, getRate }) {
  const[title, setTitle]=useState("")
  const ratingChanged = (newRating) => {
    getRate(newRating);
  };
  return (
    <Navbar bg="light" variant="light">
    <Container>
    <Navbar.Brand href="#home">Inoubli Movies</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link as={Link} to='/'>Home</Nav.Link>
      <Nav.Link as={Link} to='/FilmsListes'>Movies Listes</Nav.Link>
     
    </Nav>
    <ReactStars
    count={5}
    onChange={ratingChanged}
    size={24}
    activeColor="#ffd700"
  />
    <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          onChange={(e)=>setTitle(e.target.value)}
          
        />
        <Button variant="primary" onClick={()=>getText(title)}>Search</Button>
      </Form>
    </Container>
  </Navbar>
  )
}

export default NavBar