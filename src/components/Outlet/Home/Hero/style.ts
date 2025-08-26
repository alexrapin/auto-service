import { css } from "@emotion/react";
import { heroData } from "./hero.data";

export const hero = css`
  background-image: url(${heroData.bgImage});
  background-size: cover;
  background-position: center;
  padding: 250px 0;
  color: white;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  position: relative;
  overflow: hidden;

&::before {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0.65);
  z-index: 1;
}

> * {
  position: relative;
  z-index: 2;
}

  h1 {
    font-size: 48px;
    margin-bottom: 16px;
    font-weight: 700;
  }

  p {
    font-size: 24px;
    margin-bottom: 32px;
  }

  button {
    background-color: transparent;
    border: 2px solid white;
    padding: 20px 32px;
    font-size: 18px;
    cursor: pointer;
    transition: all 0.3s;
    font-weight: bold;

    &:hover {
      background-color: white;
      color: black;
    }
  }
`;

export const content = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.);
`;