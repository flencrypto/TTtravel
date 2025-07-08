import React from 'react'
import { useStore } from '../services/store'

function PhotoJournal() {
  const entries = useStore((s) => s.journal)
  const addEntry = useStore((s) => s.addEntry)

  function handleUpload(e) {
    const files = Array.from(e.target.files)
    const urls = files.map((f) => URL.createObjectURL(f))
    urls.forEach((src) => addEntry({ src, date: new Date().toISOString() }))
  }

  return (
    <div>
      <input type="file" multiple onChange={handleUpload} />
      <div className="grid grid-cols-3 gap-2 mt-4">
        {entries.map((entry, i) => (
          <img key={i} src={entry.src} alt="" className="w-full h-32 object-cover" />
        ))}
      </div>
    </div>
  )
}

export default PhotoJournal
