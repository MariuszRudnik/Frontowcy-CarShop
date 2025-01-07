import { createFileRoute } from '@tanstack/react-router';
import { partsOptions } from '../queries/parts';
import { useSuspenseQuery } from '@tanstack/react-query';
import DeleteIcon from '@mui/icons-material/Delete';
import {
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';

const SingleCategory = () => {
  const { catName } = Route.useParams();
  const { data } = useSuspenseQuery(partsOptions(catName));
  console.log(data);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nazwa</TableCell>
            <TableCell align="right">cena</TableCell>
            <TableCell align="right">Ilość sztuk</TableCell>
            <TableCell align="right">personalizowalny</TableCell>
            <TableCell align="right"></TableCell>
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
                <IconButton aria-label="delete" size="large">
                  <DeleteIcon fontSize="inherit" />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
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
