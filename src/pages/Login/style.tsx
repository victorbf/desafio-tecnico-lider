import styled from 'styled-components';
import { Title } from '~/styles/typography';

export const LoginContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(347.96deg, #b83341 0%, #e03f50 100%);
`;
export const LoginTitle = styled.h1`
  ${Title};
`;
export const LoginForm = styled.form`
  background: #ffffff;
  max-width: 400px;
  border-radius: 12px;
  padding: 12px;
  margin-inline: 16px;
`;
export const UserInput = styled.input`
  margin-bottom: 8px;
`;
export const PasswordInput = styled.input`
  margin-bottom: 16px;
`;
export const LoginButton = styled.button`
  background: #e03f50;
`;
