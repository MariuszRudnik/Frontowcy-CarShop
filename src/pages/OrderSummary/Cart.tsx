import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { addOrder, Part } from '../../fetch/fetch.tsx';
import { useRouter } from '@tanstack/react-router';
import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useOrderStore } from '../../store/creator.tsx';

interface Props {
  data: Part[];
  setIsAddToCart: (value: boolean) => void;
}

export default function IntroDivider({ data, setIsAddToCart }: Props) {
  const router = useRouter();
  const totalPrice = data.reduce((sum, part) => sum + part.price, 0);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const resetOrderStore = useOrderStore((state) => state.reset);

  const handlePrev = () => {
    router.history.back();
  };

  const mutation = useMutation({
    mutationFn: ({
      firstName,
      lastName,
      email,
      value,
      details,
    }: {
      firstName: string;
      lastName: string;
      email: string;
      value: number;
      details: string[];
    }) => addOrder(firstName, lastName, email, value, details),
    onSuccess: () => {
      resetOrderStore();
      setIsAddToCart(true);
      console.log('Order added successfully');
    },
    onError: (error) => {
      console.error('Failed to add order:', error);
    },
  });

  const handleOrder = () => {
    mutation.mutate({
      firstName,
      lastName,
      email,
      value: totalPrice,
      details: data.map((part) => part.id),
    });
  };

  return (
    <Card variant="outlined" sx={{ maxWidth: 360 }}>
      <Box sx={{ p: 2 }}>
        <Stack
          direction="row"
          sx={{ justifyContent: 'space-between', alignItems: 'center' }}
        >
          <Typography gutterBottom variant="h5" component="div">
            Podsumowanie zamówienia
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            ${totalPrice}
          </Typography>
        </Stack>
        <Box sx={{ color: 'text.secondary' }}>
          {data.map((part) => (
            <div key={part.id}>
              {part.name} -- {part.price}
            </div>
          ))}
        </Box>
      </Box>
      <Divider />
      <Box sx={{ p: 2 }}>
        <Stack spacing={2}>
          <TextField
            label="First Name"
            variant="outlined"
            fullWidth
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <TextField
            label="Last Name"
            variant="outlined"
            fullWidth
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <TextField
            label="Address Email"
            variant="outlined"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Stack direction="row" justifyContent="space-between" spacing={2}>
            <Button variant="outlined" color="secondary" onClick={handlePrev}>
              Cofnij
            </Button>
            <Button variant="contained" color="primary" onClick={handleOrder}>
              Zamówienie
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Card>
  );
}
