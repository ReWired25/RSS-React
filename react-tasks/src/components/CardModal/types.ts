import { IdataResult } from 'pages/Main/types';

export interface ICardModalProps {
  onModalClose: () => void;
  data: IdataResult;
}
