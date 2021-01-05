import React, { useEffect, useState } from 'react'
import Values from 'values.js'
import Color from './Color'

function App() {
  const [color, setColor] = useState('#f15025')
  const [hasError, setHasError] = useState(false)
  const [listOfColors, setListOfColors] = useState(
    new Values('#f15025').all(10)
  )

  const handleChange = (event) => {
    setColor(event.target.value)
  }

  const handleSubmit = (event) => {
    try {
      const colors = new Values(color).all(10)
      setListOfColors(colors)
      console.log(colors)
      setHasError(false)
    } catch (error) {
      setHasError(true)
      console.error(error)
    }
    event.preventDefault()
  }

  return (
    <>
      <section className="container">
        <h3>Colors!</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="color">
            <input
              type="text"
              placeholder="#f15025"
              className={hasError ? 'error' : ''}
              value={color}
              onChange={handleChange}
            />
          </label>
          <button type="submit" className="btn">
            Submit
          </button>
        </form>
      </section>
      <section className="colors">
        {listOfColors.map((currentColor, index) => {
          const { weight, hex } = currentColor
          return <Color key={index} index={index} hex={hex} weight={weight} />
        })}
      </section>
    </>
  )
}

export default App
