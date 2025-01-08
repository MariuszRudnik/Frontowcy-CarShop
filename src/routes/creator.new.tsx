import { Button, TextField } from '@mui/material';
import { createFileRoute, useNavigate } from '@tanstack/react-router';
import styles from '../styles/styles.module.scss';
import { useSuspenseQuery } from '@tanstack/react-query';
import { categoryOptions } from '../queries/category';
import { useInput } from '../hooks/useInput';
import { FormEvent, useEffect } from 'react';
import { SingleCategoryDto } from '../types';
import { useCreateCategoryMutation } from '../mutations/useCreateCategoryMutation';

const New = () => {
  const inputName = useInput('');
  const inputDesc = useInput('');
  const inputShortName = useInput('');

  const { data } = useSuspenseQuery(categoryOptions);
  const { mutate, isSuccess } = useCreateCategoryMutation();
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const formData: SingleCategoryDto = {
      name: inputName.value,
      description: inputDesc.value,
      identifier: inputShortName.value,
      position: data.length + 1,
      createdAt: new Date().toISOString(),
    };

    mutate(formData);
  };

  useEffect(() => {
    if (!isSuccess) return;
    navigate({ to: '/creator' });
  }, [isSuccess, navigate]);

  return (
    <div style={{ background: 'white', width: '100%' }}>
      <h1>Dodaj Kategorie numer {data.length + 1}</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.AddNewCategoty}>
          <TextField
            id="filled-basic"
            label="Nazwa"
            variant="filled"
            required
            {...inputName}
          />
          <TextField
            id="filled-basic"
            label="Opis"
            variant="filled"
            required
            {...inputDesc}
          />
          <TextField
            id="filled-basic"
            label="Skrucona Nazwa"
            variant="filled"
            required
            {...inputShortName}
          />
          <Button type="submit" variant="contained">
            Dodaj
          </Button>
        </div>
      </form>
    </div>
  );
};

export const Route = createFileRoute('/creator/new')({
  component: New,
});
