import { css } from "@emotion/react";

export const section = css`
  padding: 40px 20px;
  min-height: 500px;

  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;

  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }
`;

export const textBlock = css`
  max-width: 1240px;
  color: white;

  display: flex;
  flex-direction: column;
  gap: 50px;
  align-items: center;
  z-index: 2;
`;

export const title = css`
  font-size: 28px;
  font-weight: bold;
  text-transform: uppercase;
`;

export const description = css`
  font-size: 18px;
  line-height: 2;
  text-align: center;
`;