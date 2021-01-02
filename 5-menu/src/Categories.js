import React from 'react'

const Categories = ({ categories, filterCategory }) => (
  <div className="btn-container">
    {categories.map((category) => (
      <button key={category} type="button" className="filter-btn" onClick={() => filterCategory(category)}>
        {category}
      </button>
    ))}
  </div>
)

export default Categories
