import getAggregates from '@/api/getAggregates';
import { useEffect, useState } from 'react';
import ApexCharts from 'react-apexcharts';

type ChartProps = {
  ticker: string; // TODO: string 타입을 실제 ticker 리터럴 타입으로 좁히기
};

export default function ChartComponent({ticker}: ChartProps) {
  const [closeStockPrices, setCloseStockPrices] = useState<number[]>([]);

  useEffect(() => {
    async function getCloseStockPrices() {
      const closeStockPrices = await getAggregates(ticker);
      setCloseStockPrices(closeStockPrices);
    }

    getCloseStockPrices();
  }, []);

  return (
    <ApexCharts
      type="line"
      series={[{ data: closeStockPrices }]}
      options={{
        chart: {
          height: 500,
          width: 500,
        },
      }}
    />
  );
}
