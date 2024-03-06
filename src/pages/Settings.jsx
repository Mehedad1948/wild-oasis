import { useContext, useEffect } from 'react';
import UpdateSettingsForm from '../features/settings/UpdateSettingsForm';
import { store } from '../ContextProvider';

function Settings() {
  const { setPageTitle } = useContext(store);

  useEffect(() => {
    setPageTitle('Update Hotel Settings');
  }, []);

  return (
    <div>
      <UpdateSettingsForm />
    </div>
  );
}

export default Settings;
