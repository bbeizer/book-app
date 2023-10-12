import React, { useEffect, useState } from "react";
import Card from '../components/Card'
import axios from "axios"

const Search = () => {
  const [search, setSearch] = useState("")
  const [bookData, setData]=useState([]);

  const fetchBooks = () => {
    axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyA6SaT23KNiiA6DnUfUQTvFeyAcQEkwnSU'+'&maxResults=40')
        .then(res=>setData(res.data.items))
        .catch(err=>console.log(err))
  };

  const searchBook=(evt)=>{
    if(evt.key==="Enter")
    {
      fetchBooks();
    }
}
  return (
    <div>
      <div className="header">
          <h1>Search</h1>
      </div>
      <div className="search">
        <input className="search-input" input type="text" placeholder="Enter Your Book Name" value={search} onChange={e => setSearch(e.target.value)} 
        onKeyPress={searchBook} />
        <button className="search-button" onClick={fetchBooks}></button>

      </div>
      <div className="container">

        <Card book={bookData}/>
        <Card book={bookData}/>
        <Card book={bookData}/>
        <Card book={bookData}/>
        <Card book={bookData}/>
        <Card book={bookData}/>
        <Card book={bookData}/>
        <Card book={bookData}/>
      </div>

    </div>

  )
}

export default Search