import React, { useState } from 'react'

function PhotoJournal() {
  const [photos, setPhotos] = useState([])

  function handleUpload(e) {
    const files = Array.from(e.target.files)
    const urls = files.map((f) => URL.createObjectURL(f))
    setPhotos((p) => [...p, ...urls])
  }

  return (
    <div>
      <input type="file" multiple onChange={handleUpload} />
      <div className="grid grid-cols-3 gap-2 mt-4">
        {photos.map((src, i) => (
          <img key={i} src={src} alt="" className="w-full h-32 object-cover" />
        ))}
      </div>
    </div>
  )
}

export default PhotoJournal
