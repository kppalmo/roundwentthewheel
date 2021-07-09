import React from 'react';
import styled from 'styled-components';

const Styles = styled.div`
font-family:Lato;

.cont{
    height:200px;
    background-image: linear-gradient(#009dff, white);
    text-align:center; 
    color:#FFD700;

}

`
export const Banner = props => (
    <Styles>
        <div class="cont">
            <h1>ROUND WENT THE WHEEL</h1>
            <h3></h3>
        </div>
    </Styles>


)