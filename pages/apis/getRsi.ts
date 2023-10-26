import { Dispatch, SetStateAction } from 'react';
import axios from 'axios';
import { STOCKLIST } from '../../data/stocklist';

type RsiProps = {
  setOverbought: Dispatch<SetStateAction<string[]>>;
  setOversold: Dispatch<SetStateAction<string[]>>;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
};

export async function getRsi({
  setOverbought,
  setOversold,
  setIsLoading,
}: RsiProps) {
  const sleep = (ms: number) => {
    return new Promise(resolve => {
      setTimeout(resolve, ms);
    });
  };

  setIsLoading(true);

  try {
    for (let i = 0; i < STOCKLIST.length; i += 5) {
      await sleep(61000);
      const rest = await axios.get(
        `https://api.polygon.io/v1/indicators/rsi/${STOCKLIST[i]}?timespan=day&adjusted=true&window=14&series_type=close&order=desc&limit=1&apiKey=${process.env.NEXT_PUBLIC_POLYGON_API_KEY}`,
      );

      for (let j = 0; j < 5; j++) {
        if (rest.data.results?.values[j]?.value > 60) {
          console.log(
            '매도:',
            STOCKLIST[i + j],
            rest.data.results?.values[j]?.value,
          );
          setOverbought(prev => [...prev, STOCKLIST[i + j]]);
        } else if (rest.data.results?.values[j]?.value < 40) {
          console.log(
            '매수:',
            STOCKLIST[i + j],
            rest.data.results?.values[j]?.value,
          );
          setOversold(prev => [...prev, STOCKLIST[i + j]]);
        }
      }
    }
  } catch {
    console.log('getRsi Error');
  } finally {
    setIsLoading(false);
  }
}
