import React from 'react';
import styled from 'styled-components';
import { Jumbotron } from 'react-bootstrap';
import wallpaper from '../img/Untitled.jpg';

const Styles = styled.div`
.jtron{
    margin-top:-2em;
    margin-bottom:1em;
    height:250px;
    background: url(${wallpaper}) top; 
    background-size:cover;
    color:#ccc;

}
.txtS{
    text-align:center;
    font-family:Monoton;
    color:black;
    font-size:55px;
    margin-top:1em;

}
.capS{
    text-align:center;
    color:black;

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