import { useSuspenseQuery } from '@tanstack/react-query';
import { partsQuery } from '../../routes/orderSummary/-loader';
import { useOrderStore } from '../../store/creator.tsx';
import Cart from './Cart.tsx';
import { useState } from 'react';
import AddCarrInfo from './AddCarrInfo.tsx';

function OrderSummary() {
  const [isAddToCart, setIsAddToCart] = useState<boolean>(false);
  const { data } = useSuspenseQuery(partsQuery);
  const selectedPartIds = useOrderStore((state) => state.getSelectedPartIds());

  const filteredData = data.filter((part) => selectedPartIds.includes(part.id));

  return (
    <div>
      <div style={{ margin: '10px' }}>
        {isAddToCart ? (
          <AddCarrInfo />
        ) : (
          <Cart data={filteredData} setIsAddToCart={setIsAddToCart} />
        )}
      </div>
    </div>
  );
}

export default OrderSummary;
