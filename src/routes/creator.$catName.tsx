import { useEffect } from 'react';
import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { partsOptions } from '../queries/parts';
import { useSuspenseQuery } from '@tanstack/react-query';
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { useDeleteCategoryMutation } from '../mutations/useDeleteCategoryMutation';
import { categoryOptions } from '../queries/category';
import { getCategoryId } from '../utils/getCategoryId';
import { useDeletePartMutation } from '../mutations/useDeletePartMutation';
import styles from '../styles/styles.module.scss';

const SingleCategory = () => {
  const { catName } = Route.useParams();
  const { data } = useSuspenseQuery(partsOptions(catName));
  const { data: catData } = useSuspenseQuery(categoryOptions);
  const { mutate: mutateCategory, isSuccess: isSuccessCategory } =
    useDeleteCategoryMutation();
  const { mutate: mutatePart, isSuccess: isSuccessPart } =
    useDeletePartMutation(catName);
  const navigate = useNavigate();

  const handleDeleteCategory = () => {
    mutateCategory(getCategoryId(catData, catName));
  };

  const handleDeletePart = (id: string) => {
    mutatePart(id);
  };

  const handleNavigate = () => {
    navigate({
      to: '/creator/add-parts/$category',
      params: { category: catName },
    });
  };

  useEffect(() => {
    if (!isSuccessCategory) return;

    navigate({ to: '/creator' });
  }, [isSuccessCategory, navigate]);

  useEffect(() => {
    if (!isSuccessPart) return;

    navigate({ to: '/creator/$catName', params: { catName } });
  }, [navigate, isSuccessPart, catName]);

  return (
    <div className={styles.table}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Nazwa</TableCell>
              <TableCell align="right">cena</TableCell>
              <TableCell align="right">Ilość sztuk</TableCell>
              <TableCell align="right">personalizowalny</TableCell>
              <TableCell align="right">
                <Button
                  variant="contained"
                  endIcon={<DeleteIcon />}
                  onClick={handleDeleteCategory}
                >
                  Usuń kategorie
                </Button>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.price}</TableCell>
                <TableCell align="right">{row.stock}</TableCell>
                <TableCell align="right">
                  {row.customizable ? 'Tak' : 'Nie'}
                </TableCell>
                <TableCell align="right">
                  <Button
                    variant="outlined"
                    endIcon={<DeleteIcon />}
                    onClick={() => handleDeletePart(row.id)}
                  >
                    Usuń element
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button
        variant="contained"
        startIcon={<AddCircleIcon />}
        sx={{ margin: '10px' }}
        onClick={handleNavigate}
      >
        Dodaj element
      </Button>
    </div>
  );
};

export const Route = createFileRoute('/creator/$catName')({
  component: SingleCategory,
  loader: ({ context, params }) => {
    const { queryClient } = context;
    const { catName } = params;

    return queryClient.ensureQueryData(partsOptions(catName));
  },
});
