import React from 'react';
import { Nav, Navbar} from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
font-family:Futura PT Heavy;
 
    .navbar-custom {
        background-color: #009dff;
        color:white;
        
    }
    .txtColor{
        color:#FFD700;
    }
  
`

function NavigationBar () {
    return(
        <Styles>
            <Navbar className="navbar-custom  " variant="light" expand="lg">
                <Navbar.Brand href="/" className="txtColor">ROUND WENT THE WHEEL</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" >
                    <Nav className="ml-auto   ">
                    <Nav.Item><Nav.Link href="/" >Home</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/about">About</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/cast">Cast</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/CreativeTeam">Creative Team</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/Photos">Photos</Nav.Link></Nav.Item>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Styles>
    )
}


export default NavigationBar;
    
