import React from 'react';
import { Nav, Navbar} from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
    

    .navbar-brand, .navbar-nav, nav-link, .nav-item{
        color: white;
    

        &:hover {
            color:green;
        }
    }
    .imSize{
        width:10%;
    }
`

function NavigationBar () {
    return(
        <Styles>
            <Navbar variant="dark" bg="primary" expand="lg">
                <Navbar.Brand href="#home">RoundWentTheWheel</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Item><Nav.Link href="#test">Home</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="#home">About</Nav.Link></Nav.Item>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Styles>
    )
}


export default NavigationBar;
    
