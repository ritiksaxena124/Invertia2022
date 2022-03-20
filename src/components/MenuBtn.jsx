import React, {useState} from "react";
import styled from "styled-components";
import Sidebar from "../components/Sidebar";

function MenuBtn() {
    const [openSidebar, setOpenSidebar] = useState(false);
  return (
    <>
      <MenuButn onClick={()=> openSidebar ? setOpenSidebar(false): setOpenSidebar(true)}>
        <Menu src={openSidebar ? "/img/close.png" : "/img/menu.png"} />
      </MenuButn>

      {
          <Sidebar action={openSidebar}/>
      }
    </>
  );
}

export default MenuBtn;

const MenuButn = styled.div`
  position: fixed;
  right: 0;
  margin: 20px 30px;
  background: #1D1D1D;
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
