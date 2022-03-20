import React, {useEffect} from "react";
import MenuBtn from "../components/MenuBtn";
import styled from "styled-components";
import AbhiruchiCard from "../components/AbhiruchiCard";
import abhiruchi from "../data/abhiruchi";
function Abhiruchi() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <>
      <MenuBtn />
      <Container bg={"img/bg.jpg"}>
        <HeadingContainer>
          <Heading>ABHIRUCHI</Heading>
        </HeadingContainer>
        <CoreTeamContainer>
         {
           abhiruchi.map(item => {
             return(
               <>
               <AbhiruchiCard src={item.src} name={item.name} mail={item.mail} designation={item.designation}/>
               </>
             )
           })
         }
        </CoreTeamContainer>
      </Container>
    </>
  );
}

export default Abhiruchi;

const HeadingContainer = styled.div`
  display:flex;
  justify-content:center;
`;
const Heading = styled.h1`
width: fit-content;
  font-family: "Carter One", cursive;
  letter-spacing: 4px;
  padding-top: 70px;
  font-size: 5em;
  font-weight: 900;
  -webkit-text-stroke: 2px #ffff;
  color: rgba(0, 0, 0, 0.6);
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

const CoreTeamContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 30px;
`;