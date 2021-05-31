import React from 'react';
import styled from 'styled-components';
import {Jumbotron} from 'react-bootstrap';

const Styles = styled.div`
.jumbotron{
    background-image: linear-gradient(#009dff, white);
    color:#ccc;
    height:200px;
    position:relative;
}
.txtS{
    text-align:center;
    font-family:Monoton;
    color:yellow;
    font-size:65px;

}
`
export const Banner = props => (
    <Styles>
        <Jumbotron  className="">
            <h1 class="txtS">Round Went The Wheel</h1>
        </Jumbotron>
    </Styles>


)