import React, { createContext, useState } from 'react'

export const DataContext = createContext()

const DataProvider = ({ children }) => {
  let [data, setData] = useState(1);
  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  )
}

export default DataProvider