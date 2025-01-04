import { Box, Typography, Grid } from '@mui/material';
import carscreen from '../../screen/car.png';

interface Props {
  children?: React.ReactNode;
}

const CategoryPage = ({ children }: Props) => {
  return (
    <Box sx={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Konfigurator kategorii
      </Typography>

      <Grid container spacing={1}>
        <Box>
          <img src={carscreen} alt="" style={{ maxWidth: '100%' }} />
        </Box>
        <Box>{children}</Box>
      </Grid>
    </Box>
  );
};

export default CategoryPage;
