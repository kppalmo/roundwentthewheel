import React from 'react'
import styled from 'styled-components';
import { Container, Image, Row, Col} from 'react-bootstrap';
import awa1 from '../img/award1.png';
import awa2 from '../img/award2.jpg';

const Styles = styled.div`
.imgStyle1{
    width:%;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top:25px;
    margin-bottom:20px;

}
.checkOut-style{
    font-family:Bowlby One;
    margin-top:10rem;
    text-align:center;
    color:#009dff;
}
.imgStyle2{
    width:%;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top:50px;
    margin-bottom:35px;

}


.cenTlb{
    text-align:center;
    font-size:100%;
    margin-bottom:5px;
    color:#009dff;
}
.drop-shadow{
    filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.5));

}
.award-spacing{
    margin-top:10vh;
    margin-bottom:10vh;
}

`

export const Awards = props => (
    <Styles>
        <Container className="award-spacing">

        <Row>
            <Col>
            <a href="https://www.broadwayboundfestival.com/book-online">
                <Image className="imgStyle1 drop-shadow" src={awa1} alt="awa1 drop-shadow"/>
                <h4 class="cenTlb">2019 BROADWAY BOUND THEATRE FESTIVAL</h4>
            </a>
            </Col>
            <Col>
            <a href="https://www.newmediafilmfestival.com/events-2/">
                <Image className="imgStyle2 drop-shadow" src={awa2} alt="awa1 "/>
                <h4 class="cenTlb">2021 NEW MEDIA FILM FESTIVAL</h4>
            </a>
            </Col>
        </Row>
        <Row>
            <Col lg={true}>
                <h1 class="checkOut-style">Check Us Out!</h1>
            </Col>
        </Row>

        </Container>

        
    </Styles>
)