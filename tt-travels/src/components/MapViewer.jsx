import React from 'react';

function MapViewer() {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Map Viewer</h2>
      <div className="h-64 bg-gray-100 rounded" id="map-container">
        {/* TODO: Google Maps integration */}
      </div>
    </div>
  );
}

export default MapViewer;
