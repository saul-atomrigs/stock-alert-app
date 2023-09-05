import React from 'react';
import styled from 'styled-components';

type ChipProps = {
  children: string;
  key: string;
  selected?: boolean;
  onClick?: () => void;
};

export default function Chip({ children, onClick, selected }: ChipProps) {
  return (
    <>
      {selected ? (
        <PrimaryChip onClick={onClick}>{children}</PrimaryChip>
      ) : (
        <SecondaryChip onClick={onClick}>{children}</SecondaryChip>
      )}
    </>
  );
}

const PrimaryChip = styled.div`
  background: var(--gray-900, #3a3c3c);
  border-radius: 1rem;
  padding: 0.2rem 0.8rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 1.4rem */
  color: var(--white, #fff);
  width: fit-content;
`;

const SecondaryChip = styled(PrimaryChip)`
  background: var(--gray-100, #f7f7f7);
  color: var(--gray-900, #3a3c3c);
`;
