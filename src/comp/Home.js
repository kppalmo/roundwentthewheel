import React from 'react';
import { Image } from 'react-bootstrap';
import playCover from '../img/RWTW1.png'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Styles = styled.div`
.f1{
    text-align: center;
    margin-top: 50px;
}
.f1C{
    text-align: center;
    margin-top: 50px;
    color:#009dff;
    font-weight: bold;

}
.sty2{
    width:35%;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top:25px;
    margin-bottom:20px;
}
.button{
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom:25px;
    background-color:#009dff;
    color:white;
}


`

export const Home = ()  => (
        <Styles>
        <h2 class="f1C">
            THE FUTURE BEGINS . . . AGAIN!
        </h2>
        <h3 class="f1">
            EARTH. THE NEAR FUTURE.
            WHEN TECHNOLOGY BRINGS THE WORLD TO 
            THE BRINK OF DISASTER, A NEW REGIME 
            NEEDS TO DREAM IT ALL UP AGAIN: THE 
            CHILDREN.
        </h3>
        <Image src={playCover} alt="cover" className="sty2"/>
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
        <Link to="/creativeteam">
            <button type="button" class="button">
                Learn More!
            </button>
        </Link>
    </Styles>

    
    
)