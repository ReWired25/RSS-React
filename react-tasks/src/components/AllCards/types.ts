import { IdataResult } from 'pages/Main/types';

export { IdataResult };

export interface IAllCardsProps {
  data: IdataResult[];
}

export interface IAllCardsState {
  modalData: IdataResult | null;
}
