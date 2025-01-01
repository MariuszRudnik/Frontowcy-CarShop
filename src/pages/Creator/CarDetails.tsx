import { Box, Typography, Grid } from '@mui/material';

const CarDetails = () => {
  return (
    <Box sx={{ textAlign: 'center', padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Model YXZ
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
