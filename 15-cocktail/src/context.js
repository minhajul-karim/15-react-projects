import React, { useState, useContext, useEffect, useCallback } from 'react'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = React.createContext()

const AppProvider = ({ children }) => (
  <AppContext.Provider value="hello">{children}</AppContext.Provider>
)
// make sure use
export const useGlobalContext = () => useContext(AppContext)

export { AppContext, AppProvider }
