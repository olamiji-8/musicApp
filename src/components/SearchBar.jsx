import React, { useState } from 'react'


function SearchBar(props) {
  let [searchTerm, setSearchTerm] = useState("")
  const handleChange = (e) => {
    setSearchTerm(e.target.value)
  }
  const styles = {display: "flex",justifyContent: "center",alignItems: "center",padding: "20px",}
  const inputStyles = {padding: "10px"}

  return (
    <form onSubmit={e => props.handleSearch(e, searchTerm)} style={styles}>
      <input type="text" placeholder="Search songs" value={searchTerm} onChange={handleChange} style={inputStyles}/>
      <input type="submit" style={inputStyles}/>
    </form>
  )
}

export default SearchBar