import { useSuspenseQuery } from '@tanstack/react-query';
import { categoryOptions } from '../../queries/category';
import styles from './styles.module.scss';
import { Link, Outlet } from '@tanstack/react-router';
import Button from '@mui/material/Button';

export const AutoCreator = () => {
  const { data } = useSuspenseQuery(categoryOptions);

  return (
    <div className={styles.container}>
      <h1>Lista kategorii</h1>
      <div className={styles.mainBox}>
        <div className={styles.category}>
          {data.map(({ id, name, description, identifier }) => (
            <Link
              to="/creator/$catName"
              params={{ catName: identifier }}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <div className={styles.singleCategory} key={id}>
                <h2>{name}</h2>
                <p>{description}</p>
              </div>
            </Link>
          ))}
          <div className={styles.addCategory}>
            <Link to="/creator/new">
              <Button variant="contained">Dodaj kategorie</Button>
            </Link>
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
};
