import React from 'react';
import styled from 'styled-components';
import { Jumbotron } from 'react-bootstrap';
import wallpaper from '../img/Untitled.jpg';

const Styles = styled.div`
.jtron{
    margin-top:-2em;
    margin-bottom:1em;
    height:250px;
    background: url(${wallpaper})  fixed top;
    background-size:cover;
    color:#ccc;

}
.txtS{
    text-align:center;
    font-family:Monoton;
    color:black;
    font-size:60px;
    margin-top:1em;

}
`

export const MovingJumbo = props => (
    <Styles>
        <Jumbotron className="jtron">
            <h2 class="txtS">{props.title}</h2>
        </Jumbotron> 
    </Styles>
)