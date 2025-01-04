import { useSuspenseQuery } from '@tanstack/react-query';
import { categoriesQuery } from '../../routes/categories/-loader';
import { usePartsByCategoryIdentifier } from '../../fetch/fetch.tsx';
import { Button } from '@mui/material';

interface Props {
  steep: string;
}

const Steps = ({ steep }: Props) => {
  const { data } = useSuspenseQuery(categoriesQuery);
  const filteredCategory = data?.filter(
    (category) => category.identifier === steep
  );
  const {
    data: parts,
    isLoading,
    error,
  } = usePartsByCategoryIdentifier(filteredCategory[0]?.identifier || '');
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <div>
      <h1>{filteredCategory[0]?.name}</h1>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          margin: '10px',
        }}
      >
        {parts?.map((part) => (
          <Button variant="outlined" key={part.id}>
            {part.name}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Steps;
