import React, { useContext, useState } from 'react'

export const AppContext = React.createContext()

export const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false)
  const [currentNav, setCurrentNav] = useState('')
  const [submenuLocation, setSubmenuLocation] = useState({})

  const openSidebar = () => {
    setIsSidebarOpen(true)
  }

  const closeSidebar = () => {
    setIsSidebarOpen(false)
  }

  const openSubmenu = (name, coordinates) => {
    setCurrentNav(name)
    setSubmenuLocation(coordinates)
    setIsSubmenuOpen(true)
  }

  const closeSubmenu = () => {
    setIsSubmenuOpen(false)
  }

  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        isSubmenuOpen,
        currentNav,
        submenuLocation,
        openSidebar,
        closeSidebar,
        openSubmenu,
        closeSubmenu,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => useContext(AppContext)
