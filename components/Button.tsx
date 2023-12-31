import { ReactNode } from 'react';
import styled from 'styled-components';

import { green300, green500 } from '@/styles/design-system';

type ButtonProps = {
  type?: 'button' | 'submit' | 'reset' | undefined;
  fullWidth?: boolean;
  children?: ReactNode;
  onClick?: () => void;
  secondary?: boolean;
  danger?: boolean;
  disabled?: boolean;
};

export default function ButtonComponent({
  type = 'button',
  children,
  onClick,
  danger = false,
  secondary = false,
  disabled = false,
  fullWidth,
}: ButtonProps) {
  return (
    <Button.Body
      type={type}
      onClick={onClick}
      disabled={disabled}
      fullWidth={fullWidth}
      secondary={secondary}
      danger={danger}
    >
      <Button.Text>{children}</Button.Text>
    </Button.Body>
  );
}

const Button = {
  Body: styled.button<ButtonProps>`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    height: 3.5rem;
    width: ${props => (props.fullWidth ? '100%' : 'auto')};
    padding: 0rem 1.5rem;
    border-radius: 0.5rem;
    background: ${green300};
    cursor: pointer;
    &:hover,
    &:active {
      background: ${green500};
    }
  `,

  Text: styled.span`
    text-align: center;
    font-family: Pretendard;
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: 140%; /* 1.75rem */
  `,
};
