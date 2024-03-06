import { useMutation } from '@tanstack/react-query';
import { signup as signupApi } from '../../services/apiAuth';
import { toast } from 'react-hot-toast';

export function useSignup(params) {
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signupApi,
    onSuccess: (user) => {
      console.log('Signup', user);
      toast.success(`Account successfully created! please veify the email`);
    },
  });

  return { signup, isLoading };
}
