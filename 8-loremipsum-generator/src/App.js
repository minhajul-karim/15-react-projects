import React, { useState } from 'react'
import data from './data'

function App() {
  const [arrayOfParagraphs] = useState(data)
  const [numberOfParagraphs, setNumberOfParagraphs] = useState(1)
  const [outputParagraphs, setOutputParagraphs] = useState([])

  const handleChange = (event) => {
    setNumberOfParagraphs(event.target.value)
  }

  const handleSubmit = (event) => {
    let tempParagraphs = []
    const lenOfArrayOfParagraphs = arrayOfParagraphs.length
    if (
      numberOfParagraphs > 0 &&
      numberOfParagraphs <= lenOfArrayOfParagraphs
    ) {
      tempParagraphs = arrayOfParagraphs.slice(0, numberOfParagraphs)
    } else if (numberOfParagraphs > lenOfArrayOfParagraphs) {
      tempParagraphs = arrayOfParagraphs.slice(0, lenOfArrayOfParagraphs)
    }
    setOutputParagraphs(tempParagraphs)
    event.preventDefault()
  }

  return (
    <section className="section-center">
      <h3>Generate Lorem Ipsum</h3>
      <form onSubmit={handleSubmit} className="lorem-form">
        <label htmlFor="paragraph">
          Paragraphs
          <input
            type="text"
            name="amount"
            id="paragraph"
            value={numberOfParagraphs}
            onChange={handleChange}
          />
          <button type="submit" className="btn">
            Generate
          </button>
        </label>
      </form>
      <article className="lorem-text">
        {outputParagraphs.map((paragraph) => (
          <p key={paragraph.length}>{paragraph}</p>
        ))}
      </article>
    </section>
  )
}

export default App
