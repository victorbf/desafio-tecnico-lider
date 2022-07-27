import styled from 'styled-components';
import VerticalItemCard from '~/components/VerticalItemCard';

export const FruitModalButton = styled.button`
  background: #528f33;
  margin-top: 8px;

  &[aria-disabled='true'] {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const FruitModalContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 8px;
`;

export const FruitModalInput = styled.input`
  text-align: center;
`;

export const FruitModalCard = styled(VerticalItemCard)`
  background: transparent;
  box-shadow: none;
`;

export const FruitModalError = styled.p`
  height: 20px;
  color: #f45f45;
`;
