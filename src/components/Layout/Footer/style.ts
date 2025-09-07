import { css } from "@emotion/react";
import { Theme } from "@mui/material/styles";

export const footer = css`
  background: #f6f4f5;
  padding-block: 50px;
  width: 100%;
  color: black;
`;

export const top = (theme: Theme) => css`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  max-width: 1300px;
  padding: 0 50px;
  margin: 0 auto;
  gap: 32px;

  ${theme.breakpoints.down("md")} {
    flex-direction: column;
    padding: 0 20px;
  }
`;

export const logoBlock = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
`;

export const ul = css`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 0;
  margin: 0;
  list-style: none;
`;

export const li = css`
  font-size: 16px;
  font-weight: 500;
  padding-block: 2px;
`;

export const contactsBlock = css`
  min-width: 220px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const phones = css`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const phoneRow = css`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 15px;
`;

export const contactIcon = css`
  width: 18px;
  height: 18px;
  opacity: 0.7;
`;

export const emailRow = css`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 15px;
`;

export const addressRow = css`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 15px;
`;

export const workTime = css`
  display: flex;
  flex-direction: column;
  gap: 2px;
  font-size: 14px;
`;

export const workTimeRow = css`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
`;

export const bottom = css`
  border-top: 1px solid #ccc;
  margin-top: 32px;
`;

export const nav = css`
  max-width: 900px;
  margin: 0 auto;
`;

export const callBlock = (theme: Theme) => css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  ${theme.breakpoints.down("md")} {
    width: 100%;
    justify-content: flex-end;
  }
`;

export const callBtn = css`
  display: inline-block;
  background: #232e7a;
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  padding: 10px 24px;
  border-radius: 8px;
  margin-top: 12px;
  text-align: center;
  text-decoration: none;
  transition: background 0.2s;
  border: none;
  &:hover {
    background: #1a225c;
  }
`;

export const logo = css`
  width: auto;
  height: 80px;
  margin-block: 20px;
`;
