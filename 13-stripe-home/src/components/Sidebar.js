import { FaTimes } from 'react-icons/fa'
import sublinks from '../data'
import { useGlobalContext } from '../context'

export default function Sidebar() {
  const { isSidebarOpen, closeSidebar } = useGlobalContext()
  return (
    <aside className={`sidebar-wrapper ${isSidebarOpen && 'show'}`}>
      <div className="sidebar">
        <button type="button" className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
        <div className="sidebar-links">
          {sublinks.map((item, index) => {
            const { links, page } = item
            return (
              <article key={index}>
                <h4>{page}</h4>
                <div className="sidebar-sublinks">
                  {links.map((link, ind) => {
                    const { url, label, icon } = link
                    return (
                      <a key={ind} href={url}>
                        {icon}
                        {label}
                      </a>
                    )
                  })}
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </aside>
  )
}
