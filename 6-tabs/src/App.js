import React, { useEffect, useState, useCallback } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'

function App() {
  const [experiences, setExperiences] = useState([])
  const [experience, setExperience] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [activeButtonIndex, setActiveButtonIndex] = useState(0)

  const fetchExperiences = async () => {
    const response = await fetch('https://course-api.com/react-tabs-project')
    const data = await response.json()
    setExperiences(data)
    setIsLoading(false)
  }

  const clickHandler = useCallback(
    (order) => {
      const expIndex = experiences.findIndex((exp) => exp.order === order)
      setActiveButtonIndex(expIndex)
      setExperience(experiences[expIndex])
    },
    [experiences]
  )

  useEffect(() => {
    fetchExperiences()
  }, [])

  useEffect(() => {
    // Display the first experience by default
    if (experiences.length > 0) clickHandler(experiences[0].order)
  }, [experiences, clickHandler])

  if (isLoading) {
    return (
      <section className="section loading">
        <h2>Loading...</h2>
      </section>
    )
  }

  return (
    <section className="section">
      <div className="title">
        <h2>Experiences</h2>
        <div className="underline" />
      </div>
      <div className="jobs-center">
        <div className="btn-container">
          {experiences.map((exp, index) => (
            <button
              type="button"
              className={index === activeButtonIndex ? 'job-btn active-btn' : 'job-btn'}
              key={exp.id}
              onClick={() => clickHandler(exp.order)}
            >
              {exp.company}
            </button>
          ))}
        </div>
        <div className="job-info">
          <h3>{experience ? experience.title : ''}</h3>
          <h4>{experience.company}</h4>
          <p className="job-date">{experience.dates}</p>
          {experience.duties.map((duty) => (
            <div className="job-desc">
              <FaAngleDoubleRight className="job-icon" />
              <p>{duty}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default App
