import React, { useState } from 'react'

const Tour = ({id, name, info, price, image, removeTour}) => {
  const [hasPressedReadMore, setHasPressedReadMore] = useState(false)
  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">{price}</h4>
        </div>
        <p>
          {hasPressedReadMore ? info : `${info.substring(0, 200)}...`}
          <button onClick={()=>setHasPressedReadMore(!hasPressedReadMore)}>
            {hasPressedReadMore ? 'Show Less' : 'Read More'}
          </button>
        </p>
        <button className="delete-btn" onClick={()=>removeTour(id)}>Not Interested</button>
      </footer>
    </article>
  )
}

export default Tour
