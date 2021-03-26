export interface IInvoice {
  key: string;
  number: number;
  date: string;
  client: string;
  sum: number;
  comment: string;
}

export interface IContruction {
  key: string;
  number: number;
  manufacturer: string;
  construction: string;
  collection: string;
  model: string;
  finish: string;
  width: number;
  height: number;
  frame: string;
  opening: string;
  casing: string;
  quantity: number;
  pricelistPrice: number;
  price: number;
  sum: number;
  comment: string;
}
