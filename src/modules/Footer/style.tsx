import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { MediaQuery } from '~/styles/mediaQueries';
import { Title } from '~/styles/typography';

export const FooterContainer = styled.div`
  padding: 26px 68px;
  display: flex;
  align-items: center;
  position: fixed;
  bottom: 0;
  justify-content: space-between;
  left: 0;
  right: 0;
  background: #ffffff;
  box-shadow: 0 -2px 8px -5px rgba(0, 0, 0, 0.75);

  @media ${MediaQuery.MD} {
    display: none;
  }
`;

export const FooterHomeLink = styled(Link)`
  ${Title};
  color: #572d31;
  text-decoration: none;
`;

export const FooterCartLink = styled(Link)`
  ${Title};
  color: #572d31;
  text-decoration: none;
`;
