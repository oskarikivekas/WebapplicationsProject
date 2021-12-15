import { useContext } from 'react';
import {Navbar,Container, Nav, FormControl, Form, Button, NavDropdown } from 'react-bootstrap'
import {Link, NavLink} from 'react-router-dom';
import { Context } from '../context/Context';



const NavBar = (props) => {
    const {user, dispatch} = useContext(Context);

    const logoutHandler = () => {
        console.log(user);
        dispatch({type: "LOGOUT"});
    }
    return (
        <>

        <Navbar collapseOnSelect expand="md" className="navBar" style={{backgroundColor: "#000000"}} sticky="top" variant="dark">
            <Container>
            <Navbar.Brand as={Link} to="/" >CodePad</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto my-2 ">
                    {!user && <Nav.Link as={NavLink} to="/login">Login</Nav.Link>}
                    {!user && <Nav.Link as={NavLink} to="/register">Sign Up</Nav.Link>}
                    {user &&  <Nav.Link onClick={logoutHandler} >Log Out</Nav.Link>}
                    {user &&    <NavDropdown title="Menu" id="collasible-nav-dropdown">
                                <NavDropdown.Item as={Link} to="/profile">Profile</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/editor">Create new Snippet</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="https://github.com/oskarikivekas/WebapplicationsProject">GitHub</NavDropdown.Item>
                                </NavDropdown> }
                    
                    </Nav>

                    <Form className="d-flex" id="searchbox">
                        <FormControl
                        type="search"
                        placeholder="Search snippets"
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
