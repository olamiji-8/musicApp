import { useState, useEffect } from "react"
import Gallery from "./components/Gallery"
import SearchBar from "./components/SearchBar"




function App() {
  let [search, setSearch] = useState("")
  let [message, setMessage] = useState("Search for songs")
  let [data, setData] = useState([])

 
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
  };

  return (
    <div className="App">
      <SearchBar handleSearch={handleSearch} />
      {message}
      <Gallery data={data} />
    </div>
  );
}

export default App;

