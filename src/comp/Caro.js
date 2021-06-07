import React from 'react';
import styled from 'styled-components';
import { Carousel, Image } from 'react-bootstrap';
import RWTW2 from '../img/RWTW2.png';
import RWTW3 from '../img/RWTW3.jpg';
import RWTW4 from '../img/RWTW4.jpg';
import RWTW5 from '../img/RWTW5.jpg';

const Styles = styled.div`
.s1{
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 65%;
    margin-top:4em;
    border:solid;
    border-color:#009dff;
}

`

export const Caro = () => (
    <Styles>
        <Carousel>
            <Carousel.Item>
                <Image src={RWTW2} className="s1" alt="test" rounded/>
                <Carousel.Caption>
                <p>
                Coltrane Gilman (Boy). Projection Design: Andy Evan Cohen/The 
                Roly Polys. Lighting Design: Mike Schulz. Photo: Emily Hewitt.    
                </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image src={RWTW3} className="s1" alt="test" rounded/>
                <Carousel.Caption>
                <p>
                Rafael Jordan* (David). Photo: Emily Hewitt.
                (*Actor appearing courtesy of Actors’ Equity Association.)
                </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image src={RWTW4} className="s1" alt="test" rounded/>
                <Carousel.Caption>
                <p>
                Coltrane Gilman (Boy) and Michael Gnat* (Anton). Photo: Emily Hewitt.
                (*Actor appearing courtesy of Actors’ Equity Association.)
                </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image src={RWTW5} className="s1" alt="test" rounded/>
                <Carousel.Caption>
                <p>
                Rafael Jordan* (David) and Marie Elena O’Brien* (Marta). Photo: 
                Emily Hewitt. (*Actor appearing courtesy of Actors’ Equity Association.)
                </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </Styles>
)