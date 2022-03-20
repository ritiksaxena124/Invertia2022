import React from "react";
import styled from "styled-components";
import { Zoom } from "react-awesome-reveal";

function EventCard({
  name,
  tagline,
  btn,
  setTitle,
  setTagline,
  modal,
  desc,
  setDesc,
  link,
  setLink,
  imgLink,
  setimgLink,
}) {
  const setValues = (name, tagline) => {
    setTitle(name);
    setTagline(tagline);
    modal(true);
    setDesc(desc);
    setLink(link);
    setimgLink(imgLink);
  };
  return (
    <>
      <Zoom>
        <Wrapper>
          <ImageContainer>
            <Image src={imgLink} />
          </ImageContainer>
          <Details>
            <Name>{name}</Name>
            <TagLine>{tagline}</TagLine>
          </Details>
          <BtnContainer>
            <EventsBtn onClick={() => setValues(name, tagline)}>
              {btn}
            </EventsBtn>
          </BtnContainer>
        </Wrapper>
      </Zoom>
    </>
  );
}

export default EventCard;

const Wrapper = styled.div`
  height: 530px;
  width: 350px;
  margin: 20px;
  border: 2px solid #fff;
  padding-bottom: 7px;
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
  height: 400px;
  border-radius: 15px 15px 0 0;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 15px;
`;
const Details = styled.div`
  color: #fff;
`;
const Name = styled.h2`
  text-align: center;
  font-size: 20px;
  letter-spacing: 2px;
  text-transform:uppercase;
`;
const TagLine = styled.p`
  font-size: 15px;
  text-align: center;
  margin: 10px 5px;
  letter-spacing: 1px;
`;

const BtnContainer = styled.div`
  padding: 7px 10px;
  margin: 7px 5px;
`;
const EventsBtn = styled.button`
  display: block;
  margin-left: auto;
  padding: 7px 15px;
  border: none;
  border-radius: 3px;
  background: #9e1f00;
  color: #fff;
  margin-right: 10px;
  cursor: pointer;
  transition: all 0.25s ease-in-out;
  text-decoration: none;
  text-align: center;

  &:hover {
    background: rgba(158, 31, 0, 0.8);
  }
`;
