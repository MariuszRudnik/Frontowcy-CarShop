import { useSuspenseQuery } from '@tanstack/react-query';
import { categoryOptions } from '../../queries/category';
import { Outlet, useMatches } from '@tanstack/react-router';

export const AutoCreator = () => {
  const { data } = useSuspenseQuery(categoryOptions);
  console.log(data);
  const matches = useMatches();
  console.log('Current route matches:', matches);

  return (
    <div>
      <h1>Dostępne kategorie</h1>
      <ul>
        {data.map(({ id, name }) => (
          <li key={id}>{name}</li>
        ))}
      </ul>
      mm
      <Outlet />
      kk
    </div>
  );
};
