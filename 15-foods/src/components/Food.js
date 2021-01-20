import React from 'react'

const Food = ({ id, name, image, category, area }) => (
  <article className="cocktail">
    <div className="img-container">
      <img src={image} alt={name} />
    </div>
    <div className="cocktail-footer">
      <h3>{name}</h3>
      <h4>{category}</h4>
      <p>{area}</p>
      <a href={`food/${id}`} className="btn btn-primary btn-details">
        details
      </a>
    </div>
  </article>
)

export default Food
