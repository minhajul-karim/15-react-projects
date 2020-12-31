import React, { useEffect, useRef, useState } from 'react'
import { BiMinus, BiPlus } from "react-icons/bi"

const Question = (props) => {
  const {title, info} = props
  const [content, setContent] = useState('')
  const [hasShownContnet, setHasShownContent] = useState(false)
  const [maxHeight, setMaxHeight] = useState('0px')
  const [boxShadow, setBoxShadow] = useState('none')

  const panel = useRef(null)

  const buttonPressHandler = () => {
    setHasShownContent(prevState => !prevState)
    setBoxShadow('0px 8px 10px -6px #777')
  }

  useEffect(() => {
    setContent(info)
    if (hasShownContnet) {
      setMaxHeight(panel.current.scrollHeight)
      setBoxShadow('0px 8px 10px -6px #777')
    } else {
      setMaxHeight('0px')
      setBoxShadow('none')
    }
  }, [hasShownContnet, info])

  return (
    <article className="question" style={{boxShadow: boxShadow}}>
      <header>
        <h4>{title}</h4>
        <div>
          <button className="btn" onClick={buttonPressHandler}>
            {hasShownContnet ? <BiMinus color="#FF0000" size="lg" /> : <BiPlus color="#FF0000" size="lg" />}
          </button>
        </div>
      </header>
      <div className="panel" style={{ maxHeight: maxHeight }} ref={panel}>
        <p>{content}</p>
      </div>
    </article>
  )
}

export default Question
