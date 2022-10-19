import { IdataResult } from 'pages/Main/types';

export interface ICardProps {
  data: IdataResult;
  onDataChange: (data: IdataResult) => void;
}
