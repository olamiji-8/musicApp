import React from 'react'
import GalleryItem from './GalleryItem'

function Gallery({ data }) {

  let [openView, setOpenView] = React.useState(true)
  
  const display = data.map((item, i) => {
    return <GalleryItem key={i} item={item} openView={openView} setOpenView={setOpenView}/>
  })
  const styles = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    marginTop: "20px",
    backgroundImage: "linear-gradient(-45deg, #35C3F3 0%, #8b9fe8 20%, #e681d8 39%, #ffa9a4 76%, #FED2CE 100%)",
  }
  return (
    <div style={styles}>
      {display}
    </div>
  )
}

export default Gallery