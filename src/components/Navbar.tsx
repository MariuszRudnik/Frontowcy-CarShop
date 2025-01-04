import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import { Link } from '@tanstack/react-router';

export const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Typography variant="h6" component="div">
              CarShop
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <Link to="/">
                <Button color="inherit">Strona główna</Button>
              </Link>
              <Link to="/categories/$paramsId" params={{ paramsId: '1' }}>
                <Button color="inherit">Konfiguracja</Button>
              </Link>
              <Link to="/creator">
                <Button color="inherit">Kreator pojazdu</Button>
              </Link>
            </Box>
          </Box>
          <Box>
            <Button color="inherit" disabled>
              Zaloguj się
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
