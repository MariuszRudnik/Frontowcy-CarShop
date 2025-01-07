import { Button, TextField } from '@mui/material';
import { createFileRoute } from '@tanstack/react-router';
import styles from '../styles/styles.module.scss';
import { useSuspenseQuery } from '@tanstack/react-query';
import { categoryOptions } from '../queries/category';

const New = () => {
  const { data } = useSuspenseQuery(categoryOptions);

  return (
    <div style={{ background: 'white', width: '100%' }}>
      <h1>Dodaj Kategorie numer {data.length + 1}</h1>
      <form action="">
        <div className={styles.AddNewCategoty}>
          <TextField id="filled-basic" label="Nazwa" variant="filled" />
          <TextField id="filled-basic" label="Opis" variant="filled" />
          <TextField
            id="filled-basic"
            label="Skrucona Nazwa"
            variant="filled"
          />
          <Button variant="contained">Dodaj</Button>
        </div>
      </form>
    </div>
  );
};

export const Route = createFileRoute('/creator/new')({
  component: New,
});
