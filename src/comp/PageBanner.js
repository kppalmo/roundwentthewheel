import React from 'react';
import styled from 'styled-components';

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
export const Banner = props => (
    <Styles>
        <div class="cont">
            <h1 class="pagebanner-text">ROUND WENT THE WHEEL</h1>
            <h3></h3>
        </div>
    </Styles>


)