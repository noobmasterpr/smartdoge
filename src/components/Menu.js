import React from "react";
import TransitionLink from "gatsby-plugin-transition-link";
import "./styles.css";
import "./styles.scss";

export const Menu = () => {
  return (
    <>
      <div className="flex mb-20 justify-between">
        <div className="mr-8 text-xl">
          <TransitionLink
            to="/"
            exit={{
              length: 1,
            }}
            entry={{ length: 1 }}
            className="linksMain navLinks"
          >
            Home
          </TransitionLink>
        </div>
        <div className="mr-8 text-md uppercase">
          <TransitionLink
            to="/token"
            exit={{
              length: 1,
            }}
            entry={{}}
            className="linksMain navLinks"
            activeClassName="border-b-2 border-gray-600"
          >
            Token
          </TransitionLink>
        </div>
        <div className="mr-8 text-md uppercase">
          <TransitionLink
            to="/contribute"
            exit={{
              length: 1,
            }}
            entry={{}}
            className="linksMain navLinks"
            activeClassName="border-b-2 border-gray-600"
          >
            Contribute
          </TransitionLink>
        </div>
        <div className="mr-8 text-md uppercase"></div>
        <div className="mr-8 text-md uppercase">
          <TransitionLink
            to="/contact"
            exit={{
              length: 1,
            }}
            entry={{}}
            className="linksMain navLinks"
            activeClassName="border-b-2 border-gray-600"
          >
            Contact
          </TransitionLink>
        </div>
      </div>
    </>
  );
};
