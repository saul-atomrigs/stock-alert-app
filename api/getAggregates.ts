import axios from 'axios';
import { STOCKLIST } from '@/data/stocklist';

type Aggregate = {
  Ticker: string;
  close: number;
};

export async function getAggregates() {
  const today = new Date().toISOString().split('T')[0];

  try {
    let closeStockPrices: Aggregate[] = [];

    const result = await axios(
      `https://api.polygon.io/v2/aggs/grouped/locale/us/market/stocks/${today}?adjusted=true&apiKey=${process.env.NEXT_PUBLIC_POLYGON_API_KEY}`,
    );

    const aggregates = result.data.results;

    // For each aggregate, if T is included in STOCKLIST, push it to closeStockPrices:
    aggregates.forEach((element: { T: string }) => {
      if (STOCKLIST.includes(element.T)) {
        closeStockPrices.push({ Ticker: element.T, close: element.c });
      }
    });

    console.log(closeStockPrices);
    return closeStockPrices;
  } catch (error) {
    console.error('getAggregates Error', error);
  }
}
