import React from "react";
import styled from "styled-components";
import pageLinks from "../data/pagelink";

const Sidebar = ({ action }) => {
  return (
    <>
      <Container action={action}>
        <LeftSide>
          <LogoContainer>
            <Logo src="./img/favicon.png" />
          </LogoContainer>
          <MenuItemsContainer>
            <ItemsList>
              {pageLinks.map((items) => {
                return (
                  <>
                    <Items data-text={items.name}>
                      <a href={items.link}>
                        <Item>{items.name}</Item>
                      </a>
                    </Items>
                  </>
                );
              })}
            </ItemsList>
          </MenuItemsContainer>
        </LeftSide>
      </Container>
    </>
  );
};

export default Sidebar;

const Container = styled.div`
  width: 250px;
  background: #111111;
  height: 100%;
  z-index: 100;
  display: flex;
  justify-content: center;
  transition: all 0.5s ease-in-out;
  position: fixed;
  top: 0;
  transform: ${(props) =>
    props.action ? "translateX(0px)" : "translateX(-400px)"};
`;

const LeftSide = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding: 10px 10px;
`;

const LogoContainer = styled.div`
  width: 70px;
  height: 70px;
  margin: 20px;
  @media screen and (max-width: 450px) {
    width: 50px;
    height: 50px;
  }
`;
const Logo = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 50%;
  object-fit: cover;
`;
const MenuItemsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content:center;
`;
const ItemsList = styled.ul`
`;
const Items = styled.li`
  padding: 10px 7px;
  list-style: none;
  transition: 0.5s;
  margin-top: 7px;
  text-align: center;
  border-radius: 5px;
  background: #1d1d1d;
  overflow: hidden;
  cursor: pointer;

  letter-spacing: 2px;

  &:hover {
    margin: 10px 0;
    transform: scale(1.05);
    -webkit-box-shadow: 2px 2px 9px 4px rgba(0, 0, 0, 0.68);
    -moz-box-shadow: 2px 2px 9px 4px rgba(0, 0, 0, 0.68);
    box-shadow: 2px 2px 9px 4px rgba(0, 0, 0, 0.68);
  }

  &:before {
    content: attr(data-text);
    position: absolute;
    left: -10px;
    width: 100%;
    height: 100%;
    padding: 0 10px;
    color: #ffff;

    transform: translateX(0);
    transition: 0.5s;
    pointer-events: none;
  }

  &:hover::before {
    transform: translateX(100%);
    opacity: 0;
  }

  &:after {
    content: attr(data-text);
    position: absolute;
    left: -10px;
    width: 100%;
    height: 100%;
    padding: 0 10px;
    transform: translateX(-100%);
    transition: 0.5s;
    pointer-events: none;
    opacity: 0;
    color: #03f4f2;
  }

  &:hover::after {
    transform: translateX(0);
    opacity: 1;
  }
`;
const Item = styled.button`
  position: relative;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 900;
  letter-spacing: 4px;
  font-size: 1em;
  line-height: 1.2rem;
  background:none;
  border: none;
  cursor: pointer;
  color: transparent;
`;
