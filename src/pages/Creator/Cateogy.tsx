import { Box, Typography } from '@mui/material';
import carscreen from '../../screen/car.png';
import styles from './CreatorStyle.module.scss';

interface Props {
  children?: React.ReactNode;
}

const CategoryPage = ({ children }: Props) => {
  return (
    <Box sx={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Konfigurator kategorii
      </Typography>

      <div className={styles.container}>
        <Box>{children}</Box>
        <Box>
          <img src={carscreen} alt="" className={styles.image} />
        </Box>
      </div>
    </Box>
  );
};

export default CategoryPage;
