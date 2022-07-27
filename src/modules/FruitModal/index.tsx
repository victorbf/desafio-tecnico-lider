import { useState } from 'react';
import {
  FruitModalButton,
  FruitModalContent,
  FruitModalCard,
  FruitModalInput,
  FruitModalError,
} from './style';

export type FruitModalProps = {
  name: string;
  imgUrl: string;
  buttonTitle: string;
  onSubmit: (value: number) => void;
  defaultValue?: number;
};

const FruitModal = ({ name, imgUrl, defaultValue, buttonTitle, onSubmit }: FruitModalProps) => {
  const [value, setValue] = useState(defaultValue || 1);
  const [error, setError] = useState(false);

  const handleChange = (value: string) => {
    const valueNumber = parseInt(value);

    setValue(valueNumber);
    if (!valueNumber) {
      setError(true);
      return;
    }
    setError(false);
  };

  return (
    <FruitModalCard imgUrl={imgUrl} name={name}>
      <FruitModalContent>
        <FruitModalInput
          type='text'
          id='quantity'
          inputMode='numeric'
          value={isNaN(value) ? '' : value}
          onChange={(e) => handleChange(e.target.value)}
          placeholder={`Quantidade de ${name}s`}
        />
        <FruitModalError>{error && 'Insira valor válido!'}</FruitModalError>
        <FruitModalButton
          disabled={error}
          aria-disabled={error}
          type='button'
          onClick={() => onSubmit(value)}
          title={buttonTitle}
        >
          {buttonTitle}
        </FruitModalButton>
      </FruitModalContent>
    </FruitModalCard>
  );
};

export default FruitModal;
