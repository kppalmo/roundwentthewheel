import React from 'react';
import styled from 'styled-components';
import { Image} from 'react-bootstrap';
import img from '../img/RWTW1.png';

const Styles = styled.div`
.f1{
    text-align: center;
    margin-top: 50px;
}
.f2{
    width:30%;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top:25px;
    margin-bottom:20px;
    border:solid;
}


`

export const Home = ()  => (
    <Styles>
        <h3 class="f1">
            EARTH. THE NEAR FUTURE.
            WHEN TECHNOLOGY BRINGS THE WORLD TO 
            THE BRINK OF DISASTER, A NEW REGIME 
            NEEDS TO DREAM IT ALL UP AGAIN: THE 
            CHILDREN.
        </h3>
        <p class="f1">
            What is our species going to do when 
            the healing power of technology becomes 
            a danger?…ROUND WENT THE WHEEL, a poetic 
            new play by Frank Ceruzzi, [delves] into 
            the enduring question of why being human 
            is a reward in itself….This stuff of graphic 
            novels and anime is now on stage thanks to 
            the Broadway Bound Festival. Director Janet 
            Bentley elicits some remarkable performances 
            from the multi-generational cast. You might be
            able to visualize the younger actors Gilman 
            and Elgrabli leading a revolution.
        </p>
        <Image class="f2"src={img} alt="image" />
    </Styles>
    
)