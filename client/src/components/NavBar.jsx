
import {Navbar,Container, Nav, FormControl, Form, Button, NavDropdown } from 'react-bootstrap'
import {Link, NavLink} from 'react-router-dom';
const NavBar = (props) => {
    //add logic -> 

    //placeholderlogic



    return (
        <>

        <Navbar collapseOnSelect expand="md" className="navBar" style={{backgroundColor: "#000000"}} sticky="top" variant="dark">
            <Container>
            <Navbar.Brand as={Link} to="/">CodePad</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto my-2 ">
                    {!props.user && <Nav.Link as={NavLink} onClick={() => props.userHandler()} to="/login">Login</Nav.Link>}
                    {!props.user && <Nav.Link as={NavLink} to="/register">Sign Up</Nav.Link>}
                    {props.user &&  <Nav.Link onClick={() => props.userHandler()} >Log Out</Nav.Link>}
                    {props.user &&    <NavDropdown title="Menu" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Settings</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/editor">Editor</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">GitHub</NavDropdown.Item>
                                </NavDropdown> }
                    
                    </Nav>

                    <Form className="d-flex">
                        <FormControl
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </>
    )
}

export default NavBar
