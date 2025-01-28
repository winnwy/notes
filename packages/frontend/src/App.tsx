import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./App.css";
import Routes from "./Routes.tsx"
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";

function App() {
  return (
    
    <div className="App container py-3">
      <Navbar collapseOnSelect bg="light" expand="md" className="mb-3 px-3">
        {/* <LinkContainer to="/">
          <Navbar.Brand className="fw-bold text-muted">Scratch</Navbar.Brand>
        </LinkContainer> */}
        <Navbar.Brand as={Link} to="/"className="fw-bold text-muted" >Scratch</Navbar.Brand>
        <Navbar.Toggle/>
        <Navbar.Collapse className="justify-content-end">
          <Nav activeKey={window.location.pathname}>
            {/* Avoid navigation during redirecting */}
              <Nav.Link as={Link} to="/signup">Signup</Nav.Link>
              <Nav.Link as={Link} to="/login">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse> 
      </Navbar>
      <Routes/>
    </div>
  )
}

export default App;