import { css } from "@emotion/react";
import { Theme } from "@mui/material";

export const section = (theme: Theme) => css`
  max-width: 900px;
  margin: 100px auto;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${theme.breakpoints.down("md")} {
    margin: 60px auto;
  }
`;

export const mainTitle = (theme: Theme) => css`
  font-size: 32px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 40px;
  text-transform: uppercase;
  color: #012468;

  ${theme.breakpoints.down("md")} {
    font-size: 26px;
  }
`;

export const contentWrapper = css`
  width: 100%;
`;

export const faqItem = (theme: Theme) => css`
  margin-bottom: 18px;
  border-radius: 12px;
  background: ${theme.palette.background.paper};
  box-shadow: 0 6px 18px rgba(2, 6, 23, 0.06);
  padding: 8px 16px;
`;

export const question = (theme: Theme, isOpen: boolean) => css`
  width: 100%;
  text-align: left;
  font-size: 18px;
  font-weight: 600;
  background: transparent;
  border: none;
  padding: 16px 12px;
  cursor: pointer;
  color: ${isOpen ? theme.palette.primary.main : '#012468'};
  transition: color 0.28s cubic-bezier(0.22, 1, 0.36, 1), transform 0.22s;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:hover {
    transform: translateY(-2px);
    outline: 3px solid ${theme.palette.primary.main}20; /* translucent focus ring */
    outline-offset: 2px;
    border-radius: 8px;
  }

  /* chevron */
  .arrow {
    width: 12px;
    height: 12px;
    display: inline-block;
    border-right: 2px solid currentColor;
    border-bottom: 2px solid currentColor;
    transform: rotate(${isOpen ? "225deg" : "45deg"});
    transition: transform 0.4s cubic-bezier(0.4, 1, 0.4, 1), color 0.4s;
    margin-left: 12px;
    will-change: transform;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
    .arrow {
      transition: none;
    }
  }
`;

export const answer = (theme: Theme, isOpen: boolean) => css`
  max-height: ${isOpen ? "800px" : "0"};
  overflow: hidden;
  opacity: ${isOpen ? 1 : 0};
  transform-origin: top center;
  transform: ${isOpen ? "scaleY(1)" : "scaleY(0.995)"};
  transition: 
    transform 0.4s cubic-bezier(0.4, 1, 0.4, 1),
    max-height 0.4s ease, 
    opacity 0.4s ease;
  font-size: 16px;
  line-height: 1.6;
  color: black;
  padding: ${isOpen ? "12px 0 18px" : "0"};
  will-change: transform, opacity, max-height;

  p {
    margin: 0;
    transform: ${isOpen ? "translateY(0)" : "translateY(-6px)"};
    opacity: ${isOpen ? 1 : 0};
    transition: transform 0.4s cubic-bezier(0.4, 1, 0.4, 1),
      opacity 0.4s ease;
    white-space: pre-line; /* respect newline characters (\n) */

  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;
