import React from 'react'
import { FaBars } from 'react-icons/fa'

import { useGlobalContext } from './context'

export default function Home() {
  const { openSidebar, openModal } = useGlobalContext()

  return (
    <main>
      <button type="button" className="sidebar-toggle" onClick={openSidebar}>
        <FaBars />
      </button>
      <button type="button" className="btn" onClick={openModal}>
        Show Modal
      </button>
    </main>
  )
}
