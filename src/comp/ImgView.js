import React from 'react';
import styled from 'styled-components';
import { Jumbotron} from 'react-bootstrap';
import { MovingJumbo } from './MovingJumpo';
import wallpaper from '../img/Untitled.jpg';
import IMG1 from '../img/photos/im1.jpg';
import IMG2 from '../img/photos/im2.jpg';
import IMG3 from '../img/photos/im3.jpg';
import IMG4 from '../img/photos/im4.jpg';
import IMG5 from '../img/photos/im5.jpg';
import IMG6 from '../img/photos/im6.jpg';
import IMG7 from '../img/photos/im7.jpg';
import IMG8 from '../img/photos/im8.jpg';
import IMG9 from '../img/photos/im9.jpg';
import IMG10 from '../img/photos/im10.jpg';
import IMG11 from '../img/photos/im11.jpg';
import IMG12 from '../img/photos/im12.jpg';
import IMG13 from '../img/photos/im13.jpg';
import IMG14 from '../img/photos/im14.jpg';
import IMG15 from '../img/photos/im15.jpg';
import IMG16 from '../img/photos/im16.jpg';
import IMG17 from '../img/photos/im17.jpg';
import IMG18 from '../img/photos/im18.jpg';
import IMG19 from '../img/photos/im19.jpg';
import IMG20 from '../img/photos/im20.jpg';
import IMG21 from '../img/photos/im21.jpg';
import IMG22 from '../img/photos/im22.jpg';
import IMG23 from '../img/photos/im23.jpg';
import endPic from '../img/aboutLogo.png';
import imageR1 from '../img/photos/rehersal/im1.jpg';
import imageR2 from '../img/photos/rehersal/im2.jpg';
import imageR3 from '../img/photos/rehersal/im3.jpg';
import imageR4 from '../img/photos/rehersal/im4.jpg';
import imageR5 from '../img/photos/rehersal/im5.jpg';
import imageR6 from '../img/photos/rehersal/im6.jpg';
import { Layout } from './Layout';
import { ImgWCaption } from './ImgWCaption';


const Styles = styled.div`

.jumbo{
    margin-top:1em;
    margin-bottom:1em;
    height:250px;
    background: url(${wallpaper})   top;
    background-size:cover;
    color:#ccc;

}
.txtS{
    text-align:center;
    font-family:Monoton;
    color:black;
    font-size:60px;
    margin-top:1em;

}
`

export const ImgView = props =>(
    <Styles>

        <MovingJumbo title="Photos"/>
        <Layout>
            <ImgWCaption image1={IMG1} image2={IMG2} 
            text1="The waiting room. Set Design: Daniel Patrick Hogan. Lighting Design: Mike Schulz.
            Photo: Emily Hewitt." 
            text2="Rafael Jordan* (David) and Marie Elena O’Brien* (Marta). Photo: Emily Hewitt.
            (*Actor appearing courtesy of Actors’ Equity Association.)"/>
            <ImgWCaption image1={IMG3} image2={IMG4} 
            text1="Michael Gnat* (Anton), Coltrane Gilman (Boy), Rafael Jordan* (David), and Marie Elena 
            O’Brien* (Marta). Photo: Emily Hewitt. (*Actor appearing courtesy of Actors’ Equity Association.)" 
            text2="Christina Toth (Eloise) and Rafael Jordan* (David). Photo: Emily Hewitt.
            (*Actor appearing courtesy of Actors’ Equity Association.)"/>
            <ImgWCaption image1={IMG5} image2={IMG6} 
            text1="Rafael Jordan* (David) and Christina Toth (Eloise). Photo: Emily Hewitt.
            (*Actor appearing courtesy of Actors’ Equity Association.)" 
            text2="Coltrane Gilman (Boy), Victor Y. Chen (Dake), and Oriah Elgrabli (Girl).
            Photo: Emily Hewitt."/>
            <ImgWCaption image1={IMG7} image2={IMG8} 
            text1="Moira McAuliffe (Katherine). Photo: Emily Hewitt." 
            text2="Moira McAuliffe (Katherine). Photo: Emily Hewitt."/>
            <ImgWCaption image1={IMG9} image2={IMG10} 
            text1="Rafael Jordan* (David). Photo: Emily Hewitt.
            (*Actor appearing courtesy of Actors’ Equity Association.)" 
            text2="Coltrane Gilman (Boy) and Michael Gnat* (Anton). Photo: Emily Hewitt.
            (*Actor appearing courtesy of Actors’ Equity Association.)"/>
            <ImgWCaption image1={IMG11} image2={IMG12} 
            text1="Coltrane Gilman (Boy) and Michael Gnat* (Anton). Photo: Emily Hewitt.
            (*Actor appearing courtesy of Actors’ Equity Association.)" 
            text2="Oriah Elgrabli (Girl). Photo: Emily Hewitt."/>
            <ImgWCaption image1={IMG13} image2={IMG14} 
            text1="Inside Central. Set Design: Daniel Patrick Hogan. Projection Design: Andy Evan Cohen/The Roly Polys.
            Lighting Design: Mike Schulz. Photo: Emily Hewitt." 
            text2="Coltrane Gilman (Boy). Projection Design: Andy Evan Cohen/The Roly Polys. Lighting Design: Mike Schulz. Photo: Emily Hewitt."/>           
            <ImgWCaption image1={IMG15} image2={IMG16} 
            text1="Michael Gnat* (Man) and Coltrane Gilman (Boy). Photo: Emily Hewitt.
            (*Actor appearing courtesy of Actors’ Equity Association.)" 
            text2="Victor Y. Chen (Dake). Photo: Emily Hewitt."/>
            <ImgWCaption image1={IMG17} image2={IMG18} 
            text1="Marie Elena O’Brien* (Marta) and Ariel Rozentul (Girl–Alternate). Photo: Emily Hewitt.
            (*Actor appearing courtesy of Actors’ Equity Association.)" 
            text2="Moira McAuliffe (Katherine), Marie Elena O’Brien* (Marta), Oriah Elgrabli (Girl), Rafael Jordan* (David), and
            Michael Gnat* (Anton). Photo: Emily Hewitt. (*Actor appearing courtesy of Actors’ Equity Association.)"/>
            <ImgWCaption image1={IMG19} image2={IMG20} 
            text1="Rafael Jordan* (David), Christina Toth (Eloise), and Marie Elena O’Brien* (Marta). Photo: Emily Hewitt.
            (*Actor appearing courtesy of Actors’ Equity Association.)" 
            text2="Marie Elena O’Brien* (Marta), Victor Y. Chen (Dake), Michael Gnat* (Anton), and Coltrane Gilman (Boy). Photo: Emily Hewitt. (*Actor appearing courtesy of Actors’ Equity Association.)"/>
            <ImgWCaption image1={IMG21} image2={IMG22} 
            text1="Rafael Jordan* (David), Christina Toth (Eloise), Marie Elena O’Brien* (Marta), Michael Gnat* (Anton), Coltrane Gilman (Boy), and Victor Y. Chen (Dake). Photo: Emily Hewitt.
            (*Actor appearing courtesy of Actors’ Equity Association.)" 
            text2="Oriah Elgrabli (Girl), Moira McAuliffe (Katherine), Michael Gnat* (Anton), Coltrane Gilman (Boy), and Marie Elena O’Brien* (Marta). Photo: Emily Hewitt. (*Actor appearing courtesy of Actors’ Equity Association.)"/>
            <ImgWCaption image1={IMG23} image2={endPic} 
            text1="Coltrane Gilman (Boy) and Michael Gnat* (Anton). Photo: Emily Hewitt.
            (*Actor appearing courtesy of Actors’ Equity Association.)" 
            text2=""/>                
               
        </Layout>

        <Jumbotron className="jumbo">
            <h1 class="txtS">The First Rehersal</h1>
        </Jumbotron>
        
        <Layout>
            <ImgWCaption image1={imageR1} image2={imageR2} 
            text1="Our incredible cast in rehearsal! From left: Christina Toth, Rafael Jordan*, Marie Elena O’Brien*, Oriah Elgrabli (front), Coltrane Gilman, Michael Gnat*, Moira McAuliffe, and Victor Y. Chen. (*Actor appearing courtesy of Actors’ Equity Association.) Photo: Joshua Towvim." 
            text2="Janet Bentley (Director) giving notes to Coltrane Gilman (Boy). Photo: Joshua Towvim." />
            <ImgWCaption image1={imageR3} image2={imageR4}
            text1="Christina Toth (Eloise) and Rafael Jordan* (David) preparing for a scene. Photo: Joshua Towvim.
            (*Actor appearing courtesy of Actors’ Equity Association.)"
            text2="Christina Toth (Eloise). Photo: Joshua Towvim."/>
            <ImgWCaption image1={imageR5} image2={imageR6}
            text1="Oriah Elgrabli (Girl). Photo: Joshua Towvim."
            text2="Coltrane Gilman (Boy) running lines with our stage manager, Adam Sherwin.
            Photo: Joshua Towvim."/>
        </Layout>
    </Styles>
)