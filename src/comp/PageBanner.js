import React from 'react';
import styled from 'styled-components';
import {Jumbotron} from 'react-bootstrap';

const Styles = styled.div`
font-family:Futura PT Heavy;
.jumbotron{
    background-image: linear-gradient(#009dff, white);
    color:#ccc;
    height:350px;
    position:relative;
    margin-top:-.5em;
}
.txtHeader{
    text-align:center;
    color:#FFD700;
    font-size:60px;
    margin-top:.5em;
    font-family:Bowlby One;
}
.txtSub{
    text-align:center;
    color:#FFD700;
    font-size:35px;
    margin-top:-.5em;
    font-family:Bowlby One;

}
`
export const Banner = props => (
    <Styles>
        <Jumbotron  className="">
            <h1 class="txtHeader">ROUND WENT THE WHEEL</h1>
            <h2 class="txtSub">A dystopian play by Frank Ceruzzi</h2>
        </Jumbotron>
    </Styles>


)