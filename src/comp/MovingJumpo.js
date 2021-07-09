import React from 'react';
import styled from 'styled-components';
import { Jumbotron } from 'react-bootstrap';
import wallpaper from '../img/Untitled.jpg';
import { useSpring, animated } from 'react-spring'


const Styles = styled.div`
font-family:Bowlby One;
.jtron{
    height:20vh;
    background: url(${wallpaper}); 
    object-fit: cover;
    object-position:center;

}
.jumbo-txtS{
    text-align:center;
    color:black;
    font-size:4vh;

}
.capS{
    text-align:center;
    color:black;
    font-size:2vh;

}

`

export const MovingJumbo = (props) => {
    const tAnima = useSpring({ to: { opacity: 1 }, from: { opacity: 0 }, config: {duration:1100}})

    return(
        <Styles>
        <animated.div style={tAnima}>
        <Jumbotron className="jtron">
            <h4 class="jumbo-txtS">{props.title}</h4>
            <h5 class="capS">{props.caption}</h5>
        </Jumbotron> 
        </animated.div>
    </Styles>

    )
}
    
    
