import { useState, useEffect } from "react"
import Gallery from "./components/Gallery"
import SearchBar from "./components/SearchBar"




function App() {
  let [search, setSearch] = useState("")
  let [message, setMessage] = useState("Search for songs")
  let [data, setData] = useState([])

  // useEffect(() => {
  //   let responseClone
  //   fetch("./data.json")
  //   .then(response => {
  //     responseClone = response.clone()
  //     return response.json()
  //   })
  //   .then(data => {
  //     setData(data.results);
  //   }, error => {
  //     console.log(error)
  //     responseClone.text().then(text => {
  //       console.log(text)
  //     })
  //   })
  // }, [])
  const API_URL = "https://itunes.apple.com/search?term="

  useEffect(() => {
    if (search) {
      const fetchData = async () => {
        document.title = `${search} Songs`
        const response = await fetch(API_URL + search)
        const resData = await response.json()
        // console.log(resData)
        if (resData.results.length > 0) {
          setData(resData.results)
        } else {
          setMessage("No results found")
        }
      }
      fetchData()
    }
  }, [search])

  const handleSearch = (e, searchTerm) => {
    e.preventDefault()
    setSearch(searchTerm)
  }

  const styles = {
    background: "linear-gradient(top,rgb(126,198,234)0%,rgb(70,179,234)45%,rgb(3,135,201)100%)" , 
    textAlign: "center",
    
  }

  return (
    <div className="App" style={styles}>
      <SearchBar handleSearch={handleSearch} />
      {message}
      <Gallery data={data} />
    </div>
  );
}

export default App;

//https://itunes.apple.com/search?term=the%20grateful%20dead

// app.js is the parent component
// search feature for searching songs
// grid display a list of songs
// list each song with a title, artist, album, and duration