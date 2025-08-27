import { css } from "@emotion/react";

export const section = css`
  max-width: 1240px;
  padding: 40px 20px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  gap: 50px;
`;

export const nav = css`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 20px;
`;

export const navLink = css`
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    & .navImg {
      background: #f1e140;
    }
  }
`;

export const navImg = css`
  width: 60px;
  height: 60px;
  padding: 10px;
  border-radius: 50%;
  background: #232e7a;
  transition: background 0.3s ease;

  &[data-active="true"] {
    background: #f1e140;
  }
`;

export const circle = css`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #f1e140;
`;

export const navText = css`
  font-size: 15px;
  font-weight: bold;
  text-align: center;
`;

export const line = css`
  position: absolute;
  top: 55%;
  left: 0;

  width: 100%;
  height: 1px;
  background: grey;
`;

export const image = css`
  border-radius: 16px;
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export const subscribeContainer = css`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
`;

export const form = css`
  display: flex;
  flex-direction: column;
  gap: 40px;
  background: #232e7a;
  color: #ffffff;
  padding: 30px;
  border-radius: 16px;
  box-sizing: border-box;
`;

export const title = css`
  font-size: 28px;
  font-weight: bold;
  text-transform: uppercase;
`;

export const subtitle = css`
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
`;

export const text = css`
  font-size: 16px;
  padding-top: 12px;
  max-width: 400px;
`;

export const inputsContainer = css`
  display: grid;
  grid-template-columns: 1fr;
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
