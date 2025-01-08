import { SingleCategory } from '../types';

export const getCategoryId = (array: SingleCategory[], shortName: string) => {
  const categoryId = array.filter((item) => item.identifier === shortName);

  return categoryId[0].id;
};
