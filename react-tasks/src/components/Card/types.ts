import { IdataResult } from 'context/MainState/types';

export interface ICardProps {
  data: IdataResult;
  handleModalData: (data: IdataResult) => void;
}
