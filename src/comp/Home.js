import React from 'react';
import { Image, Row, Col } from 'react-bootstrap';
import playCover from '../img/RWTW1.png'
import styled from 'styled-components';
import { Layout } from './Layout';
import insta from '../img/instaLogo.png';
import faceB from '../img/face-logo.png';
import { Awards } from './Awards';

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
    width:60%;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top:25px;
    margin-bottom:20px;
    box-shadow: 0px 0px 10px #000;

}
.button{
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom:25px;
    margin-top:25px;
    
   
}
@media screen and (max-width:500px) {
    .sty2{
        width:100%;
    }
    .authorQ{
        text-align:center;
        margin-left: 0%;
        color:#009dff;
    }

`

export const Home = ()  => (
        <Styles>
        <Layout>
        <h3 class="f1">
            EARTH. THE NEAR FUTURE.
            WHEN TECHNOLOGY BRINGS THE WORLD TO 
            THE BRINK OF DISASTER, A NEW REGIME 
            NEEDS TO DREAM IT ALL UP AGAIN: THE 
            CHILDREN.
        </h3>
        </Layout> 
        <Layout>
            <Row>
                <Col lg={true}>
                    <Image src={playCover} alt="cover" className="sty2 "/>        
                </Col>
                <Col lg={true}>
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
                </Col>
            </Row>
        </Layout> 
        <a href="/about">
        <button type="button" class="button btn btn-primary">
                Learn More!
        </button>
        </a>
        <Awards/>
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
                <h4 class="f1C">Press or Inquiries: roundwentthewheel@gmail.com</h4>
            </Row>
        </Layout>

            
        </Styles>

    
    
)