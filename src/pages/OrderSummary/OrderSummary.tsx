import { useSuspenseQuery } from '@tanstack/react-query';
import { partsQuery } from '../../routes/orderSummary/-loader';
import { useOrderStore } from '../../store/creator.tsx';

function OrderSummary() {
  const { data } = useSuspenseQuery(partsQuery);
  const selectedPartIds = useOrderStore((state) => state.getSelectedPartIds());

  const filteredData = data.filter((part) => selectedPartIds.includes(part.id));
  const totalPrice = filteredData.reduce((sum, part) => sum + part.price, 0);

  return (
    <div>
      {' '}
      <div>
        {filteredData.map((part) => (
          <div key={part.id}>
            {part.name} -- {part.price}
          </div>
        ))}
      </div>
      <div>
        <strong>Podsumowanie: {totalPrice}</strong>
      </div>
    </div>
  );
}

export default OrderSummary;
