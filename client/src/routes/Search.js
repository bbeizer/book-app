import React from 'react'
import Card from '../components/Card'

const Search = () => {
  return (
    <div>
      <div className="header">
          <h1>Search</h1>
      </div>
      <div className="search">
        <input type="text" placeholder="Enter Your Book Name"></input>
      </div>
      <div className="container">
        <Card />  
      </div>

    </div>

  )
}

export default Search