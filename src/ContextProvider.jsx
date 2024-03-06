import { createContext, useState } from 'react';

export const store = createContext();

function ContextProvider({ children }) {
  const [pageTitle, setPageTitle] = useState('test');

  return (
    <store.Provider value={{ pageTitle, setPageTitle }}>
      {children}
    </store.Provider>
  );
}

export default ContextProvider;
