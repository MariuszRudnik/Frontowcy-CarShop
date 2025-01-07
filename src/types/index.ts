export type SingleCategory = {
  id: string;
  name: string;
  identifier: string;
  position: number;
  description: string;
  createdAt: string;
};

export type Singleparts = {
  id: string;
  name: string;
  price: number;
  partId: string;
  category: string;
  stock: number;
  customizable: boolean;
  createdAt: string;
};
