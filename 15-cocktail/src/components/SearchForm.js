import React from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const { searchText, setSearchText } = useGlobalContext()
  return (
    <section className="section search">
      <form className="search-form">
        <div className="form-control">
          <label htmlFor="name">
            search your favorite food
            <input
              type="text"
              name="name"
              id="name"
              value={searchText}
              onChange={(event) => setSearchText(event.target.value)}
            />
          </label>
        </div>
      </form>
    </section>
  )
}

export default SearchForm
