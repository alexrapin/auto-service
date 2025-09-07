import { css } from "@emotion/react";
import { Theme } from "@mui/material";

export const section = (theme: Theme) => css`
  max-width: 1300px;
  margin: 100px auto;
  padding: 0 50px;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${theme.breakpoints.down("md")} {
    padding: 0 20px;
  }
`;

export const mainTitle = (theme: Theme) => css`
  font-size: 32px;
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 20px;

  ${theme.breakpoints.down("md")} {
    font-size: 26px;
  }
`;

export const logoImage = css`
  height: auto;
  width: 100%;
`;

export const contentWrapper = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 70px;
`;

export const contentTitle = (theme: Theme) => css`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 12px;

  ${theme.breakpoints.down("md")} {
    font-size: 20px;
  }
`;

export const contentDescription = css`
  font-size: 16px;
  line-height: 1.6;
  color: #555;
  margin-bottom: 30px;
  white-space: pre-wrap;
`;

export const hiddenContent = (isExpanded: boolean) => css`
  max-height: ${isExpanded ? '2000px' : '0'};
  opacity: ${isExpanded ? 1 : 0};
  overflow: hidden;
  transition: max-height 0.7s ease-in-out, opacity 0.5s ease-in-out;
  width: 100%;
`;

export const button =  css`
  padding: 14px 32px;
  background: #002469;
  color: white;
  text-transform: uppercase;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #efe23b;
    color: #002469;
  }
`;