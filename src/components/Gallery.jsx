import React from 'react'
import GalleryItem from './GalleryItem'

function Gallery({ data }) {

  let [openView, setOpenView] = React.useState(true)
  
  const display = data.map((item, i) => {
    return <GalleryItem key={i} item={item} openView={openView} setOpenView={setOpenView}/>
  })

  return (
    <div style={{backgroundColor:"white",display: "flex",flexWrap: "wrap",justifyContent: "center",alignItems: "center",padding: "20px",marginTop: "20px",}}>
      {display}
    </div>
  )
}

export default Gallery