import React, {useEffect} from "react";
import MenuBtn from "../components/MenuBtn";
import styled from "styled-components";
import DevelopersCard from "../components/DevelopersCard";

function Developers() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <>
      <MenuBtn />
      <Wrapper>
        <MentorContainer>
          <Heading>Mentor</Heading>
          <DevelopersCard
            name="Dr. Akash Sanghi"
            src="img/AkashSir.jpg"
            designation="CEO: I-TECH, THE TECHNICAL CLUB"
            mail="akash.s@invertis.org"
          />
        </MentorContainer>
        <DevelopersContainer>
          <DevHeading>Developers</DevHeading>
          <Container>
            <DevelopersCard
              name="Aviyansh Kumar"
              src="img/CEOandPresidents/Aviyansh.jpg"
              designation="President"
              mail="president.itech@invertis.org"
            />
            <DevelopersCard
              name="Ritik Saxena"
              src="img/Ritik.png"
              designation="Vice President"
              mail="vicepresident.itech@invertis.org"
            />
          </Container>

          <Container>
            <DevelopersCard
              name="Flavia Ali"
              src="img/Flavia.png"
              designation="Secretary"
              mail="secretary.itech@invertis.org"
            /><DevelopersCard
            name="Antara Raman Sahay"
            src="img/Antara.png"
            designation="Joint Secretary"
            mail="jointsecretary.itech@invertis.org"
          /><DevelopersCard
          name="Aditya Kapoor"
          src="img/Aditya.png"
          designation="Treasurer"
          mail="treasurer.itech@invertis.org"
        />
          </Container>
        </DevelopersContainer>
      </Wrapper>
    </>
  );
}

export default Developers;

const Wrapper = styled.div`
  min-height: 100vh;
  padding: 20px 10px 50px 10px;
  color: #fff;
  // -webkit-animation: color-change-2x 2s linear infinite alternate both;
  // animation: color-change-2x 2s linear infinite alternate both;
  // @-webkit-keyframes color-change-2x {
  //   0% {
  //     background: #19dcea;
  //   }
  //   100% {
  //     background: #b22cff;
  //   }
  // }
  // @keyframes color-change-2x {
  //   0% {
  //     background: #19dcea;
  //   }
  //   100% {
  //     background: #b22cff;
  //   }
  // }
  background: url("/img/bg.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
`;
const Heading = styled.h1`
  text-align: center;
  font-size: 3em;
  letter-spacing: 3px;
`;

const MentorContainer = styled.div`
display: flex;
justify-content:center;
flex-direction: column;
align-items:center;
`;
const DevelopersContainer = styled.div`
  margin-top: 70px;
`;
const DevHeading = styled.h2`
  text-align: center;
  font-size: 2em;
  letter-spacing: 3px;
`;

const Container = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;