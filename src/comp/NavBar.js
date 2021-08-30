import React from 'react';
import { Nav, Navbar} from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
font-family:Lato;
 
    .navbar-custom {
        background-color: #009dff;
        color:white;
        
    }
    .txtColor{
        color:#FFD700;
        text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;

    }
    .txtColor:hover{
        color:#009dff;
    }
 
`

function NavigationBar () {

    return(
        <Styles>
                <Navbar className="navbar-custom  " variant="light" expand="lg">
                        <Navbar.Brand href="/" className="txtColor">RWTW</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" >
                        <Nav className="ml-auto   ">
                            <Nav.Item ><Nav.Link href="/" >Home</Nav.Link></Nav.Item>
                            <Nav.Item><Nav.Link href="/about">About</Nav.Link></Nav.Item>
                            <Nav.Item><Nav.Link href="/cast">BBTF Cast</Nav.Link></Nav.Item>
                            <Nav.Item><Nav.Link href="/CreativeTeam">BBTF Creative Team</Nav.Link></Nav.Item>
                            <Nav.Item><Nav.Link href="/Photos">Photos</Nav.Link></Nav.Item>
                    </Nav>
                    
                    </Navbar.Collapse>
                </Navbar>
        </Styles>
    )
}


export default NavigationBar;
    
