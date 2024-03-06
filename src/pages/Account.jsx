import UpdateUserDataForm from '../features/authentication/UpdateUserDataForm';
import UpdatePasswordForm from '../features/authentication/UpdatePasswordForm';
import { useContext, useEffect } from 'react';
import { store } from '../ContextProvider';

function Account() {
  const { setPageTitle } = useContext(store);

  useEffect(() => {
    setPageTitle('Update your account');
  }, []);

  return (
    <>
        <h3>Update user data</h3>

      <div className="flex items-center">
        <UpdateUserDataForm />
      </div>

      <div className="flex items-center">
        <h3>Update password</h3>
        <UpdatePasswordForm />
      </div>
    </>
  );
}

export default Account;
