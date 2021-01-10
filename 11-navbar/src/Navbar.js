import React, { useState, useRef, useEffect } from 'react'
import { FaBars } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'

const Navbar = () => {
  const [shouldDisplayNav, setShouldDisplayNav] = useState(false)
  const ulRef = useRef(null)
  const linksContainerRef = useRef(null)

  useEffect(() => {
    if (shouldDisplayNav) {
      const ulHeight = ulRef.current.getBoundingClientRect()
      linksContainerRef.current.style.height = `${ulHeight.height}px`
    } else linksContainerRef.current.style.height = '0px'
  }, [shouldDisplayNav])

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="Logo" className="logo" />
          <button
            type="button"
            className="nav-toggle"
            onClick={() => setShouldDisplayNav((prevStatus) => !prevStatus)}
          >
            <FaBars />
          </button>
        </div>
        <div className="links-container" ref={linksContainerRef}>
          <ul className="links" ref={ulRef}>
            {links.map((link) => {
              const { id, url, text } = link
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              )
            })}
          </ul>
        </div>
        <ul className="social-icons">
          {social.map((item) => {
            const { id, url, icon } = item
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
