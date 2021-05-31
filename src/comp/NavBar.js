import React from 'react';
import { Nav, Navbar} from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
 
    .navbar-custom {
        background-color: #009dff;
    }
    .txtColor{
        color:white;
    }
`

function NavigationBar () {
    return(
        <Styles>
            <Navbar className="navbar-custom " expand="lg">
                <Navbar.Brand href="#home">Round Went The Wheel</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto txtColor">
                    <Nav.Item><Nav.Link href="#">Home</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="#">Cast</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="#">Creative Team</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="#">Photos</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="#">Contact</Nav.Link></Nav.Item>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Styles>
    )
}


export default NavigationBar;
    
