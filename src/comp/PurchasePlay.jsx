import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import PlayBookCover from "../img/PlayBookCover.jpg";
import styled from "styled-components";

const Styles = styled.div`
  font-family: Lato;

  .play-cover-img {
    display: block;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 2em;
    width: 45%;
  }
  .hdr-txt {
    font-size: 35px;
    text-align: center;
    margin-top: 1em;
  }
  .purchase-info-btn {
    width: 40%;
    display: block;
    margin-top: 4em;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 2em;
  }
`;
export const PurchasePlay = () => {
  return (
    <Styles>
      <Container>
        <Row>
          <Col lg={true}>
            <Image className="play-cover-img" src={PlayBookCover} />
          </Col>
          <Col lg={true}>
            <h2 className="hdr-txt">
              ROUND WENT THE WHEEL is now available for purchase of licensing
              exclusively through Next Stage Press.
            </h2>
            <a href="https://nextstagepress.net/round-went-the-wheel/">
              <button type="button" class="purchase-info-btn btn btn-primary">
                Learn More!
              </button>
            </a>
          </Col>
        </Row>
      </Container>
    </Styles>
  );
};
