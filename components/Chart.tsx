/* eslint-disable react-hooks/exhaustive-deps */
import getAggregates from '@/api/getAggregates';
import { useEffect, useState } from 'react';
import ApexCharts from 'react-apexcharts';

export default function ChartComponent() {
  const [closeStockPrices, setCloseStockPrices] = useState([]);

  useEffect(() => {
    async function getCloseStockPrices() {
      const closeStockPrices = await getAggregates();
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
