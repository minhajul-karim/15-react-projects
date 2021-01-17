import React from 'react'
import Food from './Food'
import Loading from './Loading'
import { useGlobalContext } from '../context'

const FoodList = () => {
  const { isLoading, foods } = useGlobalContext()
  if (isLoading) {
    return <Loading />
  }
  if (foods.length === 0) {
    return <h2 className="section-title">No food found!</h2>
  }
  return (
    <section className="section">
      <h2 className="section-title">Foods</h2>
      <div className="cocktails-center">
        {foods.map((food) => {
          const { idCategory, strCategory, strCategoryThumb, strCategoryDescription } = food
          return (
            <Food
              key={idCategory}
              id={idCategory}
              name={strCategory}
              image={strCategoryThumb}
              description={strCategoryDescription}
            />
          )
        })}
      </div>
    </section>
  )
}

export default FoodList
