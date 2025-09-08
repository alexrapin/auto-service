import { css } from "@emotion/react";
import { heroData } from "./hero.data";
import { Theme } from "@mui/material";

export const hero = (theme: Theme) => css`
  background-image: url(${heroData.bgImage});
  background-size: cover;
  background-position: center;
  padding: 200px 0;
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
    background: rgba(0, 0, 0, 0.65);
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
    text-align: center;
  }

  p {
    font-size: 18px;
    margin-bottom: 32px;
    text-align: center;
  }

  button {
    background-color: #232e7a;
    padding: 20px 32px;
    font-size: 18px;
    cursor: pointer;
    transition: all 0.3s;
    font-weight: bold;
    border: none;
    border-radius: 8px;
    color: white;

    &:hover {
      background-color: #f1e140;
      color: black;
    }
  }

  ${theme.breakpoints.down("md")} {
    padding: 100px 0;
  }
`;

export const content = (theme: Theme) => css`
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 2;

  ${theme.breakpoints.down("md")} {
    padding: 0 20px;
  }
`;
