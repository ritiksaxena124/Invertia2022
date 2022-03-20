import React from "react";
import styled from "styled-components";
import MenuBtn from "../components/MenuBtn";

function Rules() {
  return (
    <>
      <MenuBtn />
      <Wrapper>
        <Container>
          <Heading>GENERAL RULES &amp; REGULATIONS</Heading>
          <ListContainer>
            <RulesList>
              <ListItems>
                All participants must bring their Institute Identity cards.
              </ListItems>
              <ListItems>
                Bring your own Mask, Gloves, personal hand sanitizer.
              </ListItems>
              <ListItems>
                Students are expected to maintain discipline in the campus
                throughout the programme. Anyone found violating the rules and
                regulations of the University will be penalized as per our
                University rules.
              </ListItems>
              <ListItems>
                There will be three prizes for each event - "First, Second and
                Third".
              </ListItems>
              <ListItems>
                Each participant will be given a certificate of participation.
              </ListItems>
              <ListItems>
                The University has the right to reject an entry without
                assigning any reasons.
              </ListItems>
              <ListItems>
                Any event may be cancelled or changed without prior notice.
              </ListItems>
              <ListItems>
                Smoking, drinking alcohol, chewing pan masalas,gutkha etc. in the
                campus is strictly prohibited. Anyone found including in any of
                these activites will be deal strictly by forfeiting the security
                deposit of the team and the team may also be asked to leave the
                campus.
              </ListItems>
            </RulesList>
          </ListContainer>
        </Container>
      </Wrapper>
    </>
  );
}

export default Rules;
const Wrapper = styled.div`
  background: url("img/bg.jpg");
  min-height: 100vh;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  color: #fff;
  background: rgba(0, 28, 29, 0.9);
  padding: 20px 40px;
  border-radius: 10px;
  margin: 0px 150px;
  -webkit-box-shadow: 10px 10px 14px -5px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 14px -5px rgba(0, 0, 0, 0.75);
  box-shadow: 10px 10px 14px -5px rgba(0, 0, 0, 0.75);
  @media screen and (max-width: 1200px) {
    margin: 100px 100px;
  }
  @media screen and (max-width: 900px) {
    margin: 100px 50px;
  }
  @media screen and (max-width: 750px){
    margin-top: 100px;
    margin-bottom: 50px;
    margin: 100px 15px 50px 15px;
    padding: 20px 10px;
  }
`;

const Heading = styled.h1`
  text-align: center;
  font-size: 2.5em;
  letter-spacing: 3px;
  margin-bottom: 20px;

  @media screen and (max-width: 1200px) {
    font-size: 2em;
  }

  @media screen and (max-width: 900px) {
    font-size: 1.7em;
  }
`;

const ListContainer = styled.div``;
const RulesList = styled.ol`
  margin: 0 10px 20px 20px;
`;
const ListItems = styled.li`
  font-size: 1.2em;
  margin: 7px;
  letter-spacing: 1px;
  margin: 10px 7px;
  padding: 5px 10px;
  text-align:justify;
  line-height: 1.4em;

  @media screen and (max-width: 750px){
    margin: 6px 7px;
    font-size: 1em;
  }
`;
