import { SingleCategory } from '../../types';
import { Route } from '../../routes/categories/$steepId.tsx';
import { Button } from '@mui/material';
import { useRouter } from '@tanstack/react-router';
import styles from './CreatorStyle.module.scss';

interface Props {
  categories: SingleCategory[];
}

function NextAndPrevComponent({ categories }: Props) {
  const router = useRouter();
  const sortedCategories = categories?.sort((a, b) => a.position - b.position);
  const { steepId } = Route.useParams();
  const index = sortedCategories.findIndex(
    (category) => category.identifier === steepId
  );
  console.log(sortedCategories);

  const handleNext = () => {
    router.navigate({
      to: `/categories/${sortedCategories[index + 1].identifier}`,
    });
  };
  const handleBack = () => {
    router.navigate({
      to: `/categories/${sortedCategories[index + -1].identifier}`,
    });
  };
  return (
    <div className={styles.flexSpaceBetween}>
      <div>
        {''}
        {index > 0 && (
          <Button variant="contained" onClick={handleBack}>
            Cofnij
          </Button>
        )}
      </div>
      <div>
        {index < sortedCategories.length - 1 && (
          <Button variant="contained" onClick={handleNext}>
            Dalej
          </Button>
        )}
      </div>
    </div>
  );
}

export default NextAndPrevComponent;
