export interface Results {
  stock: string;
  rsi: number;
  isOverbought: boolean;
}

export interface Aggregate {
  Ticker: string;
  close: number;
}
