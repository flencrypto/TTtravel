import React from 'react'

function MapViewer({ lat, lng }) {
  const delta = 0.05
  const src = `https://www.openstreetmap.org/export/embed.html?bbox=${lng - delta},${lat - delta},${lng + delta},${lat + delta}&layer=mapnik&marker=${lat},${lng}`
  return (
    <div className="w-full h-64">
      <iframe
        title="map"
        src={src}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
      />
    </div>
  )
}

export default MapViewer
