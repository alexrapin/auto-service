import { css } from "@emotion/react";
import { Theme } from "@mui/material";

export const section = css`
  max-width: 1300px;
  padding: 40px 50px;
  margin: 0 auto 40px;

  position: relative;
`;

export const titleBlock = css`
  position: relative;
`;

export const title = css`
  font-size: 28px;
  font-weight: bold;
  text-transform: uppercase;
  position: absolute;
  top: 30px;
  left: 45px;
`;

export const list = (theme: Theme) => css`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 20px;
  padding-top: 30px;

  li {
    background: white;
    border-radius: 8px;
    padding: 20px;
    box-shadow: 2px 4px 16px rgba(0, 0, 0, 0.12);
    width: 25%;
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-4px);
      box-shadow: 2px 8px 32px rgba(0, 0, 0, 0.12);
    }

    img {
      width: 50px;
      height: 60px;
    }

    h3 {
      font-size: 20px;
      margin: 12px 0 8px;
      text-transform: uppercase;
    }

    p {
      font-size: 16px;
      color: #666;
    }
  }

    ${theme.breakpoints.down("md")} {
    flex-direction: column;
    gap: 30px;

    li {
      width: 100%;
      min-height: 200px;
    }
  }
`;
