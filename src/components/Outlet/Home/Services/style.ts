import { css } from "@emotion/react";
import { Theme } from "@mui/material/styles";

export const section = css`
  max-width: 1240px;
  padding: 40px 20px;
  margin: 50px auto 40px;

  position: relative;
`;

export const titleBlock = css`
  position: relative;
`;

export const title = css`
  position: absolute;
  top: 30px;
  left: 45px;
  font-size: 28px;
  font-weight: bold;
  text-transform: uppercase;
`;

export const list = (theme: Theme) => css`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 20px;
  padding-top: 30px;
  min-height: 350px;

  li {
    background: #f3f3f3;
    border-radius: 8px;
    padding: 20px;
    box-shadow: 2px 4px 16px rgba(0, 0, 0, 0.12);
    width: 25%;
    transition: all 0.3s ease;

    &:hover {
      background: #002469;
      box-shadow: 2px 8px 32px rgba(0, 0, 0, 0.12);
    }

    &:hover img,
    &:hover h3 {
      display: none;
    }

    &:hover h4,
    &:hover p {
      display: block;
    }

    img {
      height: 170px;
    }

    h3 {
      font-size: 20px;
      margin: 12px 0 8px;
      text-transform: uppercase;
      text-align: center;
    }

    h4 {
      color: #fff;
      font-size: 18px;
      margin: 8px 0;
      display: none;
    }

    p {
      font-size: 16px;
      color: #fff;
      display: none;
    }
  }

  ${theme.breakpoints.down("md")} {
    flex-direction: column;
    gap: 30px;

    li {
      width: 100%;
      min-height: 300px;
    }
  }
`;

export const link = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;
