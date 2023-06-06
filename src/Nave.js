import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet } from "react-router-dom";
function Nave() {
    return (
        <>

        <Navbar bg="primary" variant="dark">
          <Container>
            <Navbar.Brand href="/">Welcome</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/add">Add Data</Nav.Link>
              <Nav.Link href="/download">Download Data</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        
        <Outlet />
      </>
    );

    }
    
export default Nave;