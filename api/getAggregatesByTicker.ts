import axios from 'axios';
import { STOCK_LABEL_LIST } from '@/data/stocklist';
import { convertTimestampToDate, sixMonthsAgo, today } from '@/utils';

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
    const STOCK_LABEL =
      STOCK_LABEL_LIST[ticker as keyof typeof STOCK_LABEL_LIST];

    const stockDataArray: StockData[] = [];

    const result = await axios(
      `${process.env.NEXT_PUBLIC_POLYGON_API_BASE_URL}v2/aggs/ticker/${ticker}/range/1/day/${sixMonthsAgo}/${today}?adjusted=true&sort=asc&limit=120&apiKey=${process.env.NEXT_PUBLIC_POLYGON_API_KEY}`,
    );
    const aggregates = result.data.results;

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
