import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state";
import { Zoom } from "react-awesome-reveal";
function ClubCard({ name, tagline, btn, logo, bg, link }) {
  const dispatch = useDispatch();

  const { setClubName } = bindActionCreators(actionCreators, dispatch);
  return (
    <>
      <Zoom>
        <Link to={link}>
          <Wrapper bg={bg}>
            <ImageContainer>
              <Image src={logo} />
            </ImageContainer>
            <Details>
              <Name>{name}</Name>
              <TagLine>{tagline}</TagLine>
            </Details>
            <BtnContainer>
              <EventsBtn onClick={() => setClubName(name)}>{btn}</EventsBtn>
            </BtnContainer>
          </Wrapper>
        </Link>
      </Zoom>
    </>
  );
}

export default ClubCard;

const Wrapper = styled.div`
  height: 400px;
  width: 300px;
  background: ${(props) => props.bg};
  transition: 0.25s all ease-in-out;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 25px;
  -webkit-box-shadow: 8px 9px 6px -6px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 8px 9px 6px -6px rgba(0, 0, 0, 0.75);
  box-shadow: 8px 9px 6px -6px rgba(0, 0, 0, 0.75);
  position: relative;
  transition: all 0.25s ease-in-out;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
  }
`;
const ImageContainer = styled.div`
  width: 100%;
  height: 220px;
  border-radius: 15px 15px 0 0;
  padding: 10px;
  filter: drop-shadow(2px 5px 5px black);
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 15px 15px 0 0;
`;
const Details = styled.div`
  color: #fff;
`;
const Name = styled.h2`
  text-align: center;
  font-size: 30px;
  letter-spacing: 2px;
`;
const TagLine = styled.p`
  font-size: 20px;
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
  font-size: 0.8em;
  border: none;
  border-radius: 3px;
  background: #9e1f00;
  color: #fff;
  margin-right: 10px;
  cursor: pointer;
  transition: all 0.25s ease-in-out;
  text-align: center;

  &:hover {
    background: rgba(158, 31, 0, 0.8);
  }
`;
