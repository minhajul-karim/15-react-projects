import React, { useState } from 'react'
import data from './data'
import List from './List'

function App() {
  const [people, setPeople] = useState(data)
  return (
    <main>
      <section className="container">
        {people.length > 0 ? <h3>{people.length} bithdays today!</h3> : <h3>No bithdays today!</h3>}
        <List people={people} />
        {people.length > 0 && <button onClick={() => setPeople([])}>Clear All</button>}
      </section>
    </main>
  )
}

export default App
