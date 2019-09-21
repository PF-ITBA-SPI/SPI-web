import React from "react"
import "./App.scss"
import MapContainer2 from "./components/MapContainer2"

export default function App() {
  return (
    <div id="map">
      <MapContainer2 className="container"
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&key=${process.env.REACT_APP_MAPS_API_KEY}`}
        containerElement={<div className="container" />}
        mapElement={<div style={{width: '100%', height: '100%'}} />}
        loadingElement={<h1>Loading...</h1>}
      />
      <button style={{
        position: 'absolute',
        bottom: '10%',
        left: '68%',
      }}>Hola</button>
      <div className="control">
        <h1>Controls here</h1>
      </div>
    </div>
  );
}
