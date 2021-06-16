import React, { useState } from "react";
import styled from "styled-components";
import MenuToggle from "./MenuToggle";
import { motion } from "framer-motion";
import LinksTwo from "../../constants/linksTwo";

const HamburgerMenuContainer = styled.div`
  display: flex;
  position: fixed;
  bottom: 0;
  right: 0;
  width: 80px;
  height: 75px;
  z-index: 10;
  background: linear-gradient(to right, #ff4137, #fdc800);
  svg {
    margin: -10px 0 0 10px;
    margin-top: 28px;
  }
  svg path {
    stroke: #fff;
  }
  h1 {
    position: absolute;
    top: 7rem;
    left: 2.3rem;
    font-size: 20px;
    text-transform: uppercase;
    color: #ff4f35;
  }
`;

const HamburgerIcon = styled.div`
  color: $(({reverseColor}) => reserveColor ? "#2b3942": "#fff");
  cursor: pointer;
  z-index: 99;
  transition: all 250ms ease-in-out;
`;

const MenuContainer = styled(motion.div)`
  min-width: 300px;
  width: 30.8%;
  max-width: 45%;
  height: 90%;
  background: #313131;
  z-index: 90;
  position: fixed;
  top: 0;
  right: 0;
  transform: translateX(4em);
  user-select: none;
  padding: lem 2.5em;
`;

const menuVariants = {
  open: {
    transform: "translateX(3%)",
  },
  closed: {
    transform: "translateX(103%)",
  },
};

const menuTransition = {
  type: "spring",
  duration: 1,
  stiffness: 33,
  delay: 0.1,
};

export default function HamburgerMenu(props) {
  const [isOpen, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  return (
    <HamburgerMenuContainer>
      <MenuToggle toggle={toggleMenu} isOpen={isOpen} />
      <MenuContainer
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={menuVariants}
        transition={menuTransition}
      >
        <h1>Smartdoge Finance</h1>
        <LinksTwo />
      </MenuContainer>
    </HamburgerMenuContainer>
  );
}
