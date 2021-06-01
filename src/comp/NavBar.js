import React from 'react';
import { Nav, Navbar} from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
 
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
                <Navbar.Brand href="/" className="txtColor">RoundWentTheWheel</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" >
                    <Nav className="ml-auto   ">
                    <Nav.Item><Nav.Link href="/" >Home</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/cast">Cast</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/CreativeTeam">Creative Team</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/Photos">Photos</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/Contact">Contact</Nav.Link></Nav.Item>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Styles>
    )
}


export default NavigationBar;
    
