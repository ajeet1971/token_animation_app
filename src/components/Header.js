import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap';
const Header = () => {
  return (
    <header>
    <Navbar collapseOnSelect expand="lg" bg="transparent" variant="dark">
    <Container>
      <Navbar.Brand href="/"><img src="/assets/logo.svg" alt="hatom" /></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mx-auto">
          <Nav.Link href="/">Markets</Nav.Link>
          <Nav.Link href="/">Governance</Nav.Link>
          <Nav.Link href="/">Prices</Nav.Link>
          <Nav.Link href="/">Docs</Nav.Link>
          <Nav.Link className="token" href="/">Hatom Token</Nav.Link>
        
        </Nav>
        <Nav>
          <Button className="btn btn-app" >App</Button>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
</header>
  )
}

export default Header