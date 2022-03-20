import React from "react";
import styled from "styled-components";
function MsgCard({name, designation, address, message, imgLink}) {
  return (
    <Container>
      <ImageContainer>
        <Image src={imgLink} />
      </ImageContainer>
      <InfoContainer>
        <Name>{name}</Name>
        <Designation>{designation}</Designation>
        <Message>
          <span>{address}</span>
          {message}
        </Message>
      </InfoContainer>
    </Container>
  );
}

export default MsgCard;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items:center;
  justify-content: center;
  background: rgba(30, 31, 35, 1);
  border-radius: 10px;
  padding: 40px;
  margin: 20px 0px;
  -webkit-box-shadow: 10px 10px 12px -8px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 12px -8px rgba(0, 0, 0, 0.75);
  box-shadow: 10px 10px 12px -8px rgba(0, 0, 0, 0.75);

  @media screen and (max-width: 1200px){
    flex-direction: column;
    margin-top: 0;
  }
  @media screen and (max-width: 750px) {
    margin-top: -60px;
  }
  @media screen and (max-width: 750px){
    padding: 40px 20px;
  }

`;
const ImageContainer = styled.div`
  width: 400px;
  height: 400px;
  margin-right: 40px;
  @media screen and (max-width: 1200px){
    width: 100%;
    margin-right: 0px;
  }
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
const InfoContainer = styled.div`
  flex: 1;
  color: #fff;
`;
const Name = styled.h2`
  margin-top: 20px;
  letter-spacing: 2px;

`;
const Designation = styled.h3`
  margin-top: 10px;
  letter-spacing: 2px;
  font-size: 1.2em;
`;
const Message = styled.p`
  margin-top: 20px;
  text-align: justify;
  line-height: 1.5em;
  letter-spacing: 1.2px;

  span {
    margin: 20px 0px 10px 0px;
    display: block;
  }
`;
