import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding-bottom: 0px;
  width: -webkit-fill-available;
  .contributeContainer {
    margin: 0 auto;
    background: linear-gradient(to right, #ff4137, #fdc800);
    margin-bottom: 80px;
    margin-top: 20px;
    padding: 20px;
    @media (max-width: 500px) {
      width: 300px !important;
    }
  }

  input.inp {
    border-radius: 0;
    border: none;
    border-bottom: 1px solid #eeecf4;
    color: #7d7d7d;
    font-size: 0.875rem;
    padding: 1rem 0.5rem;
    background: none;
    margin-left: 0.3rem;
    margin-right: 1.2rem;
  }

  .buyCoins {
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .amountToBuy {
    font-weight: bold;
    color: black;
    opacity: 0.87;
    font-size: 20px;
    margin-right: 15px;
  }
  .etherDC {
    margin-left: 10px;
    color: black;
    opacity: 0.77;
  }
  .successfully {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    font-size: 15px;
    width: 500px;
    margin: 0 auto;
    background-color: #43a047;
    margin-top: 10px;
    color: white;
    padding: 20px;
  }
  .buttonBuy {
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 25px;
    margin-bottom: 20px;
  }
  .errorMessage {
    width: 500px;
    margin: 0 auto;
    background-color: #d32e30;
    margin-top: 10px;
    color: white;
    padding: 20px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .errorMessage > i {
    margin-right: 10px;
    font-size: 30px;
  }
  .loadingText {
    font-size: 25px;
    color: black;
    opacity: 0.87;
    font-weight: bold;
  }
  .loadTextSub {
    font-size: 18px;
    color: black;
    opacity: 0.77;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
  }
  .loadingContainer {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
  }
  .loadingContainer > div {
    margin-right: 20px;
  }

  .buyCoins {
    color: white;
  }

  .amountToBuy {
    color: white;
  }

  .etherDC {
    color: white;
  }

  .MuiInput-underline:before {
    border-bottom: 1px solid rgb(255 255 255 / 73%) !important;
  }

  input.MuiInputBase-input.MuiInput-input {
    color: white;
  }

  button.MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary {
    background: #00e5e4;
    color: black;
  }

  .loadingText {
    color: white;
  }

  .loadTextSub {
    color: white;
  }

  .MuiCircularProgress-colorPrimary {
    color: #00e5e4;
  }

  .titleTokenSale {
    font-size: 40px;
    font-weight: 800;
    color: white;
  }

  .tokenSaleEnds {
    font-size: 30px;
    font-weight: 400;
    color: white;
  }

  .tokenSaleRightSide {
    text-align: center;
  }

  .time.flex.space-around {
    display: inline-flex;
    padding-bottom: 3rem;
    padding-top: 2rem;
    color: white;
  }

  .headerTime {
    font-size: 60px;
    color: #fff;
    line-height: 90px;
  }

  .dateTwo {
    padding-left: 2rem;
    padding-right: 2rem;
  }

  .dateThree {
    padding-right: 2rem;
  }

  @media (max-width: 500px) {
    .jvCTkj .contributeContainer {
      width: 300px;
    }

    .headerTime {
      font-size: 60px !important;
    }

    .buyCoins {
      display: grid !important;
      grid-gap: 1rem;
    }

    .flex.successfully {
      width: 250px;
      font-size: 12px;
    }

    .flex.errorMessage {
      width: 200px;
    }

    .flex.errorMessage {
      width: 250px !important;
      font-size: 12px !important;
    }
  }

  .sale {
    font-size: 14px;
    border-radius: 2.5rem;
    background-image: linear-gradient(
      40deg,
      #ff4137 20%,
      #fdc800 51%,
      #ff4137 90%
    );
    background-position: left center;
    background-size: 200% auto;
    border: 0;
    color: #ffffff;
    width: 150px;
    padding: 15px;
    text-align: center;
    cursor: pointer;
    list-style: none;
  }
`;

class ContributeBox extends Component {
  render() {
    return (
      <Wrapper id="contribute" className="fold-right">
        <div class=" contributeContainer">
          <div class="tokenSaleRightSide">
            <div class="titleTokenSale">TOKEN SALE LIVE IN</div>
            <div class="time flex space-around">
              <div>
                <div class="headerTime">20</div>
                <div>Days</div>
              </div>
              <div className="dateTwo">
                <div class="headerTime">10</div>
                <div>Hours</div>
              </div>
              <div className="dateThree">
                <div class="headerTime">23</div>
                <div>Min</div>
              </div>
              <div>
                <div class="headerTime">23</div>
                <div>Sec</div>
              </div>
            </div>
          </div>

          <form>
            <div class="buyCoins">
              <div class="amountToBuy">Amount of ether to buy:</div>
              <input className="inp"></input>
              <div> ≈ {100 * 125} Inu </div>
              <div class="etherDC"> (1 BNB ≈ 100 + 25 (Bonus) AP) </div>
            </div>
            <div class="buttonBuy">
              <p className="amountToBuy">
                Send BNB to this address:
                0xd9354fb27d230c7d9fde3b9b367383b4ded622aa
              </p>
            </div>
          </form>
        </div>
      </Wrapper>
    );
  }
}

export default ContributeBox;
