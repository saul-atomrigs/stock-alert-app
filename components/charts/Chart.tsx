import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

import getAggregatesByTicker from '@/api/getAggregatesByTicker';
const ApexCharts = dynamic(() => import('react-apexcharts'), {
  ssr: false,
});

type ChartProps = {
  ticker: string; // TODO: string 타입을 실제 ticker 리터럴 타입으로 좁히기
};

export default function ChartComponent({ ticker }: ChartProps) {
  const [closeStockPrices, setCloseStockPrices] = useState<number[]>([]);

  useEffect(() => {
    async function getCloseStockPrices() {
      const closeStockPrices = await getAggregatesByTicker(ticker);
      setCloseStockPrices(closeStockPrices!);
    }

    getCloseStockPrices();
  }, [ticker]);

  return (
    <ApexCharts
      type="line"
      series={[{ data: closeStockPrices }]}
      options={{
        chart: {
          height: 500,
          width: 500,
        },
        xaxis: {
          show: false,
          labels: {
            show: false,
          },
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
        },
      }}
    />
  );
}
