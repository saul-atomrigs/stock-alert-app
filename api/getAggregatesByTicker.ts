import axios from 'axios';
import { STOCK_LABEL_LIST } from '@/data/stocklist';

export type StockData = {
  date: string;
  close: number;
  volume: number;
  open: number;
  high: number;
  low: number;
  label: string;
};

export default async function getAggregatesByTicker(ticker: string) {
  try {
    const today = new Date().toISOString().split('T')[0];
    const sixMonthsAgo = new Date(Date.now() - 6 * 30 * 24 * 60 * 60 * 1000)
      .toISOString()
      .split('T')[0];

    const STOCK_LABEL =
      STOCK_LABEL_LIST[ticker as keyof typeof STOCK_LABEL_LIST];

    const stockDataArray: StockData[] = [];

    const result = await axios(
      `https://api.polygon.io/v2/aggs/ticker/${ticker}/range/1/day/${sixMonthsAgo}/${today}?adjusted=true&sort=asc&limit=120&apiKey=${process.env.NEXT_PUBLIC_POLYGON_API_KEY}`,
    );
    const aggregates = result.data.results;

    const convertTimestampToDate = (timestamp: string) => {
      const date = new Date(timestamp);

      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
      const day = String(date.getDate()).padStart(2, '0');
      const hours = String(date.getHours()).padStart(2, '0');
      const minutes = String(date.getMinutes()).padStart(2, '0');
      const seconds = String(date.getSeconds()).padStart(2, '0');

      const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

      return formattedDate;
    };

    aggregates.forEach(
      (element: {
        t: string;
        o: number;
        l: number;
        h: number;
        c: number;
        v: number;
      }) => {
        stockDataArray.push({
          date: convertTimestampToDate(element.t),
          open: element.o,
          low: element.l,
          high: element.h,
          close: element.c,
          volume: element.v,
          label: STOCK_LABEL,
        });
      },
    );

    return stockDataArray;
  } catch (error) {
    console.error('getAggregates Error', error);
  }
}
