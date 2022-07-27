import { css } from 'styled-components';
import { MediaQuery } from './mediaQueries';

const bottomNavigationHeight = 86;

const ContainerMaxWidth = {
  XS: '480px',
  SM: '960px',
  MD: '1280px',
  LG: '1920px',
  XL: '3840px',
};

export const DefaultContainer = css`
  max-width: ${ContainerMaxWidth.XS};
  padding: 0 16px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  padding-bottom: ${bottomNavigationHeight}px;

  @media ${MediaQuery.SM} {
    max-width: ${ContainerMaxWidth.SM};
  }

  @media ${MediaQuery.MD} {
    max-width: ${ContainerMaxWidth.MD};
    padding-bottom: 0;
  }

  @media ${MediaQuery.LG} {
    max-width: ${ContainerMaxWidth.LG};
    padding-bottom: 0;
  }

  @media ${MediaQuery.XL} {
    max-width: ${ContainerMaxWidth.XL};
    padding-bottom: 0;
  }
`;
