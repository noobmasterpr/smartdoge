import React from "react";
import styled from "styled-components";
import logo from "../images/smartdoge1.png";
import "./styles.scss";
import { Menu } from "./Menu";

const Wrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 70%;
  z-index: 20;
  height: 80px;
  background: #313131;
  -webkit-transform: translate3d(0, 0, 0);

  :before {
    content: "";
    position: absolute;
    width: 125px;
    right: 0;
    height: 100%;
    top: 0;
    background: rgba(255, 255, 255, 0.05);
  }

  .navLinks {
    color: #fff;
    font-size: 12px;
    letter-spacing: 0.1rem;
    text-decoration: none;
    text-transform: uppercase;
  }
`;

const RightBar = styled.div`
  position: fixed;
  right: 0;
  height: 80px;
  width: 30%;
  top: 0;
  z-index: 20;
  background: linear-gradient(to right, #ff4137, #fdc800);

  .userBox {
    position: absolute;
    top: 25px;
    right: 80px;
    text-align: right;
    z-index: 10;
    text-transform: uppercase;
    font-weight: 400;
    font-size: 10px;
    color: #fff;
    letter-spacing: 4px;

    @media screen and (max-width: 800px) {
      .userBox {
        right: 30px !important;
      }
    }

    :before {
      content: "";
      position: absolute;
      left: -80px;
      width: 50px;
      height: 1px;
      background: rgba(255, 255, 255, 0.5);
      top: 50%;
    }
  }

  .user {
    padding: 10px 20px;
    background: rgba(0, 0, 0, 0.1);
    position: relative;
    display: block;
    color: #fff;
  }
`;

const FullWidth = styled.div`
  :after {
    content: "";
    position: absolute;
    width: 1px;
    height: 300px;
    right: 40px;
    background: rgba(255, 255, 255, 0.2);
    z-index: 2;
  }
  @media screen and (max-width: 800px) {
    :after {
      display: none;
    }
  }
`;

const Navbar = () => {
  return (
    <FullWidth>
      <Wrapper>
        <ul className="linksCenter">
          <li>
            <img
              src={logo}
              alt="logo"
              height="50"
              width="60"
              className="logo"
            />
          </li>
          <Menu />
        </ul>
      </Wrapper>
      <RightBar>
        <div className="userBox">
          <span className="user">Balance: 23.039</span>
        </div>
      </RightBar>
    </FullWidth>
  );
};

export default Navbar;
