import React, { useEffect, useState } from 'react'

export default function Color({ index, hex, weight }) {
  const [shouldAlert, setShouldAlert] = useState(false)

  const clickHandler = () => {
    setShouldAlert(true)
    console.log(hex)
    navigator.clipboard.writeText(`#${hex}`)
  }

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShouldAlert(false)
      return () => clearTimeout(timeoutId)
    }, 2000)
  }, [shouldAlert])

  return (
    <article
      className={`color ${index > 10 && 'color-light'}`}
      style={{ backgroundColor: `#${hex}` }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{`#${hex}`}</p>
      <button type="button" className="copy-btn" onClick={clickHandler}>
        Copy
      </button>
      {shouldAlert && <p className="alert">Copied to clipboard</p>}
    </article>
  )
}
