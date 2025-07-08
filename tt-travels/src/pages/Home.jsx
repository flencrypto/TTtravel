import React from 'react';
import ExploreNearby from '../components/ExploreNearby.jsx';
import MapViewer from '../components/MapViewer.jsx';

function Home() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-center mt-4">TT's Travels</h1>
      <ExploreNearby />
      <MapViewer />
    </div>
  );
}

export default Home;
