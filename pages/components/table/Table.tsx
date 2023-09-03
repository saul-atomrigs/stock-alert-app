import React, { useState } from 'react';
import styled from 'styled-components';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Chip from '../Chip';

type TableProps = {
  overbought: string[];
  oversold: string[];
};

export default function Table({ overbought, oversold }: TableProps) {
  const [selectedStockIndex, setSelectedStockIndex] = useState(0);

  return (
    <PrimaryTable>
      <StyledTabs>
        <StyledTabList>
          <Tab>과매도 (매수 추천)</Tab>
          <Tab>과매수 (매도 추천)</Tab>
        </StyledTabList>

        <StyledTabPanel>
          {oversold.map(stock => (
            <Chip
              key={stock}
              onClick={() => setSelectedStockIndex(oversold.indexOf(stock))}
              selected={selectedStockIndex === oversold.indexOf(stock)}
            >
              {stock}
            </Chip>
          ))}
        </StyledTabPanel>

        <StyledTabPanel>
          {overbought.map(stock => (
            <Chip
              key={stock}
              onClick={() => setSelectedStockIndex(oversold.indexOf(stock))}
              selected={selectedStockIndex === oversold.indexOf(stock)}
            >
              {stock}
            </Chip>
          ))}
        </StyledTabPanel>
      </StyledTabs>
    </PrimaryTable>
  );
}

const PrimaryTable = styled.table`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  flex-shrink: 0;
`;

const StyledTabs = styled(Tabs)`
  display: flex;
  flex-direction: column;
`;

const StyledTabList = styled(TabList)`
  padding: 0rem;
  background: var(--gray-900, #3a3c3c);
  color: var(--white, #fff);
  text-align: center;
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: uppercase;
`;

const StyledTabPanel = styled(TabPanel)`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
