import React from 'react'

function MapViewer({ lat, lng }) {
  const src = `https://www.google.com/maps/embed/v1/view?key=YOUR_API_KEY&center=${lat},${lng}&zoom=14`;
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
  );
}

export default MapViewer;
