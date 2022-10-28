import { IdataResult } from 'pages/Main/types';

export interface ICardProps {
  data: IdataResult;
  handleModalData: (data: IdataResult) => void;
}
