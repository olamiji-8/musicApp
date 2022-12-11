import React, { useState } from 'react'

function GalleryItem({ item }) {
  let [view, setView] = useState(false)
  const handleViewChange = () => {
    setView(!view)
  }

    const style = {
    width: "200px",
    height: "200px",
    padding: "4px 10px",
    margin: "40px",
    backgroundColor: "#f5f5f5",
    textAlign: "center",
    boxShadow: "0 0 10px 0 rgba(0,0,0,0.2)",
    transition: "0.3s",
    display: "inline-block",
    borderRadius: "10px",
  }

  const detailedStyle = {
    display: "inline-block",
    width: "300px",
    height: "300px",
    padding: "4px 10px",
    margin: "40px",
    backgroundColor: "#f5f5f5",
    textAlign: "center",
    boxShadow: "0 0 10px 0 rgba(0,0,0,0.2)",
    transition: "0.3s",
    borderRadius: "10px",
  }
  
  const simpleView = () => {
    return (
      <div style={style}>
        <h4>{item.trackName}</h4>
        <p>{item.artistName}</p>
        <p>{item.primaryGenreName}</p>        
      </div>
    )
  }
  const detailedView = () => {
    return (
      <div style={detailedStyle}>
        <h4>{item.trackName}</h4>
        <p>{item.artistName}</p>
        <img src={item.artworkUrl100} alt={item.trackName} />
        <audio src={item.previewUrl} controls></audio>
      </div>
    )
  }

  return (
    <div onClick={handleViewChange}>
      {view ? detailedView() : simpleView()}
    </div>
  )
}

export default GalleryItem