import React from 'react';
import styled from 'styled-components';
import { Row, Col, Image, Jumbotron} from 'react-bootstrap';
import wallpaper from '../img/Untitled.jpg';
import image1 from '../img/photos/im1.jpg';
import image2 from '../img/photos/im2.jpg';
import image3 from '../img/photos/im3.jpg';
import image4 from '../img/photos/im4.jpg';
import image5 from '../img/photos/im5.jpg';
import image6 from '../img/photos/im6.jpg';
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