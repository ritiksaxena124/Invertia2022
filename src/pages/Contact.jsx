import React from "react";
import MenuBtn from "../components/MenuBtn";
import styled from "styled-components";
function Contact() {
  return (
    <>
      <MenuBtn />
      <Wrapper>
        <ContactWrapper>
          <Heading>CONTACT US</Heading>
          <DetailCardContainer>
            <Card>
              <SubHeading>ADDRESS</SubHeading>
              <Info>
                Invertis University, Invertis Village, Delhi Lucknow Highway
                NH-24, Bareilly, Uttar Pradesh Pin - 243 123, India
              </Info>
            </Card>

            <Card>
              <SubHeading>PHONE NUMBER</SubHeading>
              <Info>
              +91 0581 2460442
              </Info>
            </Card>

            <Card>
              <SubHeading>EMAIL</SubHeading>
              <Info>
              info@invertis.org
              </Info>
            </Card>
          </DetailCardContainer>
        </ContactWrapper>
        <ContactWrapper>
          <Heading>FOR SPONSORSHIP DETAILS:</Heading>
          <DetailCardContainer>
            <Card>
              <SubHeading>CALL</SubHeading>
              <Info>Harman Khinda: +91 74548 44013</Info>
            </Card>

            <Card>
              <SubHeading>EMAIL</SubHeading>
              <Info>
              president.ric@invertis.org
              </Info>
            </Card>
          </DetailCardContainer>
        </ContactWrapper>
      </Wrapper>
    </>
  );
}

export default Contact;

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 30px 100px;
background: #FFFEF7;
  @media screen and (max-width: 900px) {
    padding: 30px 10px;
  }
`;
const ContactWrapper = styled.div`
  margin: 10px 5px 20px 5px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const Heading = styled.h1`
  width: fit-content;
  padding: 7px 5px;
  letter-spacing: 2px;
  text-align: center;
  @media screen and (max-width: 450px) {
    font-size: 1.2em;
  }
`;
const DetailCardContainer = styled.div`
  display: flex;
  padding: 7px 10px;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  @media screen and (max-width: 450px){
    margin: 0px 7px;
  }
`;
const Card = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
  width: 350px;
  height: 200px;
  padding: 20px;
  margin: 10px;
  text-align: center;
  border-radius: 7px;
  background: #ffff;
  box-shadow: 2px 10px 12px -9px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 2px 10px 12px -9px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 2px 10px 12px -9px rgba(0, 0, 0, 0.75);
  @media screen and (max-width: 750px) {
    margin: 10px 6px;
  }
`;
const SubHeading = styled.h2`
  text-align: center;
  @media screen and (max-width: 450px) {
    font-size: 1em;
  }
`;
const Info = styled.p`
  margin-top: 10px;
line-height: 1.7em;
  @media screen and (max-width: 450px) {
    font-size: 0.8em;
    line-height: 1.4em;
  }
`;
