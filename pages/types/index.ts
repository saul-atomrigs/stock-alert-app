export type ChipProps = {
  children: string;
  key: string;
  selected?: boolean;
  onClick?: () => void;
};

export type ButtonProps = {
  type?: 'button' | 'submit' | 'reset' | undefined;
  fullWidth?: boolean;
  children?: React.ReactNode;
  onClick?: () => void;
  secondary?: boolean;
  danger?: boolean;
  disabled?: boolean;
};

export type TableProps = {
  stockData: string[];
  type: string;
};
