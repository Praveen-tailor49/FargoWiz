import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <>
            <Navbar bg="dark">
                <Container>
                    <Navbar.Brand style={{ color: 'white' }}>
                        FargoWiz
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Link to="/" ><h6 style={{marginLeft:'2rem', color:'white'}}>Home</h6></Link>
                        <Link to="/userInfo" ><h6 style={{marginLeft:'2rem', color:'white'}}>All Data</h6></Link>
                        
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar