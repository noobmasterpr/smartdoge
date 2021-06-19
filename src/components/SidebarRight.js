import React from "react";
import styled from "styled-components";
import HamburgerMenu from "./Navbar/HamburgerMenu";

const Wrapper = styled.div`
  background: #313131;
  position: absolute;
  top: 80px;
  z-index: -10 !important;
  height: 100vh;
  right: 0;
  bottom: 150px;
  width: 80px;

  @media screen and (max-width: 800px) {
    display: none !important;
  }
`;

const Background = styled.div`
  background: #313131;
  position: fixed;
  top: 80px;
  height: 100vh;
  right: 0;
  bottom: 150px;
  width: 80px;
`;

const Mouse = styled.div`
  float: right;
  width: 20px;
  height: 30px;
  top: 15rem;
  left: -1.8rem;
  border-radius: 6px;
  padding: 0 6px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-sizing: border-box;
  position: relative;
  z-index: 999;
`;

const SidebarRight = () => {
  return (
    <>
      <HamburgerMenu />
      <Wrapper>
        <Background>
          <Mouse>
            <div className="scroller" />
          </Mouse>
        </Background>
      </Wrapper>
    </>
  );
};

export default SidebarRight;
