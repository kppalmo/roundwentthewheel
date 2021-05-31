import React from 'react';
import { Jumbotron, Image } from 'react-bootstrap';
import styled from 'styled-components';
import  RWTW2  from '../img/RWTW2.png';

const Styles = styled.div `

    .s1{
        text-align: center;
        color:purple;
    }
    .img1{
        width:50%;
        margin-left:25%;
    }



`

export const Jumbo = () => (
    <Styles>
        <Jumbotron fluid>
                <Image class="img1" src={RWTW2} alt="testIMG" />
        </Jumbotron>
    </Styles>
)