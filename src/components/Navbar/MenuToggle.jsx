import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Button = styled.div`
  z-index: 99;
  cursor: pointer;
  display: flex;
`;

const Path = (props) => (
  <motion.path fill="transparent" strokeWidth="2" {...props} />
);

const transition = { duration: 0.3 };

export default function MenuToggle({ toggle, isOpen }) {
  return (
    <Button onClick={toggle}>
      <svg width="44" height="25" viewBox="0 0 23 24">
        <Path
          animate={isOpen ? "open" : "closed"}
          initial={false}
          variants={{
            closed: { d: "M 2 2.5 L 44 2.5", stroke: "hsl(0,0%,0%" },
            open: { d: "M 3 16.5 L 17 2.5", stroke: "hsl(0,0%,18%" },
          }}
          transition={transition}
        />

        <Path
          d="M 2 9.423 L 34 9.423"
          stroke="hsl(0, 0%, 0%"
          animate={isOpen ? "open" : "closed"}
          initial={false}
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={transition}
        />

        <Path
          animate={isOpen ? "open" : "closed"}
          initial={false}
          variants={{
            closed: { d: "M 2 16.346 L 44 16.346", stroke: "hsl(0,0%,0%" },
            open: { d: "M 3 2.5 L 17 16.346", stroke: "hsl(0,0%,18%" },
          }}
          transition={transition}
        />
      </svg>
    </Button>
  );
}
