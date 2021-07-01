import React from 'react'
import styled from 'styled-components';
import { Image, Row, Col} from 'react-bootstrap';
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

`

export const Awards = props => (
    <Styles>
        <Row>
            <Col>
            <Image className="imgStyle1" src={awa1} alt="awa1 drop-shadow"/>
            <h4 class="cenTlb">2019 BROADWAY BOUND THEATRE FESTIVAL</h4>
            </Col>
            <Col>
            <Image className="imgStyle2" src={awa2} alt="awa1 drop-shadow"/>
            <h4 class="cenTlb">2021 NEW MEDIA FILM FESTIVAL</h4>
            </Col>
        </Row>
        
    </Styles>
)