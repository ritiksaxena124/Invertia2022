import React, {useEffect} from "react";
import styled from "styled-components";
import MenuBtn from "../components/MenuBtn";
import MsgCard from "../components/MsgCard";
import msg from "../data/messages";

function Message() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <MenuBtn />
      <Container bg={ "img/bg.jpg"}>
        <HeadingContainer>
          <Heading>MESSAGES</Heading>
        </HeadingContainer>
        <MsgContainer>
          {
            msg.map(item => {
              return(
                <>
                <MsgCard name={item.name} designation={item.designation} address={item.address} message={item.message} imgLink={item.imgLink}/>
                </>
              )
            })
          }
        </MsgContainer>
      </Container>
    </>
  );
}

export default Message;
const HeadingContainer = styled.div``;
const Heading = styled.h1`
  font-family: "Carter One", cursive;
  letter-spacing: 4px;
  margin-top: 70px;
  font-size: 5em;
  font-weight: 900;
  -webkit-text-stroke: 2px #ffff;
  color: rgba(0, 0, 0, 0.6);
  position:relative;
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
    font-family: "Carter One", cursive;
  }

`;

const Container = styled.div`
  display: grid;
  place-items: center;
  background: url(${props => props.bg});
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
`;


const MsgContainer = styled.div`
  margin: 20px 100px;
  @media screen and (max-width: 900px){
    margin: 70px 50px;
  }
  @media screen and (max-width: 750px){
    margin: 100px 20px;
  }
`