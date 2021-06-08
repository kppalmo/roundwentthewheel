import React from 'react';
import styled from 'styled-components';
import {Jumbotron} from 'react-bootstrap';

const Styles = styled.div`
.jumbotron{
    background-image: linear-gradient(white, #009dff);
    color:#ccc;
    height:200px;
    position:relative;
    margin-bottom:-2em;
}
.Text{
    text-align:center;
    margin-top:45px;
}
`
export const Footer = props => (
    <Styles>
        <Jumbotron >
            <h4 class="Text">Copyright © 2021 ROUND WENT THE WHEEL</h4>
        </Jumbotron>
    </Styles>


)