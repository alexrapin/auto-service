import { css } from '@emotion/react';
import { Theme } from '@mui/material';

// Кольори, взяті з вашого сайту autoband.com.ua
const colors = {
  background: 'white',
  primaryYellow: '#252e78',
  textPrimary: 'black',
  textSecondary: 'black',
};

export const container = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: ${colors.background};
  color: ${colors.textPrimary};
  text-align: center;
  padding: 20px;
`;

export const icon = css`
    width: 100px;
    height: 100px;
    color: ${colors.primaryYellow};
    margin-bottom: 24px;
    opacity: 0.5;
`;

export const title = (theme: Theme) => css`
  font-size: 8rem;
  font-weight: 700;
  color: ${colors.textPrimary};
  text-shadow: 4px 4px 0px rgba(255, 214, 0, 0.2);
  margin: 0;
  line-height: 1;

  ${theme.breakpoints.down('sm')} {
    font-size: 6rem;
  }
`;

export const subtitle = (theme: Theme) => css`
  font-size: 1.75rem;
  font-weight: 600;
  color: ${colors.textPrimary};
  margin-top: 16px;
  
  ${theme.breakpoints.down('sm')} {
    font-size: 1.25rem;
  }
`;

export const description = css`
  font-size: 1rem;
  color: ${colors.textSecondary};
  max-width: 450px;
  margin: 16px 0 32px;
`;

export const button = css`
  background-color: ${colors.primaryYellow};
  font-weight: 600;
  font-size: 1rem;
  padding: 12px 32px;
  border-radius: 8px;
  text-transform: none;
  transition: all 0.2s ease;

  &:hover {
    color: black;
    background-color: #ece23d;
    transform: translateY(-2px);
    box-shadow: 0 4px 20px rgba(255, 214, 0, 0.25);
  }
`;
