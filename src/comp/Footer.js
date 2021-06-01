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
`
export const Footer = props => (
    <Styles>
        <Jumbotron >
        </Jumbotron>
    </Styles>


)