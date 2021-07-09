import React from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring'
const Styles = styled.div`
font-family:Lato;

.cont{
    height:200px;
    background-image: linear-gradient(#009dff, white);
    text-align:center; 
    color:#FFD700;
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;

}
.pagebanner-text{
    font-size:400%;
}
@media screen and (max-width:1020px) {
    .pagebanner-text{
        font-size:300%;
    }
}

`
export const Banner = props => {
    const tAnima = useSpring({  from: { y:-130 }, to: { y:0 }, delay: 100, config: {duration:1100}})

    return(
    <Styles>
        <div class="cont">
            <animated.div style={tAnima}>  
                <h1 class="pagebanner-text">ROUND WENT THE WHEEL</h1>
            </animated.div>  
        </div>
    </Styles>
    )
}   
