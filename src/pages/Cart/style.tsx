import { Link } from 'react-router-dom';
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
  text-align: center;
`;

export const CartItemCard = styled(VerticalItemCard)`
  cursor: pointer;
`;

export const CartCheckout = styled(Link)`
  margin-top: 16px;
  ${SubTitle};
  cursor: pointer;
  border: none;
  color: #ffffff;
  padding: 12px;
  text-align: center;
  max-width: 280px;
  text-decoration: none;
  display: inline-block;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  background: #528f33;
  margin-inline: auto;
`;
