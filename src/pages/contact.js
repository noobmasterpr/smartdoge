import React, { useEffect, useRef } from "react";
import Layout from "../components/Layout";
import gsap from "gsap";
import styled from "styled-components";
import logo from "../images/smartdoge.webp";

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
    margin-bottom: 3rem;
  }

  .imageRight {
    position: absolute;
    left: -7rem;
    top: 3.5rem;
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

  .bgProgess {
    display: flex;
    font-size: .75rem;
    background-color: #E9ECEF;
    border: 4px solid #FFFFFF;
    border-radius: .2rem;
    height: 1.375rem;
    overflow: initial;
    width: 400px;
    margin-bottom: 1rem;
  }

  color: #fff;
    font-size: 14px;

  .bgProgesstwo {
    display: flex;
    font-size: .75rem;
    background-color: #E9ECEF;
    border: 4px solid #FFFFFF;
    border-radius: .2rem;
    overflow: initial;
    width: 400px;
    margin-top: 2rem;
  }
  
  .progess {
    width: 82%;
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

  .payment {
    padding-top: 2rem;
    color: #fff;
    display: flex;
    align-items: center;
    letter-spacing: 0.1rem;
    font-size: 14px;

    svg {
      padding-right: 5px;
    }
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

  .progressB {
    display: block;
    -webkit-box-flex: 0;
    -webkit-flex: 0 1 auto;
    -moz-box-flex: 0;
    -ms-flex: 0 1 auto;
    flex: 0 1 auto;
    font-size: 14px;
  }

  .det {
      font-size: 14px;
      letter-spacing: 0.1rem;
  }

  input.bgProgess {
    margin-top: 1rem;
}

.bgProgesstwo {
    font-size: 14px;
    letter-spacing: 0.1rem;
}
@media screen and (max-width: 800px) {
  top: 100px !important;

  left: 0px !important;
  .otherHalf {
    display: none !important;
}

h1 {
  width: 100% !important;
  font-size: 1rem !important;
}
.bgProgess {
  width: 100% !important;
}
.bgProgesstwo {
  width: 100% !important;
}
.progress {
  max-width: 100% !important;
  flex: 0 0 100% !important;
  max-width: 100% !important;
}
.half {
  max-width: 100% !important;
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
        <div className="row" ref={(el) => (textRefs.current[0] = el)}>
          <div className="half">
            <div className="w-full h-full flex justify-center items-center realizzazioni">
              <div id="categories" className="w-full md:w-1/2">
                <h1 className="list-none text-6xl md:text-6xl lg:text-8xl font-bold relative overflow-hidden uppercase transform phrase">
                  Contact us
                </h1>

                <div className="progress">
                  <form>
                    <label className="det" for="fname" htmlFor="checkbox-1">
                      First name:
                    </label>
                    <input className="bgProgess"></input>
                    <label className="det" for="lname" htmlFor="checkbox-2">
                      Last name:
                    </label>
                    <input className="bgProgess"></input>
                    <textarea
                      id="w3review"
                      className="bgProgesstwo"
                      name="w3review"
                      rows="4"
                      cols="50"
                    >
                      Type here your message
                    </textarea>
                  </form>
                </div>

                <div>
                  <a href="/" className="btn">
                    Submit
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="otherHalf" ref={(el) => (textRefs.current[2] = el)}>
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
