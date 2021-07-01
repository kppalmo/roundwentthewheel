import React from 'react';
import styled from 'styled-components';
import { Jumbotron } from 'react-bootstrap';
import wallpaper from '../img/Untitled.jpg';

const Styles = styled.div`
font-family:Bowlby One;
.jtron{
    height:;
    background: url(${wallpaper}) top; 
}
.txtS{
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

export const MovingJumbo = props => (
    <Styles>
        <Jumbotron className="jtron">
            <h4 class="txtS">{props.title}</h4>
            <h5 class="capS">{props.caption}</h5>
        </Jumbotron> 
    </Styles>
)