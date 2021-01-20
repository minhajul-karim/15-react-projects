import { CircularProgress } from '@material-ui/core'
import React from 'react'
import { useGlobalContext } from '../context'

import Food from './Food'

const FoodList = () => {
  const { hasError, isLoading, foods } = useGlobalContext()

  if (hasError) {
    return <p style={{ textAlign: 'center' }}>Something went wrong!</p>
  }
  if (isLoading) {
    return (
      <div className="circular-progress">
        <CircularProgress />
      </div>
    )
  }
  if (foods.length === 0) {
    return <h2 className="section-title">No food found!</h2>
  }
  return (
    <section className="section">
      <h2 className="section-title">Foods</h2>
      <div className="cocktails-center">
        {foods.map((food) => {
          const { idMeal, strMeal, strCategory, strArea, strMealThumb } = food
          return (
            <Food
              key={idMeal}
              id={idMeal}
              name={strMeal}
              category={strCategory}
              area={strArea}
              image={strMealThumb}
            />
          )
        })}
      </div>
    </section>
  )
}

export default FoodList
