import { useSuspenseQuery } from '@tanstack/react-query';
import { categoriesQuery } from '../../routes/categories/-loader';
import { usePartsByCategoryIdentifier } from '../../fetch/fetch.tsx';
import NextAndPrevComponent from './NextAndPrevComponent.tsx';
import styles from './CreatorStyle.module.scss';
import ListParts from './ListParts.tsx';
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
      <div className={styles.columnLayout}>
        <ListParts parts={parts} />
      </div>
      <NextAndPrevComponent categories={data} />
    </div>
  );
};

export default Steps;
