'use client';

import { useState } from 'react';
import styled from 'styled-components';

import Table from '../components/table/Table';
import Button from '../components/Button';
import { getRsi } from '../api/getRsi';

export default function RsiPage() {
  const [overbought, setOverbought] = useState<string[]>([]);
  const [oversold, setOversold] = useState<string[]>([]);

  return (
    <Main>
      <Table overbought={overbought} oversold={oversold} />

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
  align-items: flex-start;
  padding: 1rem;
  height: calc(100vh - 3rem);
`;
