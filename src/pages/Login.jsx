import styled from 'styled-components';
import LoginForm from '../features/authentication/LoginForm';
import Logo from '../ui/Logo';

const LoginLayout = styled.main`
  min-height: 100vh;
  max-width: 100%;
  display: grid;
  grid-template-columns: 24rem;
  align-content: center;
  justify-content: center;
  gap: 2rem;
  background-color: var(--color-grey-50);
`;

function Login() {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center gap-4'>
      <Logo />
      <h1>Log in to your account</h1>
      <LoginForm />
    </div>
  );
}

export default Login;
