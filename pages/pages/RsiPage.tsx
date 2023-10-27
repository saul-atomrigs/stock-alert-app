'use client';

import { useState } from 'react';
import styled from 'styled-components';

import Table from '../../components/Table';
import Button from '../../components/Button';
import { Loading } from '../../components/Loading';
import { getRsi } from '../../api/getRsi';
import { gray700 } from '@/styles/design-system';

export default function RsiPage() {
  const [overbought, setOverbought] = useState<string[]>([]);
  const [oversold, setOversold] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Main>
      <TableGroup>
        <Table stockData={overbought} type="overbought" />
        <Table stockData={oversold} type="oversold" />
      </TableGroup>

      <Chart />

      <Button
        fullWidth
        onClick={() => getRsi({ setOverbought, setOversold, setIsLoading })}
      >
        {isLoading ? <Loading /> : 'RSI 스캔 시작하기'}
      </Button>
    </Main>
  );
}

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
  height: calc(100dvh - 3rem);
  width: 90%;
  max-width: 700px;
  border: 1px solid ${gray700};
  border-radius: 1rem;
`;

const TableGroup = styled.div`
  display: flex;
  flex-direction: column;
  height: 30%;
`;

const Chart = styled.div`
  height: 60%;
  background-color: aliceblue;
`;
