import React from 'react';
import styled from 'styled-components';
import { Layout } from './Layout';
import { Row, Col, Image } from 'react-bootstrap';
import  cteam1  from '../img/cTeam/cteam1.jpg';
import cteam2 from '../img/cTeam/cteam2.jpg';
import cteam3 from '../img/cTeam/cteam3.jpeg';

const Styles = styled.div `
.imgS{
    width:300px
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom:2em;
    border:solid;
    border-color:#009dff;
}
.imgS2{
    width:450px
    display: block;
    margin-top:3em;
    margin-left: auto;
    margin-right: auto;
    margin-bottom:2em;
    border:solid;
    border-color:#009dff;
}
.txtS{
    text-align: center;
    margin-top:2em;
}
.namePlate{
    color:#009dff;
    text-align: center;
    margin-top:2em;
}


`

export const CTeam = props => (
    <Styles>
        <Layout>
        <Row>
            <Col  lg={true}>
            <Image  roundedCircle src={cteam1} alt="test" className="imgS"/>
            </Col>
            <Col  lg={true}>
            <h3 class="namePlate">Frank Ceruzzi</h3>
             <p class="txtS">
                FRANK CERUZZI (Writer) is a New York based playwright, lyricist, 
                and high school English teacher. He co-wrote the book and lyrics to 
                WikiMusical, which was an Official Selection of The 2014 New York Musical 
                Theatre Festival (Book & Lyrics by Frank Ceruzzi and Blake J. Harris; Music 
                by Trent Jeffords). In 2016, WikiMusical won Second Prize in New Musical 
                Inc.’s “Search for New Musicals”. Frank has an MA from Georgetown University
                and has also studied at the New School and at the Einhorn School of Performing 
                Arts (Primary Stages). He currently teaches English at Scarsdale High School.
                He specializes in creative writing and American drama.
             </p>
            </Col>
        </Row>

        <Row>
            <Col  lg={true}>
            <h3 class="namePlate">Janet Bently</h3>
            <p class="txtS">
                JANET BENTLEY (Director/Sound Design) holds an MFA in dramaturgy from the University 
                of Iowa and a BA in theatre from the University of South Florida. Select directing 
                credits include: The Waiting Room (Ashtar Theatre, Ramallah, Palestine), The Dark and 
                Our Fantasia by John Patrick Shanley (Nylon Fusion), Brooklyn (Cain’s Adventure) by 
                Mario Fratti (Theatre for the New City), Basement by Michael Hagins (Roly Poly Productions),
                Abu Casem’s Slippers by August Strindberg (Strindberg Rep), After Tartuffe by Judy Klass 
                (Wild Project), and The Pillowman by Martin McDonagh (Surfside Players, Cocoa, FL). 
                For complete CV & bio, please visit www.rolypolyproductions.com
             </p>
            </Col>
            <Col  lg={true}>            
             <Image  roundedCircle src={cteam2} alt="test" className="imgS2"/>
            </Col>
        </Row>

        <Row>
            <Col  lg={true}>
            <Image  roundedCircle src={cteam3} alt="test" className="imgS"/>
            </Col>
            <Col  lg={true}>
            <h3 class="namePlate">Mike Schulz</h3>
             <p class="txtS">
             MIKE SCHULZ (Lighting Design) is a freelance Lighting Designer and Technical Director 
             in NYC, currently Venue Manager at the Baruch Performing Arts Center, and Production Stage 
             Manager for That Physics Show! and That Chemistry Show! at The Playroom Theater. He graduated 
             from the CUNY BA Program in June 2018 majoring in Entertainment Production Management. Recent 
             work: TD; Pippin (Hudson Guild). Lighting Design; Evelyn: A New Musical (Dixon Place), Cabaret
              (Baruch College), You’re A Good Man Charlie Brown (Baruch College). Sound Design; Anna In The
               Tropics (Baruch College), You’re A Good Man Charlie Brown (Baruch College).
             </p>
            </Col>
        </Row>

      



        </Layout>


    </Styles>
)