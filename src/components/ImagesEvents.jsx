import React, { useEffect, useState } from "react";
import styled from "styled-components";
import EventCard from "../components/EventCard";
import MenuBtn from "../components/MenuBtn";
import Modal from "../components/Modal";
import events from "../data/ImagesEvents";
function ImagesEvents() {
  const [openModal, setOpenModal] = useState(false);
  const [title, setTitle] = useState("");
  const [tagline, setTagline] = useState("");
  const [desc, setDesc] = useState();
  const [link, setLink] = useState();
  const [imgLink, setimgLink] = useState();
  const [date, setDate] = useState();
  const [time, setTime] = useState();
  const [venue, setVenue] = useState();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <MenuBtn />
        <Wrapper>
          <LeftSide>
            <HeadContainer>
              <Heading>
                <Letter>E</Letter>
                <Letter>V</Letter>
                <Letter>E</Letter>
                <Letter>N</Letter>
                <Letter>T</Letter>
                <Letter>S</Letter>
              </Heading>
            </HeadContainer>
          </LeftSide>

          <RightSide>
            <CardsContainer>
              {
                events.map(item => {
                  return(
                    <>
                    <EventCard
                      name={item.name}
                      btn="Know More"
                      modal={setOpenModal}
                      setTitle={setTitle}
                      setTagline={setTagline}
                      tagline={item.tagline}
                      desc={item.desc}
                      setDesc={setDesc}
                      link={item.downloadLink}
                      setLink={setLink}
                      imgLink={item.imglink}
                      setimgLink={setimgLink}
                      date={item.date}
                      Time={item.Time}
                      venue={item.venue}
                      setDate={setDate}
                      setVenue={setVenue}
                      setTime = {setTime}
                    />
                    </>
                  )
                })
              }

            </CardsContainer>
          </RightSide>

          {openModal && (
            <Modal
              title={title}
              tagline={tagline}
              closeModal={setOpenModal}
              desc={desc}
              link={link}
              imgLink={imgLink}
              venue={venue}
              time={time}
              date={date}
            />
          )}
        </Wrapper>
    </>
  );
}

export default ImagesEvents;

const Wrapper = styled.div`
  display: flex;
  // background: rgba(10, 24, 43, 1);
  background: url("/img/bg.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  overflow: hidden;
  min-height: 100vh;
  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
`;

const LeftSide = styled.div`
  width: 250px;
  position: relative;
  background: rgba(10, 24, 43, 0.5);

  -webkit-box-shadow: 11px 12px 6px -6px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 11px 12px 6px -6px rgba(0, 0, 0, 0.75);
  box-shadow: 11px 12px 6px -6px rgba(0, 0, 0, 0.75);

  @media screen and (max-width: 900px) {
    width: 100%;
    height: 200px;
  }
`;

const HeadContainer = styled.div`
  width: 100%;
  position: sticky;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 900px) {
    position: relative;
    width: 100%;
    height: 200px;
  }
`;
const Heading = styled.div`
  position: fixed;
  line-height: 1em;
  font-family: "Carter One", cursive;
  font-size: 100px;
  font-weight: 900;
  -webkit-text-stroke: 2px #ffff;
  color: 
  text-align: center;

  text-shadow: 0 1px 0 #ccc, 0 2px 0 #ccc, 0 3px 0 #ccc, 0 4px 0 #ccc,
    0 5px 0 #ccc, 0 6px 0 transparent, 0 7px 0 transparent, 0 8px 0 transparent,
    0 9px 0 transparent, 0 10px 10px rgba(0, 0, 0, 0.4);

    animation: text-flicker-in-glow 4s linear both;
    @-webkit-keyframes text-flicker-in-glow {
      0% {
        opacity: 0;
      }
      10% {
        opacity: 0;
        text-shadow: none;
      }
      10.1% {
        opacity: 1;
        text-shadow: none;
      }
      10.2% {
        opacity: 0;
        text-shadow: none;
      }
      20% {
        opacity: 0;
        text-shadow: none;
      }
      20.1% {
        opacity: 1;
        text-shadow: 0 0 30px rgba(255, 255, 255, 0.25);
      }
      20.6% {
        opacity: 0;
        text-shadow: none;
      }
      30% {
        opacity: 0;
        text-shadow: none;
      }
      30.1% {
        opacity: 1;
        text-shadow: 0 0 30px rgba(255, 255, 255, 0.45), 0 0 60px rgba(255, 255, 255, 0.25);
      }
      30.5% {
        opacity: 1;
        text-shadow: 0 0 30px rgba(255, 255, 255, 0.45), 0 0 60px rgba(255, 255, 255, 0.25);
      }
      30.6% {
        opacity: 0;
        text-shadow: none;
      }
      45% {
        opacity: 0;
        text-shadow: none;
      }
      45.1% {
        opacity: 1;
        text-shadow: 0 0 30px rgba(255, 255, 255, 0.45), 0 0 60px rgba(255, 255, 255, 0.25);
      }
      50% {
        opacity: 1;
        text-shadow: 0 0 30px rgba(255, 255, 255, 0.45), 0 0 60px rgba(255, 255, 255, 0.25);
      }
      55% {
        opacity: 1;
        text-shadow: 0 0 30px rgba(255, 255, 255, 0.45), 0 0 60px rgba(255, 255, 255, 0.25);
      }
      55.1% {
        opacity: 0;
        text-shadow: none;
      }
      57% {
        opacity: 0;
        text-shadow: none;
      }
      57.1% {
        opacity: 1;
        text-shadow: 0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.35);
      }
      60% {
        opacity: 1;
        text-shadow: 0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.35);
      }
      60.1% {
        opacity: 0;
        text-shadow: none;
      }
      65% {
        opacity: 0;
        text-shadow: none;
      }
      65.1% {
        opacity: 1;
        text-shadow: 0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.35), 0 0 100px rgba(255, 255, 255, 0.1);
      }
      75% {
        opacity: 1;
        text-shadow: 0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.35), 0 0 100px rgba(255, 255, 255, 0.1);
      }
      75.1% {
        opacity: 0;
        text-shadow: none;
      }
      77% {
        opacity: 0;
        text-shadow: none;
      }
      77.1% {
        opacity: 1;
        text-shadow: 0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.4), 0 0 110px rgba(255, 255, 255, 0.2), 0 0 100px rgba(255, 255, 255, 0.1);
      }
      85% {
        opacity: 1;
        text-shadow: 0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.4), 0 0 110px rgba(255, 255, 255, 0.2), 0 0 100px rgba(255, 255, 255, 0.1);
      }
      85.1% {
        opacity: 0;
        text-shadow: none;
      }
      86% {
        opacity: 0;
        text-shadow: none;
      }
      86.1% {
        opacity: 1;
        text-shadow: 0 0 30px rgba(255, 255, 255, 0.6), 0 0 60px rgba(255, 255, 255, 0.45), 0 0 110px rgba(255, 255, 255, 0.25), 0 0 100px rgba(255, 255, 255, 0.1);
      }
      100% {
        opacity: 1;
        text-shadow: 0 0 30px rgba(255, 255, 255, 0.6), 0 0 60px rgba(255, 255, 255, 0.45), 0 0 110px rgba(255, 255, 255, 0.25), 0 0 100px rgba(255, 255, 255, 0.1);
      }
    }
    @keyframes text-flicker-in-glow {
      0% {
        opacity: 0;
      }
      10% {
        opacity: 0;
        text-shadow: none;
      }
      10.1% {
        opacity: 1;
        text-shadow: none;
      }
      10.2% {
        opacity: 0;
        text-shadow: none;
      }
      20% {
        opacity: 0;
        text-shadow: none;
      }
      20.1% {
        opacity: 1;
        text-shadow: 0 0 30px rgba(255, 255, 255, 0.25);
      }
      20.6% {
        opacity: 0;
        text-shadow: none;
      }
      30% {
        opacity: 0;
        text-shadow: none;
      }
      30.1% {
        opacity: 1;
        text-shadow: 0 0 30px rgba(255, 255, 255, 0.45), 0 0 60px rgba(255, 255, 255, 0.25);
      }
      30.5% {
        opacity: 1;
        text-shadow: 0 0 30px rgba(255, 255, 255, 0.45), 0 0 60px rgba(255, 255, 255, 0.25);
      }
      30.6% {
        opacity: 0;
        text-shadow: none;
      }
      45% {
        opacity: 0;
        text-shadow: none;
      }
      45.1% {
        opacity: 1;
        text-shadow: 0 0 30px rgba(255, 255, 255, 0.45), 0 0 60px rgba(255, 255, 255, 0.25);
      }
      50% {
        opacity: 1;
        text-shadow: 0 0 30px rgba(255, 255, 255, 0.45), 0 0 60px rgba(255, 255, 255, 0.25);
      }
      55% {
        opacity: 1;
        text-shadow: 0 0 30px rgba(255, 255, 255, 0.45), 0 0 60px rgba(255, 255, 255, 0.25);
      }
      55.1% {
        opacity: 0;
        text-shadow: none;
      }
      57% {
        opacity: 0;
        text-shadow: none;
      }
      57.1% {
        opacity: 1;
        text-shadow: 0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.35);
      }
      60% {
        opacity: 1;
        text-shadow: 0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.35);
      }
      60.1% {
        opacity: 0;
        text-shadow: none;
      }
      65% {
        opacity: 0;
        text-shadow: none;
      }
      65.1% {
        opacity: 1;
        text-shadow: 0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.35), 0 0 100px rgba(255, 255, 255, 0.1);
      }
      75% {
        opacity: 1;
        text-shadow: 0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.35), 0 0 100px rgba(255, 255, 255, 0.1);
      }
      75.1% {
        opacity: 0;
        text-shadow: none;
      }
      77% {
        opacity: 0;
        text-shadow: none;
      }
      77.1% {
        opacity: 1;
        text-shadow: 0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.4), 0 0 110px rgba(255, 255, 255, 0.2), 0 0 100px rgba(255, 255, 255, 0.1);
      }
      85% {
        opacity: 1;
        text-shadow: 0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.4), 0 0 110px rgba(255, 255, 255, 0.2), 0 0 100px rgba(255, 255, 255, 0.1);
      }
      85.1% {
        opacity: 0;
        text-shadow: none;
      }
      86% {
        opacity: 0;
        text-shadow: none;
      }
      86.1% {
        opacity: 1;
        text-shadow: 0 0 30px rgba(255, 255, 255, 0.6), 0 0 60px rgba(255, 255, 255, 0.45), 0 0 110px rgba(255, 255, 255, 0.25), 0 0 100px rgba(255, 255, 255, 0.1);
      }
      100% {
        opacity: 1;
        text-shadow: 0 0 30px rgba(255, 255, 255, 0.6), 0 0 60px rgba(255, 255, 255, 0.45), 0 0 110px rgba(255, 255, 255, 0.25), 0 0 100px rgba(255, 255, 255, 0.1);
      }
    }
    

  @media screen and (max-width: 900px) {
    position: relative;
    width: 100%;
    height: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: 12px;
    font-size: 4em;
  }
`;
const Letter = styled.p``;

const RightSide = styled.div`
  display: flex;
  width: 100%;
  min-height: 500px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media screen and (max-width: 1200px) {
    margin: 30px 0px;
  }
`;
const CardsContainer = styled.div`
  // display: grid;
  // place-items:center;
  // grid-template-columns: 1fr 1fr 1fr;
  // grid-gap: 30px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  padding: 10px 30px;
  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 750px) {
    grid-template-columns: 1fr;
  }
`;
