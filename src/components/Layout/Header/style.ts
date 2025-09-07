import { css } from "@emotion/react";
import { Theme } from "@mui/material";

export const section = css`
  background: white;
  color: black;
`;

export const top = (theme: Theme) => css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1300px;
  padding-inline: 50px;
  margin: 0 auto;

  ${theme.breakpoints.down("md")} {
    padding-inline: 20px;
  }
`;

export const logo = (theme: Theme) => css`
  width: auto;
  height: 80px;
  margin-block: 20px;
  transition: all 0.2s;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }

  ${theme.breakpoints.down("sm")} {
    height: 45px; 
  }
`;

export const phone = css`
  font-size: 18px;
  font-weight: bold;
  padding-bottom: 5px;
`;

export const textLink = css`
  font-size: 14px;
  font-weight: bold;
  text-decoration: underline;
  transition: all 0.2s;

  &:hover {
    color: #002469;
  }
`;

export const bottom = css`
  border-top: 1px solid #ccc;
`;

export const nav = (theme: Theme) => css`
  max-width: 1000px;
  padding-inline: 50px;
  margin: 0 auto;

  ${theme.breakpoints.down("md")} {
    padding-inline: 20px;
  }
`;

export const ul = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
`;

export const li = (theme: Theme) => css`
  font-size: 18px;
  font-weight: bold;
  padding-block: 25px;

  transition: all 0.2s;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    color: #002469;
  }

  ${theme.breakpoints.down("sm")} {
    font-size: 14px;
    padding-block: 20px;
  }
`;
