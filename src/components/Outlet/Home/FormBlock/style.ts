import { css } from "@emotion/react";

export const section = css`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  max-width: 1240px;
  margin: 40px auto;
  gap: 40px;
`;

export const left = css`
  flex: 1;
`;

export const title = css`
  font-size: 22px;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 12px;
`;

export const description = css`
  font-size: 15px;
  margin-bottom: 16px;
`;

export const phones = css`
  font-size: 32px;
  font-weight: bold;
  letter-spacing: 1px;
  margin-bottom: 16px;
`;

export const carImg = css`
  margin-top: 16px;
  img {
    max-width: 320px;
    width: 100%;
    height: auto;
    display: block;
  }
`;

export const right = css`
  flex: 1;
  background: #27348b;
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
  font-size: 20px;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 8px;
`;

export const formDescription = css`
  font-size: 14px;
  margin-bottom: 18px;
`;

export const form = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const input = css`
  padding: 12px 16px;
  border-radius: 8px;
  border: none;
  font-size: 16px;
  margin-bottom: 0;
  outline: none;
`;

export const button = css`
  margin-top: 10px;
  padding: 14px 0;
  border-radius: 8px;
  border: none;
  background: #ffe600;
  color: #171717;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.2s;
  width: 100%;
  &:hover {
    background: #ffd600;
  }
`;