import { Part } from '../../fetch/fetch.tsx';
import { Button } from '@mui/material';
import { useOrderStore } from '../../store/creator.tsx';

interface Props {
  parts: Part[] | undefined;
}
function ListParts({ parts }: Props) {
  const { toggleSelectedPartId } = useOrderStore();

  const handleButtonClick = (id: string) => {
    toggleSelectedPartId(id);
  };
  const selectedPartIds = useOrderStore((state) => state.getSelectedPartIds());
  return (
    <>
      {parts?.map((part) => (
        <Button
          variant={selectedPartIds.includes(part.id) ? 'contained' : 'outlined'}
          key={part.id}
          onClick={() => handleButtonClick(part.id)}
        >
          {part.name}
        </Button>
      ))}
    </>
  );
}

export default ListParts;
