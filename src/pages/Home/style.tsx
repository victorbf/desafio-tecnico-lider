import styled from 'styled-components';
import SearchInput from '~/components/SearchInput';
import { DefaultContainer } from '~/styles/container';
import { MediaQuery } from '~/styles/mediaQueries';
import { SubTitle, Title } from '~/styles/typography';

export const HomeContainer = styled.div`
  ${DefaultContainer};
`;

export const HomeList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 8px;

  @media ${MediaQuery.SM} {
    grid-template-columns: 1fr 1fr;
  }
  @media ${MediaQuery.MD} {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const HomeTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 20px;
  margin-top: 24px;
  border-bottom: 1px solid #dcdcdc;
  margin-bottom: 20px;

  h1 {
    ${Title};
    color: #572d31;
  }

  p {
    ${SubTitle};
    color: #572d31;
  }
`;

export const HomeSearchInput = styled(SearchInput)`
  margin-top: -24px;
`;
