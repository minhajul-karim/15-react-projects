import React, { useState, useEffect } from 'react'
import Categories from './Categories'
import Menu from './Menu'
import items from './data'

const listOfCategories = items.map((item) => item.category)
const uniqueCategories = ['all', ...new Set(listOfCategories)]

function App() {
  const [menuItems, setMenuItems] = useState(items)
  const [categories, setCategories] = useState([])

  const filterCategory = (category) => {
    if (category === 'all') setMenuItems(items)
    else {
      const filteredItems = items.filter((item) => item.category === category)
      setMenuItems(filteredItems)
    }
  }

  useEffect(() => {
    setCategories(uniqueCategories)
  }, [])

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Menu</h2>
          <div className="underline" />
        </div>
        <Categories categories={categories} filterCategory={filterCategory} />
        <Menu items={menuItems} />
      </section>
    </main>
  )
}

export default App
