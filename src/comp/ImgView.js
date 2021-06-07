import React from 'react';
import styled from 'styled-components';
import { Row, Col, Image, Jumbotron} from 'react-bootstrap';
import { MovingJumbo } from './MovingJumpo';
import wallpaper from '../img/Untitled.jpg';
import image1 from '../img/photos/im1.jpg';
import image2 from '../img/photos/im2.jpg';
import image3 from '../img/photos/im3.jpg';
import image4 from '../img/photos/im4.jpg';
import image5 from '../img/photos/im5.jpg';
import image6 from '../img/photos/im6.jpg';
import image7 from '../img/photos/im7.jpg';
import image8 from '../img/photos/im8.jpg';
import image9 from '../img/photos/im9.jpg';
import image10 from '../img/photos/im10.jpg';
import image11 from '../img/photos/im11.jpg';
import image12 from '../img/photos/im12.jpg';
import image13 from '../img/photos/im13.jpg';
import image14 from '../img/photos/im14.jpg';
import image15 from '../img/photos/im15.jpg';
import image16 from '../img/photos/im16.jpg';
import image17 from '../img/photos/im17.jpg';
import image18 from '../img/photos/im18.jpg';
import image19 from '../img/photos/im19.jpg';
import image20 from '../img/photos/im20.jpg';
import image21 from '../img/photos/im21.jpg';
import image22 from '../img/photos/im22.jpg';
import image23 from '../img/photos/im23.jpg';

import imageR1 from '../img/photos/rehersal/im1.jpg';
import imageR2 from '../img/photos/rehersal/im2.jpg';
import imageR3 from '../img/photos/rehersal/im3.jpg';
import imageR4 from '../img/photos/rehersal/im4.jpg';
import imageR5 from '../img/photos/rehersal/im5.jpg';
import imageR6 from '../img/photos/rehersal/im6.jpg';
import { Layout } from './Layout';


const Styles = styled.div`
.imgR1{
    width:100%;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top:2em;
    border:solid;
    border-color:#099dff;
}
.jumbo{
    margin-top:1em;
    margin-bottom:1em;
    height:250px;
    background: url(${wallpaper})  fixed top;
    background-size:cover;
    color:#ccc;

}
.txtS{
    text-align:center;
    font-family:Monoton;
    color:black;
    font-size:60px;
    margin-top:1em;

}
`

export const ImgView = props =>(
    <Styles>
        <MovingJumbo title="Photos"/>
        <Layout>
        <Row>
            <Col lg={true}>
                <Image src={image1} alt="pic1" className="imgR1"/>
            </Col>
            <Col lg={true}>
                <Image src={image2} alt="pic2" className="imgR1"/>
            </Col>
        </Row>
        <Row>
            <Col lg={true}>
                <Image src={image3} alt="pic3" className="imgR1"/>
            </Col>
            <Col lg={true}>
                <Image src={image4} alt="pic4" className="imgR1"/>
            </Col>
        </Row>
        <Row>
            <Col lg={true}>
                <Image src={image5} alt="pic5" className="imgR1"/>
            </Col>
            <Col lg={true}>
                <Image src={image6} alt="pic6" className="imgR1"/>
            </Col>
        </Row>
        <Row>
            <Col lg={true}>
                <Image src={image7} alt="pic5" className="imgR1"/>
            </Col>
            <Col lg={true}>
                <Image src={image8} alt="pic6" className="imgR1"/>
            </Col>
        </Row>
        <Row>
            <Col lg={true}>
                <Image src={image9} alt="pic5" className="imgR1"/>
            </Col>
            <Col lg={true}>
                <Image src={image10} alt="pic6" className="imgR1"/>
            </Col>
        </Row>
        <Row>
            <Col lg={true}>
                <Image src={image11} alt="pic5" className="imgR1"/>
            </Col>
            <Col lg={true}>
                <Image src={image12} alt="pic6" className="imgR1"/>
            </Col>
        </Row>
        <Row>
            <Col lg={true}>
                <Image src={image13} alt="pic5" className="imgR1"/>
            </Col>
            <Col lg={true}>
                <Image src={image14} alt="pic6" className="imgR1"/>
            </Col>
        </Row>
        <Row>
            <Col lg={true}>
                <Image src={image15} alt="pic5" className="imgR1"/>
            </Col>
            <Col lg={true}>
                <Image src={image16} alt="pic6" className="imgR1"/>
            </Col>
        </Row>
        <Row>
            <Col lg={true}>
                <Image src={image17} alt="pic5" className="imgR1"/>
            </Col>
            <Col lg={true}>
                <Image src={image18} alt="pic6" className="imgR1"/>
            </Col>
        </Row>
        <Row>
            <Col lg={true}>
                <Image src={image19} alt="pic5" className="imgR1"/>
            </Col>
            <Col lg={true}>
                <Image src={image20} alt="pic6" className="imgR1"/>
            </Col>
        </Row><Row>
            <Col lg={true}>
                <Image src={image21} alt="pic5" className="imgR1"/>
            </Col>
            <Col lg={true}>
                <Image src={image22} alt="pic6" className="imgR1"/>
            </Col>
        </Row>
        <Row>
            <Col lg={true}>
                <Image src={image23} alt="pic5" className="imgR1"/>
            </Col>     
        </Row>
        </Layout>
        


        <Jumbotron className="jumbo">
            <h1 class="txtS">The First Rehersal</h1>
        </Jumbotron>
        <Layout>
        <Row>
            <Col lg={true}>
                <Image src={imageR1} alt="pic7" className="imgR1"/>
            </Col>
            <Col lg={true}>
                <Image src={imageR2} alt="pic8" className="imgR1"/>
            </Col>
        </Row>
        <Row>
            <Col lg={true}>
                <Image src={imageR3} alt="pic9" className="imgR1"/>
            </Col>
            <Col lg={true}>
                <Image src={imageR4} alt="pic10" className="imgR1"/>
            </Col>
        </Row>
        <Row>
            <Col lg={true}>
                <Image src={imageR5} alt="pic11" className="imgR1"/>
            </Col>
            <Col lg={true}>
                <Image src={imageR6} alt="pic12" className="imgR1"/>
            </Col>
        </Row>
        </Layout>
    </Styles>
)