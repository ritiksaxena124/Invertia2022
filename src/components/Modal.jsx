import React from "react";
import styled from "styled-components";
import { Zoom } from "react-awesome-reveal";
function Modal({ closeModal, title, tagline, desc, link, imgLink, date, time, venue }) {
  return (
    <>
      <ModalBackground>
        <Zoom>
          <ModalContainer>
            <CloseBtn onClick={() => closeModal(false)}> X </CloseBtn>
            <PosterContainer>
              <Poster src={imgLink} />
            </PosterContainer>
            <Body>
              <Title>{title}</Title>
              <Tagline>{tagline}</Tagline>
              <Desc>{desc}</Desc>
              {link && (
                <RulesContainer>
                  <Rules>
                    <a href={link} download target="_blank">Rule Book</a>
                  </Rules>
                </RulesContainer>
              )}
              <DateTime>
                <Date><b>Date: </b>{date}</Date>
                <Time> <b>Time: </b> {time}</Time>
              </DateTime>
              <Venue><b>Venue: </b>{venue}</Venue>
            </Body>
          </ModalContainer>
        </Zoom>
      </ModalBackground>
    </>
  );
}

export default Modal;

const ModalBackground = styled.div`
  background: rgba(0, 0, 0, 0.6);
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const ModalContainer = styled.div`
  position: relative;
  width: fit-content;
  padding: 0px 20px;
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background: radial-gradient(#2f80ed, #0f2646);
  border-radius: 20px;
  width: 900px;
  padding: 10px;
  @media screen and (max-width: 1200px) {
    width: 700px;
    padding: 10px;
  }

  @media screen and (max-width: 900px) {
    width: 600px;
    padding: 10px;
  }

  @media screen and (max-width: 630px) {
    width: 400px;
  }
  @media screen and (max-width: 450px) {
    width: 350px;
  }
`;

// CLOSE BUTTON STYLING
const CloseBtn = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: none;
  display: block;
  cursor: pointer;
  margin-right: auto;
  transition: all 0.25s ease-in-out;
  font-size: 1em;
  position: absolute;
  z-index: 100;
  left: 10px;
  top: 10px;
  &:hover {
    background: #000;
    color: #fff;
  }

  @media screen and (max-width: 750px) {
    width: 30px;
    height: 30px;
    font-size: 1.2em;
  }
`;

const PosterContainer = styled.div`
  min-width: 270px;
  height: 270px;
  -webkit-animation: vibrate-1 2s cubic-bezier(0.39, 0.575, 0.565, 1) infinite;
  animation: vibrate-1 2s cubic-bezier(0.39, 0.575, 0.565, 1) infinite;

  @-webkit-keyframes vibrate-1 {
    0% {
      -webkit-transform: translate(0);
      transform: translate(0);
    }
    20% {
      -webkit-transform: translate(-2px, 2px);
      transform: translate(-2px, 2px);
    }
    40% {
      -webkit-transform: translate(-2px, -2px);
      transform: translate(-2px, -2px);
    }
    60% {
      -webkit-transform: translate(2px, 2px);
      transform: translate(2px, 2px);
    }
    80% {
      -webkit-transform: translate(2px, -2px);
      transform: translate(2px, -2px);
    }
    100% {
      -webkit-transform: translate(0);
      transform: translate(0);
    }
  }
  @keyframes vibrate-1 {
    0% {
      -webkit-transform: translate(0);
      transform: translate(0);
    }
    20% {
      -webkit-transform: translate(-2px, 2px);
      transform: translate(-2px, 2px);
    }
    40% {
      -webkit-transform: translate(-2px, -2px);
      transform: translate(-2px, -2px);
    }
    60% {
      -webkit-transform: translate(2px, 2px);
      transform: translate(2px, 2px);
    }
    80% {
      -webkit-transform: translate(2px, -2px);
      transform: translate(2px, -2px);
    }
    100% {
      -webkit-transform: translate(0);
      transform: translate(0);
    }
  }

  @media screen and (max-width: 750px) {
    height: 250px;
    width: 340px;
  }

  @media screen and (max-width: 450px) {
    height: 230px;
    width: 320px;
  }
`;
const Poster = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
  border-radius: 15px;

  -webkit-box-shadow: 10px 10px 18px -6px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 18px -6px rgba(0, 0, 0, 0.75);
  box-shadow: 10px 10px 18px -6px rgba(0, 0, 0, 0.75);
  border-radius: 15px;
`;

// BODY STYLING
const Body = styled.div`
  margin-top: 40px;
  text-align: center;
  color: #fff;
  padding: 10px 9px;
`;
const Title = styled.h1`
  font-size: 1.6em;
  letter-spacing: 2px;
  text-transform: uppercase;
  @media screen and (max-width: 750px) {
    font-size: 1.4em;
  }
`;
const Tagline = styled.h3`
  margin-top: 10px;
  font-size: 1.3em;
  letter-spacing: 2px;

  @media screen and (max-width: 750px) {
    font-size: 1em;
  }
`;
const Desc = styled.p`
  margin: 10px 0px 10px 0px;
  line-height: 1.4em;
  letter-spacing: 1.5px;
  @media screen and (max-width: 1200px) {
    font-size: 1em;
  }
  @media screen and (max-width: 900px) {
    font-size: 0.8em;
  }
`;
const DateTime = styled.div`
display:flex;
height: 50px;
flex-wrap: wrap;
width: 500px;
justify-content: space-between;
align-items:center;
margin: 7px;
@media screen and (max-width: 450px){
  flex-direction: column;
  justify-content: space-around;

}

`
const Date = styled.div``
const Time = styled.div``
const Venue = styled.div`
  margin: 7px;
`
// RULES SECTION
const RulesContainer = styled.div``;
const Rules = styled.div`
  padding: 6px 10px 10px 20px;
  margin-top: 15px;
  cursor: pointer;
  a {
    color: #fff;
    background: #8b2518;
    padding: 5px 10px;
    border-radius: 5px;
  }
`;
