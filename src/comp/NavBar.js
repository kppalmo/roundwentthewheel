import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';


const Styles = styled.div`
    .Navbar{
        : red;
    }

    .navbar-brand, .navbar-nav, nav-link{
        color: black;
    

        &:hover {
            color:blue;
        }
    }
`

function NavigationBar () {
    return(
        <Styles>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">Round Went The Wheel</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Item><Nav.Link href="#home">Home</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="#home">About</Nav.Link></Nav.Item>
                    <Nav.Link href="#home">Cast</Nav.Link>
                    <Nav.Link href="#home">Creative Team</Nav.Link>
                    <Nav.Link href="#home">Photos</Nav.Link>
                    <Nav.Link href="#home">Contact</Nav.Link>

                </Nav>
                </Navbar.Collapse>
            </Navbar>
    </Styles>
    )
}


export default NavigationBar;
    
