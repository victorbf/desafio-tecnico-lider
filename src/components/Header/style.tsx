import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { MediaQuery } from '~/styles/mediaQueries';
import { Title } from '~/styles/typography';

export const HeaderContainer = styled.div`
  background: linear-gradient(348deg, #b83341 0%, #e03f50 100%);
  padding: 32px 24px 60px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderTitle = styled(Link)`
  ${Title}
  color: #ffffff;
  text-decoration: none;
`;

export const HeaderLogoutButton = styled.button`
  font-size: 1.5rem;
  background: transparent;
  display: flex;
  align-items: center;
  border: none;
  color: #ffffff;
`;

export const HeaderCartLink = styled(Link)`
  display: none;

  @media ${MediaQuery.MD} {
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 8px;
    text-decoration: none;
    color: #ffffff;

    svg {
      margin-right: 4px;
    }
  }
`;

export const HeaderRightContent = styled.div`
  display: flex;
  align-items: center;
`;
