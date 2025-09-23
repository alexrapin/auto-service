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
  margin-bottom: 50px;

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
  max-height: ${isExpanded ? "2000px" : "0"};
  opacity: ${isExpanded ? 1 : 0};
  overflow: hidden;
  transition: max-height 0.7s ease-in-out, opacity 0.5s ease-in-out;
  width: 100%;
`;

export const button = css`
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

export const grid = css`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 30px;

  /* show exactly 5 rows in height; if more items exist, vertical scroll appears */
  --brand-row-height: 170px; /* adjust row height as needed */
  grid-auto-rows: var(--brand-row-height);
  /* total height = 5 rows + 4 gaps */
  height: calc(var(--brand-row-height) * 4 + 30px * 4);
  overflow-y: auto;
  overscroll-behavior: contain;
  scrollbar-width: thin;
  scrollbar-color: rgba(1,36,104,0.6) rgba(0,0,0,0.05);

  @media (min-width: 640px) {
    grid-template-columns: repeat(3, minmax(150px, 1fr));
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(5, minmax(150px, 1fr));
  }
`;

export const card = css`
  cursor: pointer;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 12px;
  transition: transform 0.3s, box-shadow 0.3s;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: var(--brand-row-height);
  box-sizing: border-box;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
`;

export const brandImage = css`
  width: 60px;
  height: auto;
  margin-bottom: 15px;
`;

export const brandTitle = css`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const brandDescription = css`
  font-size: 16px;
  color: #555;
`;
