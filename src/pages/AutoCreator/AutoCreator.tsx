import { Route } from '../../routes/creator';

export const AutoCreator = () => {
  const data = Route.useLoaderData();

  return (
    <div>
      <h1>Dostępne kategorie</h1>
      <ul>
        {data.map(({ name, id }) => (
          <li key={id}>{name}</li>
        ))}
      </ul>
    </div>
  );
};
