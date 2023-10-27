import { useState } from 'react';
import styled from 'styled-components';

import Chip from './Chip';
import { gray100, gray200, gray900 } from '@/styles/design-system';

type TableProps = {
  stockData: string[];
  type: string;
};

export default function TableComponent({ stockData = [], type }: TableProps) {
  const [selectedStockIndex, setSelectedStockIndex] = useState(0);

  return (
    <Table.Container>
      <Table.Header>
        <Table.HeaderTitle>
          {type === 'overbought' ? '과매수' : '과매도'}
          <Chip onClick={() => {}} selected={false}>
            {type === 'overbought' ? '매도를 추천해요' : '매수를 추천해요'}
          </Chip>
        </Table.HeaderTitle>
      </Table.Header>

      <Table.Body>
        {stockData.map(stock => (
          <Chip
            clickable={true}
            key={stock}
            onClick={() => setSelectedStockIndex(stockData.indexOf(stock))}
            selected={selectedStockIndex === stockData.indexOf(stock)}
          >
            {stock}
          </Chip>
        ))}
      </Table.Body>
    </Table.Container>
  );
}

const Table = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
  `,
  Header: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 3rem;
    border-bottom: 1px solid ${gray200};
  `,
  HeaderTitle: styled.span`
    display: flex;
    color: ${gray900};
    font-family: Pretendard;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 700;
    line-height: 140%; /* 1.75rem */
    gap: 0.5rem;
  `,
  Body: styled.div`
    display: flex;
    padding-top: 1rem;
    padding-bottom: 0.25rem;
    gap: 0.5rem;
    overflow-x: auto;
    /* blur effect at the end: */
    &::-webkit-scrollbar {
      width: 0.5rem;
      height: 0.25rem;
    }
    &::-webkit-scrollbar-track {
      background: transparent;
    }
    &::-webkit-scrollbar-thumb {
      background: ${gray100};
      border-radius: 0.5rem;
    }
  `,
};
