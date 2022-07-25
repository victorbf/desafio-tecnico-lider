import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderContainer = styled.div`
  background: linear-gradient(348deg, #b83341 0%, #e03f50 100%);
  padding: 32px 24px 60px 24px;
`;

export const HeaderTitle = styled.div`
  font-family: 'DM Serif Display';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #ffffff;
`;

export const HeaderLogoutButton = styled.button`
  font-size: 24px;
`;

export const HeaderCartLink = styled(Link)`
  font-size: 24px;
`;
