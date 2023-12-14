'use client';

import { useEffect, useState } from 'react';
import styled from 'styled-components';

import type { Aggregate, Results } from '@/types';
import { getRsi } from '@/api/getRsi';
import { getAggregates } from '@/api/getAggregates';
import { gray700 } from '@/styles/design-system';
import Chart from '@/components/Chart';
import Table from '@/components/Table';
import Button from '@/components/Button';
import { Loading } from '@/components/Loading';
import TickerSlider from '@/components/TickerSlider';
import SkeletonLoading from '@/components/Skeleton';

export default function RsiPage() {
  const [overbought, setOverbought] = useState<string[]>([]);
  const [oversold, setOversold] = useState<string[]>([]);
  const [results, setResults] = useState<Results[]>([]);
  const [isRsiLoading, setIsRsiLoading] = useState(false);
  const [isAggregatesLoading, setIsAggregatesLoading] = useState(true);
  const [selectedTicker, setSelectedTicker] = useState('');
  const [aggregates, setAggregates] = useState<Aggregate[] | undefined>([]);

  useEffect(() => {
    results.forEach(result => {
      if (result.isOverbought) {
        if (!overbought.includes(result.stock)) {
          setOverbought(prev => [...prev, result.stock]);
        }
      } else {
        if (!oversold.includes(result.stock)) {
          setOversold(prev => [...prev, result.stock]);
        }
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [results]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getAggregates();
      setAggregates(response);
      setIsAggregatesLoading(false);
    };

    fetchData();
  }, []);

  return (
    <Main>
      <div>
        <Chart ticker={selectedTicker} />

        {isAggregatesLoading ? (
          <SkeletonLoading width={'100%'} height={'2.5rem'} />
        ) : (
          <TickerSlider aggregates={aggregates} />
        )}

        <TableGroup>
          <Table
            stockData={overbought}
            type="overbought"
            selectedTicker={selectedTicker}
            setSelectedTicker={setSelectedTicker}
          />
          <Table
            stockData={oversold}
            type="oversold"
            selectedTicker={selectedTicker}
            setSelectedTicker={setSelectedTicker}
          />
        </TableGroup>
      </div>

      <Button fullWidth onClick={() => getRsi({ setResults, setIsRsiLoading })}>
        {isRsiLoading ? <Loading /> : 'RSI 스캔 시작하기'}
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
  // 가로길이 최소값 300px, 평상시 90%, 최대 700px (media query 대신 사용함):
  width: clamp(300px, 90%, 700px);
  border: 1px solid ${gray700};
  border-radius: 1rem;
`;

const TableGroup = styled.div`
  display: flex;
  flex-direction: column;
  height: 30%;
  gap: 2rem;
`;
