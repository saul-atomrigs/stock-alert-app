import { useState } from 'react';
import styles from '@/styles/Home.module.css';
import Button from './components/Button';
import { getRsi } from './api/getRsi';

export default function Home() {
  const [overbought, setOverbought] = useState<string[]>([]);
  const [oversold, setOversold] = useState<string[]>([]);

  return (
    <main className={`${styles.main} `}>
      <Button fullWidth onClick={() => getRsi({ setOverbought, setOversold })}>
        {'GET RSI'}
      </Button>

      {/* Table of oversold and overbought: */}
      <table>
        <thead>
          <tr>
            <th>Overbought -</th>
            <th>Oversold</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              {overbought.map(stock => (
                <>
                  <div key={stock}>{stock}</div>
                </>
              ))}
            </td>
            <td>
              {oversold.map(stock => (
                <>
                  <div key={stock}>{stock}</div>
                </>
              ))}
            </td>
          </tr>
        </tbody>
      </table>
    </main>
  );
}
