import { useContext, useEffect } from 'react';
import SignupForm from '../features/authentication/SignupForm';
import { store } from '../ContextProvider';

function NewUsers() {
  const { setPageTitle } = useContext(store);

  useEffect(() => {
    setPageTitle('Create a new user');
  }, []);
  return <SignupForm />;
}

export default NewUsers;
