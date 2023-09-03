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
  fullWidth,
}: ButtonProps) {
  return (
    <PrimaryButton
      type={type}
      onClick={onClick}
      disabled={disabled}
      fullWidth={fullWidth}
      secondary={secondary}
      danger={danger}
    >
      <ButtonText>{children}</ButtonText>
    </PrimaryButton>
  );
}

const PrimaryButton = styled.button<ButtonProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  height: 3.5rem;
  min-height: 3.5rem;
  max-height: 3.5rem;
  width: ${props => (props.fullWidth ? '100%' : 'auto')};
  padding: 0rem 1.5rem;
  border-radius: 0.5rem;
  background: var(--gray-900, #3a3c3c);
`;

const ButtonText = styled.span`
  color: var(--white, #fff);
  text-align: center;
  font-family: Pretendard;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: 140%; /* 1.75rem */
`;
