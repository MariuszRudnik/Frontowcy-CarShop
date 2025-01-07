import { Box, Typography, Grid } from '@mui/material';
import { useSuspenseQuery } from '@tanstack/react-query';
import { partsQuery } from '../../routes/orderSummary/-loader';
import { useEffect, useState } from 'react';
import { useOrderStore } from '../../store/creator.tsx';

const CarDetails = () => {
  const { data } = useSuspenseQuery(partsQuery);
  const selectedPartIds = useOrderStore((state) => state.getSelectedPartIds());
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const filteredData = data.filter((part) =>
      selectedPartIds.includes(part.id)
    );
    const price = filteredData.reduce((sum, part) => sum + part.price, 0);
    setTotalPrice(price);
  }, [data, selectedPartIds]);

  return (
    <Box sx={{ textAlign: 'center', padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Model YXZ
      </Typography>{' '}
      <Typography variant="h4" gutterBottom>
        ${totalPrice}
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={4}>
          <Typography variant="h5" component="div">
            455<span style={{ fontSize: '16px' }}>km</span>
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Zasięg (WLTP)
          </Typography>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Typography variant="h5" component="div">
            340<span style={{ fontSize: '16px' }}>km/h</span>
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Maksymalna prędkość
          </Typography>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Typography variant="h5" component="div">
            6,9<span style={{ fontSize: '16px' }}>s</span>
          </Typography>
          <Typography variant="body2" color="textSecondary">
            0–100 km/h
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CarDetails;
