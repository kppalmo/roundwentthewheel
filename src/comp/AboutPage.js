import React from 'react';
import { Image } from 'react-bootstrap';
import styled from 'styled-components';
import { Layout } from './Layout';
import { MovingJumbo} from './MovingJumpo';
import  img  from '../img/aboutLogo.png'

const Styles = styled.div `
.txtS{
    text-align:center;
    margin-top:1em;
    margin-bottom:1em;
}
.txtC{
    color:#009dff;
}
.imgS{
    width:65%;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top:2em;
    margin-bottom:2em;
    border:solid;
    border-color:#009dff;
}

`

export const AboutPage = props => (
    <Styles>
        <MovingJumbo title="About"/>
        <Layout>
            <Image src={img} alt="logo" className="imgS"/>
            <h1 className="txtS txtC">THE PAST:</h1>
            <p className="txtS">
                A computer network, Central, connects the world and—through a chip 
                implanted in your arm—makes it possible to access a completely immersive
                virtual reality. It’s the perfect illusion, the perfect escape from a 
                world of pollution, disease, and bloodshed.
                The problem: Central goes live too fast. The system is unstable, the illusions
                too strong. Soon people can’t find their way back to reality. Stuck inside this
                immersive VR, they become lost, violent. The network must be destroyed.
                But the MAN who controls Central won’t sacrifice everything he’s built. The only 
                person who can stop him? A BOY, his 13 year-old son.
            </p>
            <h1 className="txtS txtC">THE PRESENT:</h1>
            <p className="txtS">
                Children control the world. With Central shut down, all technology is outlawed. 
                But the Boy and his peers struggle to forge a new way forward. Nothing happens 
                for months. Today changes that. DAVID, our “everyman”, has a second chance—he’s
                been invited for a rare interview with the Boy. But while David waits to find
                his purpose in this brave new world, his wife, ELOISE, has other plans–she’s 
                pregnant, and her child will surely be taken away. Her solution? To turn Central
                back on, once and for all.
            </p>
            <h1 className="txtS txtC">THE FUTURE: BEGINS AGAIN!</h1>
            <p className="txtS">
                ROUND WENT THE WHEEL is a dystopian thriller written by Frank Ceruzzi (WikiMusical). 
                The play premiered at the 2019 Broadway Bound Theatre Festival at Theatre Row, directed 
                by Janet Bentley.ROUND WENT THE WHEEL is currently an Official Selection of the 2021 New 
                Media Film Festival in Los Angeles (Script Competition). It was a finalist for Acadiana 
                Repertory Theatre‘s 2018 theatrical season and a semi-finalist for the 2018 Austin Film 
                Festival (Stage Play).Featuring a generation-spanning cast of eight, the play runs 90 
                minutes, without intermission.
            </p>
            

        </Layout>
    </Styles>
)