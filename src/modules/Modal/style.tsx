import styled from 'styled-components';
import { MediaQuery } from '~/styles/mediaQueries';
import { Description, Title } from '~/styles/typography';
import { ZINDEX } from '~/styles/zIndex';

export const ModalContainer = styled.div`
  border-radius: 6px;
  z-index: ${ZINDEX.MODAL};
  width: 100%;

  @media ${MediaQuery.MD} {
    width: 398px;
  }
`;

export const ModalBase = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  z-index: ${ZINDEX.MODAL};

  @media ${MediaQuery.MD} {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const ModalContent = styled.div`
  background: #ffffff;
  padding: 12px;
  ${Description};

  @media ${MediaQuery.MD} {
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }
`;

export const ModalHeader = styled.div`
  background: linear-gradient(347.96deg, #b83341 0%, #e03f50 100%);
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  padding: 12px 16px;
  ${Title};
`;

export const ModalCloseButton = styled.button`
  background: transparent;
  padding: 12px;
  width: unset;
`;

export const ModalOverlay = styled.div`
  background: #333333;
  opacity: 0.4;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: absolute;
  z-index: ${ZINDEX.MODAL_OVERLAY};
`;
