export interface ICardProps {
  img: string;
  title: string;
  type: string;
  color: string;
  price: string;
}

export enum CardStyles {
  textShadow = '1px 0 #000, -1px 0 #000, 0 1px #000, 0 -1px #000, 1px 1px #000, -1px -1px #000, 1px -1px #000, -1px 1px #000',
  differentColors = 'different',
  defaultColor = 'black',
}
