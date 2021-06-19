import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const Wrapper = styled.div`
  ul {
    position: absolute;
    top: 8rem;
    list-style: none;
  }
  li {
    padding-top: 2rem;
  }

  a.NLink {
    color: white;
    font-size: 14px;
    letter-spacing: 0.1rem;
    text-decoration: unset;
    text-transform: uppercase;
  }
`;

const Links = ({ styleClass }) => {
  return (
    <Wrapper>
      <ul className={styleClass}>
        <li>
          <Link to="/" className="NLink">
            Home
          </Link>
        </li>
        <li>
          <Link to="/token" className="NLink">
            Token
          </Link>
        </li>
        <li>
          <Link to="/contribute" className="NLink">
            Contribute
          </Link>
        </li>
        <li>
          <Link to="/contact" className="NLink">
            Contact
          </Link>
        </li>
      </ul>
    </Wrapper>
  );
};

export default Links;
