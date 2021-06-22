import React, { useEffect, useRef } from "react";
import Layout from "../components/Layout";
import styled from "styled-components";
import ContributeBox from "../components/Contribute";
import Manual from "../components/Manual";
import Tabs from "../components/Tabs/tab";
import TabPage from "../components/Tabs/tab-page";
import gsap from "gsap";

const Wrapper = styled.div`
  position: fixed;
  top: 80px;
  left: 80px;
  right: 80px;
  bottom: 0;
  z-index: 3;
  padding: 6px;
  max-width: 1140px;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  width: 100%;
  top: 10rem;

  @media screen and (max-width: 800px) {
    left: 0 !important;
    right: 0 !important;
    width: auto !important;
    top: 6rem !important;

    ul.tab-header {
      grid-template-columns: 1fr 1fr;
      justify-items: center;
    }
    .tabsSingle {
      width: 100% !important;
      padding-top: 15px !important;
      padding-bottom: 15px !important;
    }
  }

  h1 {
    font-size: 2.25rem;
    color: #fff;
    margin-bottom: 3rem;
    font-family: inherit;
    font-weight: 700;
    line-height: 1.5;
    letter-spacing: 0.05rem;
    width: 80%;
  }
`;

const Row = styled.div`
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: 1rem;
  margin-left: 1rem;
`;

const Contribute = ({ transitionStatus }) => {
  let divRefs = useRef([]);
  const textfly = (divRefs, direction) => {
    let even = [];
    let odd = [];
    divRefs.forEach((idx, i) => {
      if (i % 2 === 0) {
        even.push(idx);
      } else {
        odd.push(idx);
      }
    });
    if (direction === 1) {
      gsap.from(even, {
        duration: 1.5,
        x: -200 * direction,
        opacity: 0,
        delay: 0.55,
        ease: "power4.inOut",
        stagger: {
          amount: 0.2,
        },
      });

      gsap.from(odd, {
        duration: 0.5,
        x: 200 * direction,
        opacity: 0,
        delay: 0.05,
        ease: "power4.inOut",
        stagger: {
          amount: 0.2,
        },
      });
    }
    if (direction === -1) {
      gsap.to(even, {
        duration: 0.5,
        x: -200 * direction,
        opacity: 0,
        delay: 0.05,
        ease: "power4.inOut",
        stagger: {
          amount: 0.2,
        },
      });

      gsap.to(odd, {
        duration: 0.5,
        x: 200 * direction,
        opacity: 0,
        delay: 0.05,
        ease: "power4.inOut",
        stagger: {
          amount: 0.2,
        },
      });
    }
  };

  useEffect(() => {
    textfly(divRefs.current, 1);
  }, []);
  useEffect(() => {
    if (transitionStatus === "exiting") {
      textfly(divRefs.current, -1);
    }
  }, [transitionStatus]);

  return (
    <Layout>
      <Wrapper>
        <div ref={(el) => (divRefs.current[0] = el)}>
          <Row>
            <Tabs>
              <TabPage name="Metamask" key="1" className="btn1">
                <ContributeBox />
              </TabPage>
              <TabPage name="Manual" key="2">
                <Manual />
              </TabPage>
            </Tabs>
          </Row>
        </div>
      </Wrapper>
    </Layout>
  );
};

export default Contribute;
