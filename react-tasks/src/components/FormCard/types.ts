// export interface IFormCardProps {
//   [index: string]: string | number;
//   name: string;
//   surname: string;
//   date: string;
//   country: string;
//   switcher: string;
//   picture: string;
// }

import { InewData } from 'components/UserFormComponents/UserForm/types';

export interface IFormCardProps {
  [index: string]: InewData | number;
  FormCardData: InewData;
}
