import React, { useEffect, useRef, useState } from 'react'

import { useGlobalContext } from '../context'
import sublinks from '../data'

export default function Submenu() {
  const [submenues, setSubmenues] = useState([])
  const [submenuColClass, setSubmenuColClass] = useState('')
  const asideRef = useRef(null)
  const { isSubmenuOpen, currentNav, submenuLocation } = useGlobalContext()

  useEffect(() => {
    const { buttonCenter, bottom } = submenuLocation
    asideRef.current.style.left = `${buttonCenter}px`
    asideRef.current.style.top = `${bottom}px`
  }, [submenuLocation])

  useEffect(() => {
    const filteredSubmenu = sublinks.filter((link) => link.page === currentNav)
    if (filteredSubmenu[0]) {
      setSubmenues(filteredSubmenu[0].links)
    }
  }, [currentNav])

  useEffect(() => {
    switch (submenues.length) {
      case 4:
        setSubmenuColClass('col-4')
        break
      case 3:
        setSubmenuColClass('col-3')
        break
      default:
        setSubmenuColClass('col-2')
    }
  }, [submenues])

  return (
    <aside className={`submenu ${isSubmenuOpen && 'show'}`} ref={asideRef}>
      <section>
        <h4>{currentNav}</h4>
        <div className={`submenu-center && ${submenuColClass}`}>
          {submenues.map((submenu) => {
            const { id, label, icon, url } = submenu
            return (
              <a href={url} key={id}>
                {icon}
                {label}
              </a>
            )
          })}
        </div>
      </section>
    </aside>
  )
}
