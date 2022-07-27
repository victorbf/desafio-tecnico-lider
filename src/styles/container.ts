import { css } from 'styled-components';
import { MediaQuery } from './mediaQueries';

const bottomNavigationHeight = 86;

const ContainerMaxWidth = {
  XS: '480px',
  SM: '960px',
  MD: '1280px',
  LG: '1424px',
  XL: '1824px',
};

export const DefaultContainer = css`
  max-width: ${ContainerMaxWidth.XS};
  padding: 0 16px;
  margin-inline: auto;
  position: relative;
  padding-bottom: ${bottomNavigationHeight}px;

  @media ${MediaQuery.SM} {
    max-width: ${ContainerMaxWidth.SM};
    padding-right: 24px;
    padding-left: 24px;
  }

  @media ${MediaQuery.MD} {
    max-width: ${ContainerMaxWidth.MD};
    padding: 0 24px;
  }

  @media ${MediaQuery.LG} {
    max-width: ${ContainerMaxWidth.LG};
    padding: 0 32px;
  }

  @media ${MediaQuery.XL} {
    max-width: ${ContainerMaxWidth.XL};
    padding-bottom: 0 32px;
  }
`;
