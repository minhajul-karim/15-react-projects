import React from 'react'
import { Link } from 'react-router-dom'

const Food = ({ id, name, image, description }) => (
  <article className="cocktail">
    <div className="img-container">
      <img src={image} alt={name} />
    </div>
    <div className="cocktail-footer">
      <h3>{name}</h3>
      <a href={`food/${id}`} className="btn btn-primary btn-details">
        details
      </a>
    </div>
  </article>
)

export default Food
