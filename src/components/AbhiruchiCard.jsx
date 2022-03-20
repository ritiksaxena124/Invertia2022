import React from "react";
import styled from "styled-components";
import { Fade } from "react-awesome-reveal";

function AbhiruchiCard({ src, name, mail, designation }) {
  return (
    <>
      <Fade triggerOnce>
        <Wrapper>
          <ImageContainer>
            <Image src={src} />
          </ImageContainer>
          <Details>
            <Name>{name}</Name>
            <TagLine>{designation}</TagLine>
            <TagLine>{mail}</TagLine>
          </Details>
        </Wrapper>
      </Fade>
    </>
  );
}

export default AbhiruchiCard;

const Wrapper = styled.div`
  height: 500px;
  width: 350px;
  margin: 20px;
  border: 2px solid #fff;
  background: radial-gradient(#2f80ed, #0f2646);
  transition: 0.25s all ease-in-out;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  -webkit-box-shadow: 8px 9px 6px -6px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 8px 9px 6px -6px rgba(0, 0, 0, 0.75);
  box-shadow: 8px 9px 6px -6px rgba(0, 0, 0, 0.75);

  @media screen and (max-width: 900px) {
    margin: 20px;
  }
`;
const ImageContainer = styled.div`
  width: 100%;
  height: 350px;
  border-radius: 15px 15px 0 0;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 15px;
`;
const Details = styled.div`
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
`;
const Name = styled.h2`
  text-align: center;
  font-size: 20px;
  letter-spacing: 2px;
`;
const TagLine = styled.p`
  font-size: 15px;
  text-align: center;
  margin: 10px 5px;
  letter-spacing: 1px;
`;
