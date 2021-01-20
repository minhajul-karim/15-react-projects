import React, { useEffect, useRef } from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const { searchText, setSearchText } = useGlobalContext()
  const inputRef = useRef('')

  // Focus the search field
  useEffect(() => {
    inputRef.current.focus()
  }, [])

  return (
    <section className="section search">
      <form className="search-form" onSubmit={(event) => event.preventDefault()}>
        <div className="form-control">
          <label htmlFor="name">
            search your favorite food
            <input
              type="text"
              name="name"
              id="name"
              value={searchText}
              onChange={(event) => setSearchText(event.target.value)}
              ref={inputRef}
            />
          </label>
        </div>
      </form>
    </section>
  )
}

export default SearchForm
