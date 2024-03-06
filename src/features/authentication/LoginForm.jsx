import { useState } from 'react';
import Button from '../../ui/Button';
import Form from '../../ui/Form';
import SpinnerMini from '../../ui/SpinnerMini';
import Input from '../../ui/Input';
import FormRow from '../../ui/FormRow';
import { useLogin } from './useLogin';

function LoginForm() {
  const [email, setEmail] = useState('sample@wild-oasis.com');
  const [password, setPassword] = useState('123456');

  const { login, isLoading } = useLogin();

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;
    login(
      { email, password },
      {
        onSettled: () => {
          setEmail('');
          setPassword('');
        },
      }
    );
  }

  return (
    <Form
      className="!border-1 w-11/12 max-w-full !border-slate-300 !px-4
     !py-2 sm:w-[400px] sm:!px-8  sm:!py-4"
      onSubmit={handleSubmit}
    >
      <FormRow label="Email address">
        <Input
          className="w-full"
          type="email"
          id="email"
          // This makes this form better for password managers
          autoComplete="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoading}
        />
      </FormRow>
      <FormRow label="Password">
        <Input
          className="w-full"
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isLoading}
        />
      </FormRow>
      <FormRow>
        <Button size="large">
          {!isLoading ? (
            'Log in'
          ) : (
            <div className='w-full flex items-center justify-center'>
              <SpinnerMini />
            </div>
          )}
        </Button>
      </FormRow>
    </Form>
  );
}

export default LoginForm;
