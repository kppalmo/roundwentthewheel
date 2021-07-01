import React from 'react';
import styled from 'styled-components';
import { Carousel, Image } from 'react-bootstrap';
import { Layout } from './Layout';
import RWTW2 from '../img/RWTW2.png';
import RWTW3 from '../img/RWTW3.jpg';
import RWTW4 from '../img/RWTW4.jpg';
import RWTW5 from '../img/RWTW5.jpg';

const Styles = styled.div`
.s1{
    width:85%;
    display: block;
    margin-left: auto;
    margin-right: auto;
    box-shadow: 0px 0px 10px #000;

}

`

export const Caro = () => (
    <Styles>
        <Carousel>
            <Carousel.Item>
                <Image src={RWTW2}  alt="test" className="s1" />
            </Carousel.Item>
            <Carousel.Item>
                <Image src={RWTW3}  alt="test" className="s1" />
            </Carousel.Item>
            <Carousel.Item>
                <Image src={RWTW4}  alt="test"  className="s1"/>
            </Carousel.Item>
            <Carousel.Item>
                <Image src={RWTW5} alt="test" className="s1"  />
            </Carousel.Item>
        </Carousel>

        
    </Styles>
)