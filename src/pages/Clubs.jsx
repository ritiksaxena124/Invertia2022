import React,{useEffect} from "react";
import styled from "styled-components";
import ClubCard from "../components/ClubCard";
import MenuBtn from "../components/MenuBtn";
import clubs from "../data/clubs";
function Events() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <MenuBtn />
      <Wrapper>
        <LeftSide>
          <HeadContainer>
            <Heading>
              <Letter>C</Letter>
              <Letter>L</Letter>
              <Letter>U</Letter>
              <Letter>B</Letter>
              <Letter>S</Letter>
            </Heading>
          </HeadContainer>
        </LeftSide>
        <RightSide>
          <CardsContainer>
            {clubs.map((club, key) => {
              return (
                <>
                  <ClubCard
                    key={key}
                    name={club.name}
                    tagline={club.tagline}
                    btn="Go to Events"
                    link={club.link}
                    logo={club.logo}
                    bg={club.bg}
                  />
                </>
              );
            })}
          </CardsContainer>
        </RightSide>
      </Wrapper>
    </>
  );
}

export default Events;

const Wrapper = styled.div`
  display: flex;
  position: relative;
  background: url("/img/bg.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
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
    font-size:70px;
  }
`;
const Letter = styled.p``;

// MAIN EVENTS CONTAINER
const RightSide = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
`;

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items:center;
  justify-content:center;
  margin-top: 60px;
  margin-bottom: 60px;
  padding: 10px 30px;
  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 750px) {
    grid-template-columns: 1fr;
  }
`;
