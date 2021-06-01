import React from 'react';
import styled from 'styled-components';
import { Layout } from './Layout';
import { Row, Col, Image } from 'react-bootstrap';
import  cteam1  from '../img/cTeam/cteam1.jpg';
import cteam2 from '../img/cTeam/cteam2.jpg';
import cteam3 from '../img/cTeam/cteam3.jpeg';
import cteam4 from '../img/cTeam/cteam4.jpg';
import cteam5 from '../img/cTeam/cteam5.jpg';
import cteam6 from '../img/cTeam/cteam6.jpg';

const Styles = styled.div `

.mainImgStyle{
    display: block;
    margin-left: auto;
    margin-right: auto;
    border:solid;
    border-color:#009dff;
}
.imgS1{
    width:350px;
    margin-bottom:2em;
    margin-top:2em;
}
.imgS2{
    width:450px
    margin-top:6em;
    margin-bottom:2em;
}
.imgS3{
    width:325px
}
.imgS4{
    width:350px
    margin-top:2em;
}
.imgS5{
    width:350px
    margin-top:3em;
}
.imgS6{
    width:350px
    margin-top:7em;
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
            <Image  roundedCircle src={cteam1} alt="test" className="imgS1 mainImgStyle"/>
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
             <Image  roundedCircle src={cteam2} alt="test" className="imgS2 mainImgStyle"/>
            </Col>
        </Row>

        <Row>
            <Col  lg={true}>
            <Image  roundedCircle src={cteam3} alt="test" className="imgS3 mainImgStyle"/>
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

        <Row>
            <Col  lg={true}>
            <h3 class="namePlate">Daniel Patrick Hogan</h3>
            <p class="txtS">
            DANIEL PATRICK HOGAN (Scenic and Properties Design) is a versatile artist who has roots in Opera 
            and Musical Theatre. Daniel attended Texas Tech University and studied Classical Vocal Performance
             and fell in love with production design. Since then, he has worked as a Scenic Designer, a Makeup 
             Artist, a Hair and Wig Stylist and a Painter. He was the Production Manager of Moonlight Dinner 
             Theatre and produced musicals in a renovated Dairy Refrigerator and designed scenery, hair and makeup 
             for outdoor musical theatre at the Wells Fargo Amphitheatre in Lubbock, Texas. Daniel loves telling 
             a story and working to find the heart and soul hidden in the details onstage.  
             </p>
            </Col>
            <Col  lg={true}>            
             <Image  roundedCircle src={cteam4} alt="test" className="imgS4 mainImgStyle"/>
            </Col>
        </Row>

        <Row>
            <Col  lg={true}>
            <Image  roundedCircle src={cteam5} alt="test" className="imgS5 mainImgStyle"/>
            </Col>
            <Col  lg={true}>        
            <h3 class="namePlate">Andy Evan Cohen</h3>
            <p class="txtS">
                ANDY EVAN COHEN (Sound and Projection Design) is an award-winning sound and video designer and composer. His
                New York stage credits include off-Broadway productions of My Parsifal Conductor, Pushkin, In Bed With Roy Cohn,
                A Midsummer Night’s Dream (MasterWorks), Our Trojan War (Aquila Theatre US Tour), and Ay Carmela! (Repertorio Español), 
                as well as nearly 100 off-off-Broadway productions with companies such as Animus Theatre, Boomerang Theater, New Light
                Theater, Nylon Fusion, Red Fern, Stable Cable, Strindberg Rep., White Horse, and T. Schreiber. His national tour
                credits include work on Oklahoma! (Networks Broadway), The Hungry Hungry Games (Mills Entertainment),
                and The American Soldier (Kennedy Center, Library of Congress, The Citadel). Other media credits
                include music for “Marty’s Shadow”, short films “The Mall” and “Show & Tell Tango”, the web series 
                “Off Off Kilter”, and music for PBS Documentary films and UN Radio (Africa). Andy holds degrees 
                from Oberlin and The Manhattan School of Music. Twitter: @AndyEvanCohen
             </p>    
            </Col>
        </Row>

        <Row>
            <Col  lg={true}>
            <h3 class="namePlate">Catherine Fisher</h3>
            <p class="txtS">
            CATHERINE FISHER (Costume Design) has designed over 100 shows for theater, dance, film, and television, 
            is a member of the Lincoln Center Director’s Lab, a New York State Counsel for the Arts awards recipient, 
            and has been recognized with an Outstanding Costume award, Hamlet Bound and Unbound, Midtown International 
            Theatre Festival; Planet Connections Theatre Festival (Costume award, The God Particle). Her work has been 
            seen at 59e59th ; NYC Fringe and Prague Fringe Festivals, as well as many other NYC Festivals; The Producer’s
             Club; Riverside Theatre; has IMDb credits for both acting and design, and is a founding member of Honest 
             Accomplice Theatre. www.catfisher.homestead.com
             </p>
            </Col>
            <Col  lg={true}>            
             <Image  roundedCircle src={cteam6} alt="test" className="imgS2 mainImgStyle"/>
            </Col>
        </Row>

      



        </Layout>


    </Styles>
)