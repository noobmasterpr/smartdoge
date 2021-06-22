import React, { useEffect, useRef } from "react";
import Layout from "../components/Layout";
import gsap from "gsap";
import styled from "styled-components";
import logo from "../images/smartdoge2.png";

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
  top 8rem;

  @media screen and (max-width: 800px) {
      left: 0 !important;
      right: 0 !important;
      top: 10 !important;
      width: auto !important;
      img {
        display: none !important;
      }

      .otherHalf {
        display: none !important;
      }

      .half {
        flex: unset !important;
        max-width: unset !important;
      }

      h1 {
        font-size: 1rem !important;
        width: 100% !important;
        margin-top: 0 !important;
        margin-bottom: 0 !important;      
      }

      p.tokenText {
        margin-bottom: 0 !important;
    }

      .roadmap {
        padding-left: 1.5rem !important;
      }

      .airdrop {
        :after {
          left: 3rem !important;
        }
      }
    
      .presale {
        padding-left: 1rem !important;
        :after {
          right: 8.5rem !important;
        }
      }
  }

  .half {
    flex: 0 0 66.66667%;
    max-width: 66.66667%;
  }

  .otherHalf {
    flex: 0 0 33.33333%;
    max-width: 33.33333%;
  }

  .row {
    display: flex;
    flex-wrap: wrap;
    margin-right: 1rem;
    margin-left: 1rem;
  }

  .progress {
    flex: 0 0 75%;
    max-width: 75%;
    margin-bottom: 5rem;
  }

  .imageRight {
    position: absolute;
    left: -5rem;
    top: 2rem;
}

  h1 {
    font-size: 2.25rem;
    color: #fff;
    padding-bottom: 1.5rem;
    font-family: inherit;
    font-weight: 700;
    line-height: 1.5;
    letter-spacing: 0.1rem;
    width: 80%;
  }

  p {
    text-transform: uppercase;
}

  .bgProgess {
    display: flex;
    font-size: .75rem;
    background-color: #E9ECEF;
    border: 4px solid #FFFFFF;
    border-radius: 2rem;
    height: 1.375rem;
    overflow: initial;
  }
  .progess {
    width: 50%;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center;
    color: #FFF;
    text-align: center;
    background-color: #007BFF;
    transition: width .6s ease;
    height: 1.36rem;
    border-radius: 2.5rem;
    background: linear-gradient(to right,#FF4137,#FDC800);
    box-shadow: 2px 0 7px 0 rgba(0,0,0,0.35);
  }

  .btn {
    transition: 0.5s;
    background: linear-gradient(to right,#FF4137,#FDC800);
    background-size: 200% auto;
    border: 0;
    color: #fff;
    padding: 1rem 3rem;
    font-size: 1.125rem;
    line-height: 1;
    border-radius: 2.5rem;
    text-decoration: unset;
  }



  .progressBtn{
    position: absolute;
    bottom: -2rem;
    display: flex;
    color: #FFFFFF;
    align-items: stretch;
    justify-content: space-between;
    width: 100%;
    padding: 0 1rem;
  }

 

  .textP {
    color: #fff;
    font-size: 14;
    text-transform: unset;
    letter-spacing: 0.1rem;
    padding-bottom: 4rem;
  }

  .tokenText {
    color: white;
    padding-bottom: 2.5rem;
    letter-spacing: 0.1rem;
    text-transform: unset;
    line-height: 1.5rem;
  }


  .roadmap {
    display: flex;
    padding-bottom: 2rem;
    padding-left: 5rem;
  }
  .airdrop {
    color: white;
    list-style: none;
    letter-spacing: 0.1rem;
    :after {
      content: "";
      position: absolute;
      width: 2px;
      height: 20px;
      top: 1.3rem;
      left: 6.6rem;
      background: #fff;
    }
  }

  .presale {
    color: white;
    list-style: none;
    letter-spacing: 0.1rem;
    padding-left: 5rem;
    :after {
      content: "";
      position: absolute;
      width: 2px;
      height: 20px;
      top: 1.3rem;
      background: #fff;
      right: 19rem;
    }
  }
`;

const Token = ({ transitionStatus }) => {
  let textRefs = useRef([]);
  const textfly = (textRefs, direction) => {
    let even = [];
    let odd = [];
    textRefs.forEach((idx, i) => {
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
        delay: 0.05,
        ease: "power4.inOut",
        stagger: {
          amount: 0.2,
        },
      });

      gsap.from(odd, {
        duration: 1.5,
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
        duration: 1.5,
        x: -200 * direction,
        opacity: 0,
        delay: 0.05,
        ease: "power4.inOut",
        stagger: {
          amount: 0.2,
        },
      });

      gsap.to(odd, {
        duration: 1.5,
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
    textfly(textRefs.current, 1);
  }, []);
  useEffect(() => {
    if (transitionStatus === "exiting") {
      textfly(textRefs.current, -1);
    }
  }, [transitionStatus]);

  return (
    <Layout>
      <Wrapper>
        <div className="row">
          <div className="half">
            <div className="w-full h-full flex justify-center items-center realizzazioni">
              <div id="categories" className="w-full md:w-1/2">
                <h1
                  ref={(el) => (textRefs.current[0] = el)}
                  className="list-none text-6xl md:text-6xl lg:text-8xl font-bold relative overflow-hidden uppercase transform phrase"
                >
                  SMART DOGE – THE DOGE WITH A PURPOSE
                </h1>

                <p
                  ref={(el) => (textRefs.current[1] = el)}
                  className="tokenText"
                >
                  Unlike the $DOGE, We have a purpose to be on blockchain that’s
                  how $SD SMART DOGE stands out. SMART DOGE FINANCE is a
                  community-driven, no-loss prize game and no-loss pool
                  launchpad built on Binance Smart Chain.
                </p>

                <div
                  className="progress"
                  ref={(el) => (textRefs.current[2] = el)}
                >
                  <div className="roadmap">
                    <li className="airdrop">Airdrop</li>
                    <li className="presale">Pre-Sale</li>
                  </div>

                  <div className="bgProgess">
                    <div className="progess"></div>
                    <div className="progressBtn"></div>
                  </div>
                </div>

                <div ref={(el) => (textRefs.current[3] = el)}>
                  <a href="https://t.me/smartdoge_official" className="btn">
                    Join now
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="otherHalf" ref={(el) => (textRefs.current[4] = el)}>
            <div className="imageRight">
              <img
                src={logo}
                alt="logo"
                height="550"
                width="560"
                className="logo"
              />
            </div>
          </div>
        </div>
      </Wrapper>
    </Layout>
  );
};

export default Token;
