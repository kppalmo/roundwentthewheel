import React from 'react';
import { Image, Row, Col} from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div `
.imgR1{
    width:100%;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top:2em;
    border:solid;
    border-color:#099dff;
}
.textWork{
    text-align:center;
    margin-top:1em;

}

`

export const ImgWCaption = props => (
    <Styles>
        <Row>
            <Col lg={true}>
                <Image src={props.image1} alt="pic1" className="imgR1"/>  
                <p class="textWork">{props.text1}</p>              
            </Col>
            <Col lg={true}>
                <Image src={props.image2} alt="pic2" className="imgR1"/>
                <p class="textWork">{props.text2}</p>              
            </Col>
        </Row>
        

    </Styles>
)