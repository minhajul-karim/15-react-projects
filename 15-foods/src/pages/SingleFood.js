import React, { useCallback, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { CircularProgress } from '@material-ui/core'
import { useGlobalContext } from '../context'

const SingleFood = () => {
  const { id } = useParams()
  const { isLoading, setIsLoading } = useGlobalContext()
  const [hasError, setHasError] = useState(false)
  const [foodInfo, setFoodInfo] = useState([])
  const [name, setName] = useState('')
  const [category, setCategory] = useState('')
  const [area, setArea] = useState('')
  const [ingredients, setIngredients] = useState('')
  const [instructions, setInstructions] = useState('')
  const [image, setImage] = useState('')
  const [youtubeUrl, setYoutubeUrl] = useState('')

  const fetchData = useCallback(async () => {
    setIsLoading(true)
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      const data = await response.json()
      setFoodInfo(data.meals)
      setIsLoading(false)
    } catch (error) {
      setHasError(true)
      throw Error('Fetch failed')
    }
  }, [id, setIsLoading])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  useEffect(() => {
    if (foodInfo.length === 1) {
      const {
        strCategory,
        strArea,
        strInstructions,
        strMeal,
        strMealThumb,
        strYoutube,
      } = foodInfo[0]
      setName(strMeal)
      setCategory(strCategory)
      setArea(strArea)
      setInstructions(strInstructions)
      setImage(strMealThumb)
      setYoutubeUrl(strYoutube)
      // Create an array of ingredients
      const ingredientsArr = []
      Object.entries(foodInfo[0]).forEach(([key, value]) => {
        if (key.includes('strIngredient') && value) ingredientsArr.push(value)
      })
      // Generate a comma separated string from the array of ingrediants
      setIngredients(ingredientsArr.join(', '))
    }
  }, [foodInfo])

  if (hasError) {
    return <p style={{ textAlign: 'center', marginTop: '10rem' }}>Something went wrong!</p>
  }

  if (isLoading) {
    return (
      <div
        className="circular-progress"
        style={{
          height: 'calc(100vh - 80px)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <CircularProgress />
      </div>
    )
  }

  return (
    <section className="section cocktail-section">
      <Link className="btn btn-primary" to="/">
        back home
      </Link>
      <h2 className="section-title">{name}</h2>
      <div className="drink">
        <img src={image} alt={name} />
        <div className="drink-info">
          <p>
            <span className="drink-data">name:</span>
            {name}
          </p>
          <p>
            <span className="drink-data">category:</span>
            {category}
          </p>
          <p>
            <span className="drink-data">area:</span>
            {area}
          </p>
          <p>
            <span className="drink-data">instructions:</span>
            {instructions}
          </p>
          <p>
            <span className="drink-data">ingredients:</span>
            {ingredients}
          </p>
          <p>
            <span className="drink-data">youtube:</span>
            <a
              href={youtubeUrl}
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: 'underline', textTransform: 'lowercase' }}
            >
              {youtubeUrl}
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}

export default SingleFood
