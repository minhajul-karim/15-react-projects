import React, { useEffect, useState } from 'react'
import { FaChevronRight, FaChevronLeft, FaQuoteRight } from 'react-icons/fa'
import data from './data'

export default function Slider() {
  const [people] = useState(data)
  const [currentPersonIndex, setCurrentPersonIndex] = useState(0)

  // Check if indices doesn't go out of bound
  useEffect(() => {
    const numberOfPeople = people.length
    if (currentPersonIndex === numberOfPeople) setCurrentPersonIndex(0)
    else if (currentPersonIndex < 0) setCurrentPersonIndex(numberOfPeople - 1)
  }, [currentPersonIndex, people])

  // Auto forward slide
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentPersonIndex((prevIndex) => prevIndex + 1)
    }, 3000)
    return () => clearInterval(intervalId)
  })

  return (
    <section className="section">
      <div className="title">
        <h2>Reviews</h2>
      </div>
      <div className="section-center">
        {people.map((person, index) => {
          const { id, image, name, title, quote } = person
          let className = 'nextSlide'
          if (index === currentPersonIndex) className = 'activeSlide'
          else if (
            index === currentPersonIndex - 1 ||
            (currentPersonIndex === 0 && index === people.length - 1)
          )
            className = 'lastSlide'
          return (
            <article key={id} className={className}>
              <img src={image} alt={name} className="person-img" />
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
              <FaQuoteRight className="icon" />
            </article>
          )
        })}
        <button
          className="prev"
          type="button"
          onClick={() => setCurrentPersonIndex((prevIndex) => prevIndex - 1)}
        >
          <FaChevronLeft />
        </button>
        <button
          className="next"
          type="button"
          onClick={() => setCurrentPersonIndex((prevIndex) => prevIndex + 1)}
        >
          <FaChevronRight />
        </button>
      </div>
    </section>
  )
}
