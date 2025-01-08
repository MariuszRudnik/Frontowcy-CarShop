import { SingleCategory } from '../types';

export const getCategoryName = (array: SingleCategory[], shortName: string) => {
  const tab = array.filter((item) => item.identifier === shortName);

  return tab[0].name;
};
