import React from 'react'
import styled from 'styled-components';
import { Image } from 'react-bootstrap';
import { Row, Col} from 'react-bootstrap';
import awa1 from '../img/award1.png';
import awa2 from '../img/award2.jpg';


const Styles = styled.div`
.sty1{
    width:65%;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top:25px;
    margin-bottom:20px;

}
.sty2{
    width:65%;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top:50px;
    margin-bottom:35px;

}
.cenT{
    text-align:center;
    margin-bottom:5px;
    margin-top:35px;
}
.cenTB{
    text-align:center;
    margin-bottom:5px;
    color:blue;

}

.cenTlb{
    text-align:center;
    margin-bottom:5px;
    color:#009dff;
}

`

export const Awards = props => (
    <Styles>
        <Row>
            <Col>
            <Image className="sty1" src={awa1} alt="awa1"/>
            <h4 class="cenTlb">2019 BROADWAY BOUND THEATRE FESTIVAL</h4>
            </Col>
            <Col>
            <Image className="sty2" src={awa2} alt="awa1"/>
            <h4 class="cenTlb">2021 NEW MEDIA FILM FESTIVAL</h4>
            </Col>
        </Row>
        
    </Styles>
)