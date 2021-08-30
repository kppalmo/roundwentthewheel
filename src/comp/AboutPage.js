import React from "react";
import { Image } from "react-bootstrap";
import styled from "styled-components";
import { Layout } from "./Layout";
import { MovingJumbo } from "./MovingJumpo";
import img from "../img/aboutLogo.png";

const Styles = styled.div`
  .txtS {
    text-align: center;
    margin-top: 1em;
    margin-bottom: 1em;
  }
  .txtC {
    color: #009dff;
    font-family: Bowlby One;
  }
  .imgS {
    width: 65%;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 2em;
    margin-bottom: 2em;
  }
  .box-shadow {
    box-shadow: 0px 0px 10px #000;
  }
  .test {
    width: 203vh;
    height: 50vh;
    background-color: blue;
  }

  @media screen and (max-width: 1020px) {
    .imgS {
      width: 100%;
    }
  }
`;

export const AboutPage = (props) => (
  <Styles>
    <MovingJumbo title="About" />
    <Layout>
      <Image src={img} alt="logo" className="imgS box-shadow" />
      <h1 className="txtS txtC">THE PAST:</h1>
      <p className="txtS">
        CENTRAL is the world's first completely immersive virtual reality; it's
        the perfect illusion, the perfect escape from a world of disease and
        violence. The problem: the network goes lives too fast. The system is
        unstable, the illusions too strong. But the MAN who controls CENTRAL
        won't sacrifice everything he's built. The only person who can stop him?
        A BOY, his 13-year-old son.
      </p>
      <h1 className="txtS txtC">THE PRESENT:</h1>
      <p className="txtS">
        Children control the world. With CENTRAL shutdown, technology is
        outlawed. Now the Boy waits, struggling to find a way forward in this
        brave new world. Today changes all that. DAVID, our “everyman”, has a
        second chance-he’s been invited for a rare interview with the Boy. But
        David’s wife, ELOISE, has other plans-she's pregnant, and her child will
        surely be taken. Her solution? To turn Central back on , once and for
        all.
      </p>
      <h1 className="txtS txtC">THE FUTURE: BEGINS AGAIN!</h1>
      <p className="txtS">
        ROUND WENT THE WHEEL is a dystopian thriller written by Frank Ceruzzi
        <a href=" https://www.wikithemusical.com/"> (WikiMusical)</a>. Featuring
        a generation-spanning cast of eight, the play runs 90 minutes with no
        intermission. ROUND WENT THE WHEEL premiered at the 2019 Broadway Bound
        Theatre Festival at Theatre Row, directed by Janet Bentley. The play was
        an Official Selection of the 2021 New Media Film Festival (Script
        Competition), a finalist for Acadiana Repertory Theatre's 2018
        theatrical season, and a semi-finalist for the 2018 Austin Film Festival
        (Stage Play Competition).
      </p>
    </Layout>
  </Styles>
);
