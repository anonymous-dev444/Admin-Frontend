import { createContext, useContext, useState } from "react";

const DataRefreshContext = createContext();

export const DataRefreshProvider = ({ children }) => {
  const [refreshFunctions, setRefreshFunctions] = useState({});

  // Register a refresh function with a unique key
  const registerRefresh = (key, fn) => {

    setRefreshFunctions((prev) => ({ ...prev, [key]: fn }));
  };

  // Call a refresh function by its key
  const callRefresh = (key) => {

    if (refreshFunctions[key]) {
      refreshFunctions[key]();
    } else {
      console.warn(`No refresh function registered for key: ${key}`);
    }
  };

  return (
    <DataRefreshContext.Provider value={{ registerRefresh, callRefresh }}>
      {children}
    </DataRefreshContext.Provider>
  );
};

export const useDataRefresh = () => useContext(DataRefreshContext);
