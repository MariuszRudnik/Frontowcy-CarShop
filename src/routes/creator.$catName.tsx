import { useEffect } from 'react';
import { createFileRoute, Link, useNavigate } from '@tanstack/react-router';
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

const SingleCategory = () => {
  const { catName } = Route.useParams();
  const { data } = useSuspenseQuery(partsOptions(catName));
  const { data: catData } = useSuspenseQuery(categoryOptions);
  const { mutate, isSuccess } = useDeleteCategoryMutation();
  const navigate = useNavigate();

  const handleDelete = () => {
    const CategoryId = catData.filter((item) => item.identifier === catName);
    mutate(CategoryId[0].id);
  };

  useEffect(() => {
    if (!isSuccess) return;
    navigate({ to: '/creator' });
  }, [isSuccess, navigate]);

  return (
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
                onClick={handleDelete}
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
                <Button variant="outlined" endIcon={<DeleteIcon />}>
                  Usuń element
                </Button>
              </TableCell>
            </TableRow>
          ))}

          <Link
            to="/creator/add-parts/$category"
            params={{ category: catName }}
          >
            <Button
              variant="outlined"
              startIcon={<AddCircleIcon />}
              sx={{ margin: '10px' }}
            >
              Dodaj element
            </Button>
          </Link>
        </TableBody>
      </Table>
    </TableContainer>
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
