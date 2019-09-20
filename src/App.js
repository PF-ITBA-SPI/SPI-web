import React from "react"
import "./App.scss"
import MapContainer from "./components/MapContainer"

export default function App() {
  return (
    <div id="map">
      <MapContainer class="container" />
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
