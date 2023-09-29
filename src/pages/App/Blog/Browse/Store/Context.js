import React, { createContext, useState, useContext } from 'react';

export const StoreContext = createContext({});

export const StoreContextProvider = ({ children }) => {
  const [store, setStore] = useState([]);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [total, setTotal] = useState(0);

  const [filter, setFilter] = useState({
    categoryIds: [],
    isMain: false,
    take: 10,
  });
  return (
    <StoreContext.Provider
      value={{
        store,
        setStore,
        rowsPerPage,
        setRowsPerPage,
        filter,
        setFilter,
        total,
        setTotal,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

const useStore = () => useContext(StoreContext);

export default useStore;
