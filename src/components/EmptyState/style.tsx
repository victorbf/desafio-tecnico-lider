import styled from 'styled-components';
import { Title } from '~/styles/typography';

export const EmptyStateContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-inline: auto;
  margin-top: 24px;
`;

export const EmptyStateIcon = styled.div`
  margin-bottom: 8px;
  color: #572d31;
`;

export const EmptyStateText = styled.p`
  ${Title};
  text-align: center;
`;
