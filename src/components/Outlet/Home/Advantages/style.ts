import { css } from "@emotion/react";

export const section = css`
  max-width: 1240px;
  padding: 40px 20px;
  margin: 60px auto 40px;

  position: relative;
`;

export const titleBlock = css`
  position: absolute;
  top: 0;
  left: 60px;
`;

export const title = css`
  font-size: 28px;
  font-weight: bold;
  text-transform: uppercase;
`;

export const list = css`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 20px;
  padding-top: 70px;

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
`;
