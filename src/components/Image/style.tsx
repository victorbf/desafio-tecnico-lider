import styled from 'styled-components';

export const ImageContainer = styled.div`
  width: 104px;
  height: 104px;
  position: relative;
`;

export const ImageTag = styled.img`
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
  margin: 0;
`;

export const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;
