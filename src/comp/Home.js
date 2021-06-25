import React from 'react';
import { Image, Row, Col } from 'react-bootstrap';
import playCover from '../img/RWTW1.png'
import styled from 'styled-components';
import { Layout } from './Layout';
import insta from '../img/instaLogo.png';
import faceB from '../img/face-logo.png';

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
    margin-left: auto;
    margin-right: auto;

}
.socials{
    margin-top:4em;
    margin-bottom:4em;
    width:45%;
    display: block;
    margin-left: auto;
    margin-right: auto;
}

.authorQ{
    margin-left: 80%;
    color:#009dff;
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
       
        
        <h3 class="f1">
            EARTH. THE NEAR FUTURE.
            WHEN TECHNOLOGY BRINGS THE WORLD TO 
            THE BRINK OF DISASTER, A NEW REGIME 
            NEEDS TO DREAM IT ALL UP AGAIN: THE 
            CHILDREN.
        </h3>
        <Image src={playCover} alt="cover" className="sty2"/>
        <p class="f1"><i>
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
        </i></p>
        <a href="http://www.theasy.com/Reviews/2019/R/roundwentthewheel.php">
            <p class="authorQ">—Ed Malin, Theatre is Easy</p>
        </a>
        <a href="/about">
        <button type="button" class="button">
                Learn More!
            </button>
            <Layout>
            <Row>
                <Col lg={true}>
                    <a href="https://www.instagram.com/roundwentthewheel/">
                        <Image src={insta} className="socials"/>
                    </a>
                </Col>
                <Col lg={true}>
                    <a href="https://www.facebook.com/roundwentthewheel/">
                        <Image src={faceB} className="socials"/>
                    </a>
                </Col>
            </Row>
            <Row>
                <h1 class="f1C">Check Us Out!</h1>
            </Row>
        </Layout>

        </a>
            
        </Styles>

    
    
)