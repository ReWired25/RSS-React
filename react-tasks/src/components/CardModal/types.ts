import { IdataResult } from 'context/MainState/types';

export interface ICardModalProps {
  onModalClose: () => void;
  data: IdataResult;
}
