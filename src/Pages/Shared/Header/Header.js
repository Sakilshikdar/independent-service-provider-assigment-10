
import React from 'react';
import {Link} from 'react-router-dom';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logo from '../../../images/icon/camera.ico'
import { signOut } from 'firebase/auth';
import auth from '../../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';


const Header = () => {
    const [user] = useAuthState(auth);

    const handleSingOut = () =>{
        signOut(auth)
    }
    return (
        <div>
             <Navbar style={{backgroundColor: 'rgba(0, 255, 255, 0.195)'}} collapseOnSelect expand="lg" sticky='top' >
            <Container>
                <Navbar.Brand as={Link} to="/"><img className='mr-0' height={30} src={logo} alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="home">Home</Nav.Link>
                        <Nav.Link href="home#services">Services</Nav.Link>
                        <Nav.Link as={Link} to='/blogs'>Blogs</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link as={Link} to="/about">About me</Nav.Link>
                        {
                            user?
                            <button className=' sing-out bg-primary' style={{border:'none',borderRadius: '10px'}} onClick={handleSingOut}>Sing out</button>
                            :
                            <Nav.Link eventKey={2} as={Link} to="/Login">
                            Login
                        </Nav.Link>}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </div>
    );
};

export default Header;