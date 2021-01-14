import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from '../context'
import logo from '../images/logo.svg'

export default function Navbar() {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext()

  const displaySubmenu = (e) => {
    const navName = e.target.textContent
    const { left, right, bottom } = e.target.getBoundingClientRect()
    openSubmenu(navName, {
      buttonCenter: (left + right) / 2,
      bottom: bottom - 3,
    })
  }

  const handleMouseOver = (event) => {
    if (!event.target.classList.contains('link-btn')) closeSubmenu()
  }

  return (
    <nav
      className="nav"
      onMouseOver={handleMouseOver}
      onFocus={handleMouseOver}
    >
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="Stripe" className="nav-logo" />
          <button
            type="button"
            className="btn toggle-btn"
            onClick={openSidebar}
          >
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          <li>
            <button
              type="button"
              className="link-btn"
              onMouseOver={displaySubmenu}
              onFocus={displaySubmenu}
            >
              products
            </button>
          </li>
          <li>
            <button
              type="button"
              className="link-btn"
              onMouseOver={displaySubmenu}
              onFocus={displaySubmenu}
            >
              developers
            </button>
          </li>
          <li>
            <button
              type="button"
              className="link-btn"
              onMouseOver={displaySubmenu}
              onFocus={displaySubmenu}
            >
              company
            </button>
          </li>
        </ul>
        <button type="button" className="btn signin-btn">
          Sign In
        </button>
      </div>
    </nav>
  )
}
