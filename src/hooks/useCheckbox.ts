import { ChangeEvent, useState } from 'react';

export const useCheckbox = (defaultValue: boolean) => {
  const [value, setValue] = useState(defaultValue);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.checked);
  };

  return { value, onChange };
};
