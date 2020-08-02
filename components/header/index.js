// UI elements
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

export default function Header() {
  return (
    <header data-testid="header">
      <Navbar expand="lg" className="my-3">
      <Container>
        <Navbar.Brand>
          <a className="text-body mr-4" href="/">ETH Music Market</a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <a className="text-body mr-3" href="/about">About</a>
            <a className="text-body mr-3" href="/dashboard">Dashboard</a>
          </Nav>
          <Nav>
            <Nav.Link>
              <Button variant="primary" onClick={console.log("Connect to wallet")}>Connect to wallet</Button><br/>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      </Navbar>
    </header>
  )
}