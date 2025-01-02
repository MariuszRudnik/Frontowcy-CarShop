import { useState } from 'react';
import {
  useCategory,
  usePartsByCategoryIdentifier,
} from '../../fetch/fetch.tsx';
import { Select, MenuItem, Button, FormControl, Box } from '@mui/material';
import { useRouter } from '@tanstack/react-router';

interface Props {
  steep: string;
}

const Steps = ({ steep }: Props) => {
  const [selectedPart, setSelectedPart] = useState('');
  const {
    data: category,
    isLoading: isCategoryLoading,
    error: categoryError,
  } = useCategory(steep);
  const {
    data: parts,
    isLoading: isPartsLoading,
    error: partsError,
  } = usePartsByCategoryIdentifier(category?.category.identifier || '');
  const router = useRouter();
  if (isCategoryLoading || isPartsLoading) return <div>Loading...</div>;
  if (categoryError) return <div>Error: {categoryError.message}</div>;
  if (partsError) return <div>Error: {partsError.message}</div>;

  const handleNext = () => {
    if (Number(steep) < category.lengthCategory) {
      router.navigate({ to: `/categories/${Number(steep) + 1}` });
    }
  };

  const handleBack = () => {
    if (Number(steep) > 1) {
      router.navigate({ to: `/categories/${Number(steep) - 1}` });
    }
  };

  return (
    <div>
      <h1>{category?.category.name}</h1>
      <p>{category?.category.description}</p>
      <FormControl fullWidth>
        <Select
          value={selectedPart}
          onChange={(e) => setSelectedPart(e.target.value)}
        >
          {parts?.map((part) => (
            <MenuItem key={part.id} value={part.id}>
              {part.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Box display="flex" justifyContent="space-between" mt={2}>
        <div>
          {Number(steep) > 1 && (
            <Button variant="contained" color="secondary" onClick={handleBack}>
              Back
            </Button>
          )}
        </div>

        <div>
          {Number(steep) < category.lengthCategory && (
            <Button variant="contained" color="primary" onClick={handleNext}>
              Next
            </Button>
          )}
        </div>
      </Box>
    </div>
  );
};

export default Steps;
