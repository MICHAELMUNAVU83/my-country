import React, {useState} from 'react'

function Search() {
    const [search, setSearch]= useState('')
    const handleChange=(e)=>{
        setSearch(e.target.value)
    }
  return (
    <div>
        <input placeholder="search country"  onChange={handleChange}  value={search} />
    </div>
  )
}

export default Search