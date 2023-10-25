'use client';

import { useState } from 'react';
import styled from 'styled-components';

import Table from '../components/Table';
import Button from '../components/Button';
import { getRsi } from '../api/getRsi';

export default function RsiPage() {
  const [overbought, setOverbought] = useState<string[]>([]);
  const [oversold, setOversold] = useState<string[]>([]);

  return (
    <Main>
      <TableGroup>
        <Table stockData={overbought} type="overbought" />
        <Table stockData={oversold} type="oversold" />
      </TableGroup>

      <Button fullWidth onClick={() => getRsi({ setOverbought, setOversold })}>
        {'GET RSI'}
      </Button>
    </Main>
  );
}

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
  height: calc(100vh - 3rem);
  width: 80%;
  max-width: 700px;
`;

const TableGroup = styled.div`
  display: flex;
  flex-direction: column;
  height: 30%;
`;
