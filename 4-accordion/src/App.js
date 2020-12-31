import React from 'react'
import data from './data'
import SingleQuestion from './Question'

function App() {
  return (
    <>
      <main>
        <div className="container">
          <div className="section-title">
            <h3>Frequently Asked Questions</h3>
          </div>
          <section className="info">
            {data.map(question => {
              return <SingleQuestion key={question.id} {...question} />
            })}
          </section>
        </div>
      </main>
    </>
  )
}

export default App
