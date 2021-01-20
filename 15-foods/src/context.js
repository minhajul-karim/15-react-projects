import React, { useContext, useEffect, useState } from 'react'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [searchText, setSearchText] = useState('')
  const [foods, setFoods] = useState([])
  const [copyOfFoods, setCopyOfFoods] = useState([])

  const fetchData = async () => {
    setIsLoading(true)
    try {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=b')
      const data = await response.json()
      setFoods(data.meals)
      setCopyOfFoods(data.meals)
      setIsLoading(false)
    } catch (error) {
      setHasError(true)
      throw new Error('Fetch failed')
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    if (searchText.length > 0) {
      const formatedText = searchText.toLowerCase()
      const filteredFoods = copyOfFoods.filter((food) =>
        food.strMeal.toLowerCase().includes(formatedText)
      )
      setFoods(filteredFoods)
    } else {
      setFoods(copyOfFoods)
    }
  }, [searchText, copyOfFoods])

  return (
    <AppContext.Provider
      value={{ hasError, isLoading, setIsLoading, searchText, setSearchText, foods }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => useContext(AppContext)

export { AppContext, AppProvider }
