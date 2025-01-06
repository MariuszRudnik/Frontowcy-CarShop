import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import { useRouter } from '@tanstack/react-router';

function AddCarrInfo() {
  const router = useRouter();

  const handleGoToMainPage = () => {
    router.navigate({ to: '/' });
  };

  return (
    <Box>
      <Alert severity="success" sx={{ fontSize: '1.5rem' }}>
        dodano samochód
      </Alert>
      <Button
        variant="contained"
        color="primary"
        size="large"
        onClick={handleGoToMainPage}
        sx={{ mt: 2 }}
      >
        Przejdź do strony głównej
      </Button>
    </Box>
  );
}

export default AddCarrInfo;
