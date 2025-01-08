import { FormEvent, useEffect } from 'react';
import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { useInput } from '../hooks/useInput';
import { Button, Checkbox, FormControlLabel, TextField } from '@mui/material';
import styles from '../styles/styles.module.scss';
import { useSuspenseQuery } from '@tanstack/react-query';
import { categoryOptions } from '../queries/category';
import { getCategoryName } from '../utils/getCategoryName';
import { PartDto } from '../types';
import { useCheckbox } from '../hooks/useCheckbox';
import { useCreatePartMutation } from '../mutations/useCreatePartMutation';

const AddParts = () => {
  const { category } = Route.useParams();
  const inputName = useInput('');
  const inputShortName = useInput('');
  const inputPrice = useInput('');
  const inputCount = useInput('');
  const checkbox = useCheckbox(false);

  const { data } = useSuspenseQuery(categoryOptions);
  const categoryName = getCategoryName(data, category);

  const { mutate, isSuccess } = useCreatePartMutation();
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const dataForm: PartDto = {
      name: inputName.value,
      partId: inputShortName.value,
      price: Number(inputPrice.value),
      stock: Number(inputCount.value),
      category,
      customizable: checkbox.value,
      createdAt: new Date().toISOString(),
    };

    mutate(dataForm);
  };

  useEffect(() => {
    if (!isSuccess) return;
    navigate({ to: '/creator/$catName', params: { catName: category } });
  }, [isSuccess, navigate, category]);

  return (
    <div style={{ background: 'white', width: '100%' }}>
      <h1>Dodaj elementy do kategorii {categoryName}</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.AddNewParts}>
          <TextField
            id="filled-basic"
            label="Nazwa"
            variant="filled"
            required
            {...inputName}
          />
          <TextField
            id="filled-basic"
            label="Skrucona nazwa"
            variant="filled"
            required
            {...inputShortName}
          />
          <TextField
            id="filled-basic"
            label="Cena"
            variant="filled"
            required
            type="number"
            {...inputPrice}
          />
          <TextField
            id="filled-basic"
            label="Ilość sztuk"
            variant="filled"
            required
            type="number"
            {...inputCount}
          />
          <FormControlLabel
            control={<Checkbox {...checkbox} />}
            label="Personalizowalny"
          />
          <Button type="submit" variant="contained">
            Dodaj
          </Button>
        </div>
      </form>
    </div>
  );
};

export const Route = createFileRoute('/creator/add-parts/$category')({
  component: AddParts,
});
