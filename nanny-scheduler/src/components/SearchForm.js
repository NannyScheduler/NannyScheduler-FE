import React from "react";

export default function SearchForm(props) {
  const { search, setSearch } = props
  const handleChange = e => {
      setSearch({ ...search, [e.target.id]: e.target.value});
  }
  return (
          <section className="search-form">
            <form onSubmit={e => e.preventDefault()}>
              <label htmlFor="search">Search: </label>
              <input
                id="search"
                name="search"
                type="text"
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Search for a Character"
              />
            </form>
          </section>
  );
}
