import styled from 'styled-components';
import { Title, SubTitle } from '~/styles/typography';

export const VerticalItemCardContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background: #ffffff;
  padding: 12px;
  border-radius: 12px;
  box-shadow: 2px 2px 8px -5px rgba(0, 0, 0, 0.75);
`;

export const VerticalItemCardContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const VerticalItemCardTitle = styled.div`
  ${Title};
  color: #572d31;
`;

export const VerticalItemCardSubTitle = styled.div`
  ${SubTitle};
  color: #7a6769;
`;
