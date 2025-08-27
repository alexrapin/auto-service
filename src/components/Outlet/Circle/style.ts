import { css } from "@emotion/react";

export const circle = css`
  position: absolute;
  top: -34px;
  left: -40px;
  width: 100px;
  height: 100px;
  background: #232e7a;
  border-radius: 50%;
  z-index: -1;
  opacity: 0.5;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const smallCircle = css`
  width: 70px;
  height: 70px;
  background: white;
  border-radius: 50%;
`;