import React, { useState } from 'react';
import styled from 'styled-components';
import Chip from '../Chip';

type TableProps = {
  stockData: string[];
  type: string;
};

export default function Table({ stockData, type }: TableProps) {
  const [selectedStockIndex, setSelectedStockIndex] = useState(0);

  return (
    <TableContainer>
      <TableHeader>
        <TableHeaderTitle>
          {type === 'overbought' ? '과매수' : '과매도'}
        </TableHeaderTitle>
      </TableHeader>

      <TableBody>
        {stockData.map(stock => (
          <Chip
            key={stock}
            onClick={() => setSelectedStockIndex(stockData.indexOf(stock))}
            selected={selectedStockIndex === stockData.indexOf(stock)}
          >
            {stock}
          </Chip>
        ))}
      </TableBody>
    </TableContainer>
  );
}

const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 70%;
`;

const TableHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 3rem;
  border-bottom: 1px solid var(--gray-200, #e2e8f0);
`;

const TableHeaderTitle = styled.span`
  color: var(--black, #000);
  font-family: Pretendard;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: 140%; /* 1.75rem */
`;

const TableBody = styled.div`
  display: flex;
  padding-top: 1rem;
  gap: 0.5rem;
  overflow-y: auto;
  overflow-x: hidden;
  scrollbar-width: thin;
  scrollbar-color: var(--gray-800, #2e3030) transparent;
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: var(--gray-800, #2e3030);
    border-radius: 0.5rem;
    border: 3px solid transparent;
  }
`;
