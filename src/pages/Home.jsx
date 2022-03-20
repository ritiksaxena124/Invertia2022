import React, { useState } from "react";
import styled from "styled-components";
import Sidebar from "../components/Sidebar";
import "../css/style.css";
import Video from "../video/bg2.mp4";
function Home() {
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <>
      <MenuBtn
        onClick={() =>
          openSidebar ? setOpenSidebar(false) : setOpenSidebar(true)
        }
      >
        <Menu src="/img/menu.png" />
      </MenuBtn>
      <Wrapper>
        <video
          src={Video}
          autoPlay
          loop
          muted
          style={{
            position: "absolute",
            width: "100%",
            left: "50%",
            top: "50%",
            height: "100%",
            objectFit: "cover",
            transform: "translate(-50%, -50%)",
            zIndex: -1,
          }}
          type="video/mp4"
        ></video>
        <Container>
          <LogoContainer>
            <Logo src="/img/invertialogo.png" />
          </LogoContainer>
        </Container>
      </Wrapper>

      {<Sidebar action={openSidebar} />}
    </>
  );
}

export default Home;

const MenuBtn = styled.div`
  position: absolute;
  right: 0;
  margin: 20px 30px;
  background: #000000;
  padding: 5px;
  width: 45px;
  height: 45px;
  border-radius: 5px;
  cursor: pointer;
  z-index: 100;
`;
const Menu = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: invert(100%);
`;

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  position: relative;
`;

// CONTAINER STYLING
const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const LogoContainer = styled.div`
  width: 800px;
  position: relative;
  z-index: 10;
  background: rgba(255, 255, 255, 0.7);
  padding: 30px 20px;
  border-radius: 7px;
  @media screen and (max-width: 900px) {
    width: 600px;
  }
  @media screen and (max-width: 450px) {
    width: 350px;
    margin-top: -100px;
  }
`;
const Logo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: drop-shadow(0.5rem 0.5rem 0.55rem rgba(224, 224, 224, 0.61));
`;
