import React from "react"
import { Navbar, Nav, Container } from "react-bootstrap"
import { NavLink } from "react-router-dom"

const Header = () => {
    return (
        <Navbar className="bg-white shadow-sm mb-3">
            <Container>
            <Nav>
                <Nav.Link to="/" as={NavLink}>
                    Home
                </Nav.Link>
                <Nav.Link to="/news" as={NavLink}>
                    Info
                </Nav.Link>
            </Nav>
            {/* right side here */}
            
            </Container>
        </Navbar>
        
    )
}

export default Header
