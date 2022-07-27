import { useNavigate } from 'react-router-dom';
import {
  LoginContainer,
  LoginForm,
  UserInput,
  PasswordInput,
  LoginButton,
  LoginTitle,
} from './style';

const Login = () => {
  const navigate = useNavigate();

  return (
    <LoginContainer>
      <LoginForm
        onSubmit={(e) => {
          e.preventDefault();
          localStorage.setItem('isAuthenticated', 'true');
          navigate('/');
        }}
      >
        <LoginTitle>Login</LoginTitle>
        <UserInput type='text' id='nickname' defaultValue='Usuário' />
        <PasswordInput type='password' id='password' defaultValue='********' />
        <LoginButton type='submit'>Entrar no site!</LoginButton>
      </LoginForm>
    </LoginContainer>
  );
};

export default Login;
