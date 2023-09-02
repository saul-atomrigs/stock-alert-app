import { useState } from 'react';

import styles from '@/styles/Home.module.css';

import { getRsi } from './api/getRsi';

import Button from './components/Button';
import Table from './components/table/Table';

export default function Home() {
  const [overbought, setOverbought] = useState<string[]>([]);
  const [oversold, setOversold] = useState<string[]>([]);

  return (
    <main>
      <Table overbought={overbought} oversold={oversold} />

      <Button fullWidth onClick={() => getRsi({ setOverbought, setOversold })}>
        {'GET RSI'}
      </Button>
    </main>
  );
}
