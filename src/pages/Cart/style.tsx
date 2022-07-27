import styled from 'styled-components';
import VerticalItemCard from '~/components/VerticalItemCard';
import { DefaultContainer } from '~/styles/container';
import { MediaQuery } from '~/styles/mediaQueries';
import { SubTitle } from '~/styles/typography';

export const CartContainer = styled.div`
  ${DefaultContainer};
  margin-top: 16px;
`;

export const CartList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 8px;

  @media ${MediaQuery.SM} {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media ${MediaQuery.MD} {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

export const CartItemText = styled.p`
  ${SubTitle};
  color: #b83341;
`;

export const CartItemCard = styled(VerticalItemCard)`
  cursor: pointer;
`;
