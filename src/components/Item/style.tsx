import styled from 'styled-components';
import { Description, SubTitle, Title } from '~/styles/typography';

export const ItemContainer = styled.div`
  display: grid;
  grid-template-columns: 104px 1fr;
  cursor: pointer;
  background: #ffffff;
  padding: 12px;
  border-radius: 12px;
  box-shadow: 2px 2px 8px -5px rgba(0, 0, 0, 0.75);
`;

export const ItemContent = styled.div`
  margin-left: 20px;
`;

export const ItemTitle = styled.h3`
  ${Title};
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  color: #572d31;
  justify-content: space-between;
`;

export const ItemDescription = styled.p`
  ${Description};
  color: #7a6769;
  overflow: hidden;
`;

export const ItemText = styled.p`
  ${SubTitle};
  display: flex;
  align-items: center;
`;
