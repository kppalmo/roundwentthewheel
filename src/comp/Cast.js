import React from 'react';
import styled from 'styled-components';
import { Image } from 'react-bootstrap';
import  NavigationBar  from './NavBar';
import { Banner } from './PageBanner';
import { Layout } from './Layout';
import cast1 from '../img/cast/cast1.jpg';
import cast2 from '../img/cast/cast2.jpg';
import cast3 from '../img/cast/cast3.jpg';
import cast4 from '../img/cast/cast4.jpg';
import cast5 from '../img/cast/cast5.jpg';
import cast6 from '../img/cast/cast6.jpg';
import cast7 from '../img/cast/cast7.jpg';
import cast8 from '../img/cast/cast8.jpg';
import cast9 from '../img/cast/cast9.jpg';


const Styles = styled.aside `
.re{
    width:35% !important;
    display: block;
    margin-left: auto;
    margin-right: auto;
    border:solid;
    border-color:#009dff;
}
.txtC{
    margin-top:15px;
    margin-bottom:15px;
    text-align:center;
}
.txtCC{
    margin-top:15px;
    margin-bottom:15px;
    text-align:center;
    color:#009dff;
}


`

export const Cast = props => (
    <Styles>
        <NavigationBar/>
        <Banner/>        
        <Layout>
            <Image src={cast1} className="re" alt="test"/>
            <h2 class="txtCC">RAFEAL JORDAN</h2>
            <p class="txtC">
            RAFAEL JORDAN* (David) NEW YORK: Caesar and Cleopatra 
            (Clurman Theatre) Uncle Tom’s Cabin (Metropolitan 
            Playhouse); Thunder Above, Deeps Below by A. Rey Pamatmat 
            (Second Generation). REGIONAL: King Charles III (Shakespeare 
            Theatre of DC/Seattle Rep/ACT); Shakespeare in Love – Will
             (Seattle Shakespeare). King Lear – Edgar (California Shakespeare 
             Theatre); runboyrun by Mfoniso Udofia (Magic Theatre). 
             365 Days/365 Plays (Actors Theatre of Louisville). TV/Film: 
             Godfather of Harlem (ABC Studios) Christmas Eve (short, Amazon
             Prime). Rafael is co-creator of web-series hashtagtheshow. MFA,
              American Conservatory Theatre. *Appearing Courtesy of Actors’ 
              Equity Association.
            </p>

            <Image src={cast2} className="re"/>
            <h2 class="txtCC">COLTRANE GILMAN </h2>
            <p class="txtC">
            COLTRANE GILMAN (Boy) is making his professional theatre debut in 
            Round Went the Wheel. Coltrane, a high school student at Avenues the 
            World School in NYC, is an aspiring actor. To date he has performed in 
            several school plays and short films, and has received training at BAM and 
            NYFA. He currently studies classical voice with Andres Andrade. Coltrane 
            is thankful for the opportunity to join such a wonderful cast and production,
            and he is excited to display the hard work and craft put into Round Went
             the Wheel. 
            </p>

            <Image src={cast3} className="re"/>
            <h2 class="txtCC">MARIE ELÉNA O’BRIEN  </h2>
            <p class="txtC">
            MARIE ELÉNA O’BRIEN* (Marta) A frequent contributor to The PlayGround Experiment, 
            NY Madness and New Ambassadors,  Marie Eléna recently appeared in  ‘MINOR DEVIATIONS’ 
            (Estrogenuis), Mandy Murphy’s ‘VALER’ (She NYC Arts), ‘FROZEN FOODS’ (Nylon Fusion), 
            ‘RICHARD III’ (Blunt Ensemble), and New Ambassadors’  ‘EXPERIMENTING WITH KATZ’, ‘FAULT
             LINES’ and ‘GUNS AND AMMUNITION’. *Appearing Courtesy of Actors’ Equity Association.
            </p>

            <Image src={cast4} className="re"/>
            <h2 class="txtCC">MICHAEL GNAT </h2>
            <p class="txtC">
            MICHAEL GNAT* (Anton) recently toured Europe in Sam Graber’s Shooter (dir. Katrin Hilbe, 
            ManyTracks), which he’d premiered in NYC. Other full-length favorites: Eddie Antar’s Drama 
            Desk–nominated The Navigator and John McKinney’s The Chekhov Dreams (Anton Chekhov; both dir.
             Leslie Kincaid Burby, WorkshopTh.); Evan Smith’s The Savannah Disputation (dir. Hilbe); 
             Bill Rogers’s Caldwell’s Bomb (“Best Actor” nom); John Dirrigl’s The Bauer Sisters (MITF); 
             Twelfth Night (Malvolio; DrillingCo.); Mike Folie’s Slave Shack (Algonquin); and Michael 
             Niederman’s The Riverside Symphony (“Outstanding Actor”; Planet Connections). Feature films: 
             Off Jackson Avenue; Bobby G. Can’t Swim. Web: ONN’s News from the Year 2137. AEA, 
             SAG–AFTRA. *Appearing Courtesy of Actors’ Equity Association. 
            </p>

            <Image src={cast5} className="re"/>
            <h2 class="txtCC">CHRISTINA TOTH </h2>
            <p class="txtC">
            CHRISTINA TOTH (Eloise) Latest projects include Orange Is The New Black Seasons 6 and 7 
            (recurring guest star – Annalisa Damiva), LAZARUS (New York Theatre Workshop) and WARDA 
            (Théâtre Le Rideau, Belgium). She appeared in HBO’S Boardwalk Empire (Co-Star) and
             Discovery’s A Crime To Remember (Guest Star). She recently was seen on stage in a
              revival production of The Woolgatherer (LaTea Theatre) directed by Chazz Palminteri
            </p>

            <Image src={cast6} className="re"/>
            <h2 class="txtCC">VICTOR Y. CHEN (Dake) </h2>
            <p class="txtC">
            VICTOR Y. CHEN (Dake) is an actor, writer and singer who recently graduated from
             the American Academy of Dramatic Arts. He is incredibly excited to be working with 
             the cast on such an interesting and fun project. As an artist, Victor aims to 
             celebrate and explore what makes people different—and how those differences can 
             unite us. 
            </p>

            <Image src={cast7} className="re"/>
            <h2 class="txtCC">MOIRA MCAULIFFE </h2>
            <p class="txtC">
            MOIRA MCAULIFFE (Katherine) is a New York-based actor and singer. Alumnus of 
            Fordham University – Lincoln Center with a BA in Theatre Performance, she has 
            since been juggling performance and freelance carpentry work. Favorite Credits: 
            The Bubbly Black Girl Sheds Her Chameleon Skin, Un-Tamed, Agamemnon, The Maids,
             Macbeth,As You Like It, Whistle in Mississippi, The Ugly Kids, A Park Avenue Christmas, 
             and she has enjoyed creating roles in several new plays. She also recently received 
             an award from the Fresh Fruit Festival for “Outstanding Lead Performance in a 
             Musical”.
            </p>

            <Image src={cast8} className="re"/>
            <h2 class="txtCC">ORIAH ELGRABLI</h2>
            <p class="txtC">
            ORIAH ELGRABLI (Girl) is thrilled to join this production. Her theater credits 
            include Matilda in Matilda, Junie B.inJunie B. Jones, Molly in both Annie and 
            Annie Warbucks, Little Girl in Ragtime, and Anne in Madeline’s Christmas. She 
            recently performed in a reading of Ciao Bambino with Opera America and will appear 
            in A Little Princess later this summer. Film/TV: Butterflies,Evil Lives Here and
             Mysteries at the Museum. Oriah is represented by CESD.
            </p>

            <Image src={cast9} className="re"/>
            <h2 class="txtCC">ARIELA ROZENTUL </h2>
            <p class="txtC">
            ARIELA ROZENTUL (Girl–Alternate) is thrilled and grateful 
            to be part of this production. Signature Theatre: Ermengarde 
            in US Premiere of A Little Princess, Kelsi in High School Musical, 
            Duffy in Annie Warbucks; Regional: Young Fiona in Shrek the Musical; 
            Jacinta in US Premiere of Miracle of Fátima; Lucille in Junie B Jones;
             Children of Eden; title roles in Hansel & Gretel and Pinocchio, 
             Fiddler on the Roof, Film: Batman -v- Superman the Parody, 
             Retry, Lollitrap, Nightmare As a Child. Thank you mummy & 
             daddy, family, friends! Instagram @arielarozentul_artist
            </p>
             
        </Layout>
    </Styles>
)