import React from "react"
import { Provider } from 'react-redux'
import store from './redux/store'
import "./App.scss"
import MapContainer from "./components/MapContainer"
import itba from './itba'
import FloorSelector from "./components/FloorSelector"

export default function App() {
  return (
    <Provider store={store}>
      <div id="map">
        <MapContainer className="container"
                      googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&key=${process.env.REACT_APP_MAPS_API_KEY}`}
                      containerElement={<div className="container" />}
                      mapElement={<div style={{width: '100%', height: '100%'}} />}
                      loadingElement={<h1>Loading...</h1>}
        />
        <FloorSelector building={itba} />
        <div className="control">
          <h1>Controls here</h1>
        </div>
      </div>
    </Provider>
  );
}
