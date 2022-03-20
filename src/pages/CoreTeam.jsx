import React, { useEffect } from "react";
import MenuBtn from "../components/MenuBtn";
import styled from "styled-components";
import CoreTeamCard from "../components/CoreTeamCard";
import coreTeam from "../data/coreTeam";
function CoreTeam() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <MenuBtn />
      <Container bg={"img/bg.jpg"}>
        <HeadingContainer>
          <Heading>CORE TEAM</Heading>
        </HeadingContainer>
        <Convenor>
          <CoreTeamCard
            name="Shivangi Ghildiyal"
            src="img/convenor.png"
            designation="INVERTIA CONVENER"
            mail="shivangi.g@invertis.org"
          />
        </Convenor>
        <CoreTeamContainer>
          {coreTeam.map((item) => {
            return (
              <>
                <CoreTeamCard
                  name={item.name}
                  src={item.src}
                  designation={item.designation}
                  mail={item.mail}
                />
              </>
            );
          })}
        </CoreTeamContainer>
      </Container>
    </>
  );
}

export default CoreTeam;

const HeadingContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const Heading = styled.h1`
  width: fit-content;
  font-family: "Carter One", cursive;
  letter-spacing: 4px;
  padding-top: 70px;
  font-size: 5em;
  font-weight: 900;
  -webkit-text-stroke: 2px #ffff;
  color: rgba(255, 255, 255, 0.3);
  position: relative;
  &:before {
    content: "";
    position: absolute;
    height: 3px;
    border-radius: 3px;
    left: 0;
    right: 0;
    background: #fff;
    bottom: 0px;
  }
  @media screen and (max-width: 1200px) {
    font-size: 4em;
  }

  @media screen and (max-width: 750px) {
    font-size: 3em;
  }
`;

const Container = styled.div`
  min-height: 100vh;
  background: url(${(props) => props.bg});
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
`;


const Convenor = styled.div`
  display: flex;
  justify-content:center;
  margin-top: 30px;

`

const CoreTeamContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;
