import { css } from "@emotion/react";
import { Theme } from "@mui/material";

export const section = (theme: Theme) => css`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  max-width: 1300px;
  padding: 0 50px;
  margin: 40px auto;
  gap: 40px;

  ${theme.breakpoints.down("md")} {
    flex-direction: column;
    padding: 0 20px;
    align-items: center;
  }
`;

export const left = css`
  flex: 1;
`;

export const title = (theme: Theme) => css`
  font-size: 30px;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 12px;

  ${theme.breakpoints.down("md")} {
    font-size: 24px;
    text-align: center;
  }
`;

export const description = (theme: Theme) => css`
  font-size: 18px;
  margin-bottom: 16px;

  ${theme.breakpoints.down("md")} {
    font-size: 16px;
    text-align: center;
    max-width: 600px;
    margin: 0 auto 16px auto;
  }
`;

export const phones = (theme: Theme) => css`
  font-size: 40px;
  font-weight: bold;
  letter-spacing: 1px;
  margin-bottom: 16px;

  ${theme.breakpoints.down("md")} {
    text-align: center;
    font-size: 30px;
  }
`;
export const phoneItem = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  gap: 8px;

  ${theme.breakpoints.down("md")} {
    align-items: center;
  }
`;

export const carImg = (theme: Theme) => css`
  margin-top: 16px;
  img {
    max-width: 420px;
    width: 100%;
    height: auto;
    display: block;
  }

  ${theme.breakpoints.down("md")} {
    img {
      max-width: 100%;
    }
  }
`;

export const right = css`
  flex: 1;
  background: #002469;
  border-radius: 16px;
  padding: 32px 24px;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-width: 320px;
  max-width: 400px;
`;

export const formTitle = css`
  font-size: 28px;
  font-weight: bold;
  text-transform: uppercase;
`;

export const formDescription = css`
  font-size: 16px;
  padding-top: 12px;
  max-width: 400px;
  margin-bottom: 24px;
`;

export const form = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const input = css`
  padding: 24px;
  border: 1px solid black;
  border-radius: 8px;
  font-size: 16px;
  background: white;
  color: #232e7a;

  &:focus {
    outline: none;
    border-color: #0070f3;
  }
`;

export const button = css`
  padding: 24px;
  background: #f1e140;
  color: black;
  text-transform: uppercase;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: yellowgreen;
  }
`;
