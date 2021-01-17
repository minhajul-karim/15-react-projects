import React, { useState, useContext, useEffect, useCallback } from 'react'

// const url = ''
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [searchText, setSearchText] = useState('')
  const [foods, setFoods] = useState([])
  const [copyOfFoods, setCopyOfFoods] = useState([])

  const fetchData = async () => {
    setIsLoading(true)
    try {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
      const data = await response.json()
      setFoods(data.categories)
      setCopyOfFoods(data.categories)
      setIsLoading(false)
    } catch (error) {
      throw Error('Fetch failed')
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    if (searchText.length > 0) {
      const formatedText = searchText.toLowerCase()
      const filteredFoods = copyOfFoods.filter((food) =>
        food.strCategory.toLowerCase().includes(formatedText)
      )
      setFoods(filteredFoods)
    } else {
      setFoods(copyOfFoods)
    }
  }, [searchText, copyOfFoods])

  return (
    <AppContext.Provider value={{ isLoading, searchText, setSearchText, foods }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => useContext(AppContext)

export { AppContext, AppProvider }
