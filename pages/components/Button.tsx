import { ReactNode } from 'react';
import styled from 'styled-components';

type ButtonProps = {
  type?: 'button' | 'submit' | 'reset' | undefined;
  fullWidth?: boolean;
  children?: ReactNode;
  onClick?: () => void;
  secondary?: boolean;
  danger?: boolean;
  disabled?: boolean;
};

export default function Button({
  type = 'button',
  children,
  onClick,
  danger = false,
  secondary = false,
  disabled = false,
  fullWidth = false,
}: ButtonProps) {
  return (
    <StyeledButton
      type={type}
      onClick={onClick}
      disabled={disabled}
      fullWidth={fullWidth}
      secondary={secondary}
      danger={danger}
    >
      {children}
    </StyeledButton>
  );
}

const StyeledButton = styled.button`
  display: flex;
  justify-content: center;
  border-radius: 0.375rem;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  font-weight: 600;
  outline: none;
  outline-offset: 2px;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    opacity: 0.8;
  }
  &:disabled {
    opacity: 0.5;
    cursor: default;
  }
  ${props => props.fullWidth && 'width: 100%;'}
  ${props => props.secondary && 'color: #111827;'}
  ${props => props.danger && 'background-color: #F87171;'}
  ${props => !props.secondary && !props.danger && 'background-color: #60A5FA;'}
`;
