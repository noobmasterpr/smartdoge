import React from "react";
import styled from "styled-components";
import {
  FaFacebookF,
  FaMediumM,
  FaTwitter,
  FaTelegramPlane,
} from "react-icons/fa";
import { HiPlusCircle } from "react-icons/hi";

const Wrapper = styled.div`
  background: #313131;
  position: fixed;
  top: 80px;
  left: 0;
  bottom: 150px;
  z-index: -1;
  width: 80px;
  -webkit-transform: translate3d(0, 0, 0);

  @media screen and (max-width: 800px) {
    display: none !important;
  }

  :before {
    content: "";
    position: absolute;
    left: 50%;
    width: 1px;
    height: 70px;
    top: 0;
    background: rgba(255, 255, 255, 0.2);
  }

  :after {
    content: "";
    position: absolute;
    left: 50%;
    width: 1px;
    height: 70px;
    bottom: 0;
    background: rgba(255, 255, 255, 0.2);
  }
`;

const ShareBtn = styled.div`
  position: fixed;
  z-index: -1;
  bottom: 0;
  left: 0;
  width: 80px;
  height: 150px;
  cursor: pointer;
  background: linear-gradient(to right, #ff4137, #fdc800);

  span {
    color: #fff;
    position: relative;
    top: 106px;
    left: 18px;
    float: left;
    font-weight: 400;
    letter-spacing: 2px;
    text-transform: uppercase;
    font-size: 10px;
    z-index: 2;
  }
  svg {
    position: absolute;
    transition: all 0.2s ease-in-out;
    left: 7px;
    width: 30px;
    padding-left: 2px;
    top: -86px;
    color: #fff;
    line-height: 28px;
    cursor: pointer;
  }
  @media screen and (max-width: 800px) {
    display: none !important;
  }
`;

const SpanPoint = styled.span`
  position: absolute;
  top: 70px;
  left: 50%;
  width: 6px;
  height: 6px;
  margin-left: -3px;
  border-radius: 50%;
  background: linear-gradient(to right, #ff4137, #fdc800);
`;

const SpanPointTwo = styled.span`
  position: absolute;
  bottom: 70px;
  left: 50%;
  width: 6px;
  height: 6px;
  margin-left: -3px;
  border-radius: 50%;
  background: linear-gradient(to right, #ff4137, #fdc800);
`;

const SocialShare = styled.div`
  position: absolute;
  bottom: 160px;
  left: 50%;
  margin-left: -22px;
  width: 40px;
`;

const SocialList = styled.ul`
  border: none;
  outline: 0;
  font-weight: inherit;
  font-style: inherit;
  font-size: 100%;
  font-family: inherit;
  vertical-align: baseline;
  text-decoration: none;
  margin: 0;
  padding: 0;
`;

const SocialLink = styled.li`
  border-top: 1px solid rgba(255, 255, 255, 0.08) !important;
  width: 40px;
  height: 40px;
  line-height: 40px;
  box-sizing: border-box;
  display: inline-table;
  background: #313131;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-top: none;
  position: relative;

  :before {
  }
`;

const Link = styled.a`
  display: block;
  text-align: center;
  color: #767676;
  transition: all 200ms ease-out;
`;

const Start = styled.aside``;

const SidebarLeft = () => {
  return (
    <Start>
      <Wrapper>
        <SpanPoint></SpanPoint>
        <SocialShare>
          <SocialList>
            <SocialLink>
              <Link href="/google">
                <FaFacebookF />
              </Link>
            </SocialLink>
            <SocialLink>
              <Link href="/google">
                <FaMediumM />
              </Link>
            </SocialLink>
            <SocialLink>
              <Link href="/google">
                <FaTwitter />
              </Link>
            </SocialLink>
            <SocialLink>
              <Link href="/google">
                <FaTelegramPlane />
              </Link>
            </SocialLink>
          </SocialList>
        </SocialShare>
        <SpanPointTwo></SpanPointTwo>
      </Wrapper>
      <ShareBtn>
        <span>
          Share
          <HiPlusCircle size={25} color="#fff" />
        </span>
      </ShareBtn>
    </Start>
  );
};

export default SidebarLeft;
