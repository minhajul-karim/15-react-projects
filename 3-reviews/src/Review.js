import React, { useState } from 'react'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa'
import people from './data'

const Review = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const { name, image, job, text } = people[currentIndex]

  // Next review
  const nextReviewHandler = () => {
    setCurrentIndex((prevIndex) => {
      const lastReviewIndex = people.length - 1
      if (prevIndex < lastReviewIndex) return prevIndex + 1
      else return 0
    })
  }

  // Previous review
  const prevReviewHandler = () => {
    setCurrentIndex((prevIndex) => {
      const lastReviewIndex = people.length - 1
      if (prevIndex > 0) return prevIndex - 1
      else return lastReviewIndex
    })
  }

  // Random number generator
  const randomGenerator = (min, max) =>
    Math.floor(Math.random() * (max - min + 1) + min)

  // Random review
  const randomReviewHandler = () => {
    const min = 0
    const max = people.length - 1
    let randomIndex = randomGenerator(min, max)
    while (randomIndex === currentIndex) {
      randomIndex = randomGenerator(min, max)
    }
    setCurrentIndex(randomIndex)
  }

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevReviewHandler}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextReviewHandler}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={randomReviewHandler}>
        Random Review
      </button>
    </article>
  )
}

export default Review
