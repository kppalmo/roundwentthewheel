import React from 'react';
import { Nav, Navbar} from 'react-bootstrap';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring'

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
    const tAnima = useSpring({ to: { opacity: 1 }, from: { opacity: 0 }, delay: 455, config: {duration:1350}})

    return(
        <Styles>
                <Navbar className="navbar-custom  " variant="light" expand="lg">
                    <animated.div style={tAnima}>
                        <Navbar.Brand href="/" className="txtColor">RWTW</Navbar.Brand>
                    </animated.div>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" >
                        <Nav className="ml-auto   ">
                        <animated.div style={tAnima}>
                            <Nav.Item ><Nav.Link href="/" >Home</Nav.Link></Nav.Item>
                        </animated.div>
                        <animated.div style={tAnima}>
                            <Nav.Item><Nav.Link href="/about">About</Nav.Link></Nav.Item>
                        </animated.div>
                        <animated.div style={tAnima}>
                            <Nav.Item><Nav.Link href="/cast">Cast</Nav.Link></Nav.Item>
                        </animated.div>
                        <animated.div style={tAnima}>
                            <Nav.Item><Nav.Link href="/CreativeTeam">Creative Team</Nav.Link></Nav.Item>
                        </animated.div>
                        <animated.div style={tAnima}>
                            <Nav.Item><Nav.Link href="/Photos">Photos</Nav.Link></Nav.Item>
                        </animated.div>
                    </Nav>
                    
                    </Navbar.Collapse>
                </Navbar>
        </Styles>
    )
}


export default NavigationBar;
    
