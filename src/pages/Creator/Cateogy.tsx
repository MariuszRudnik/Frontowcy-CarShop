import { Box, Typography, Grid } from '@mui/material';
import carscreen from '../../screen/car.png';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

interface Props {
  children?: React.ReactNode;
}

const CategoryPage = ({ children }: Props) => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Box sx={{ padding: '20px' }}>
        <Typography variant="h4" gutterBottom>
          Konfigurator kategorii
        </Typography>

        <Grid container spacing={2}>
          <Box>
            <img src={carscreen} alt="" />
          </Box>
          <Box>{children}</Box>
        </Grid>
      </Box>
    </QueryClientProvider>
  );
};

export default CategoryPage;
