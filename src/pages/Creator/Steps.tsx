import { useSuspenseQuery } from '@tanstack/react-query';
import { categoriesQuery } from '../../routes/categories/-loader';

interface Props {
  steep: string;
}

const Steps = ({ steep }: Props) => {
  const { data } = useSuspenseQuery(categoriesQuery);
  const filteredCategory = data?.filter(
    (category) => category.identifier === steep
  );
  console.log(`filteredCategory`, filteredCategory);

  return <div>{steep}</div>;
};

export default Steps;
