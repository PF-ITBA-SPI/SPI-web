import React from 'react';
import './App.css';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import config from './config'

const mapStyles = {
  width: '100%',
  height: '100%',
};

function App() {
  return (
    <Map
      google={this.props.google}
      zoom={18}
      style={mapStyles}
      initialCenter={{ lat: 47.444, lng: -122.176}}
    />
    // <div>
    //   <div id="map"/>
    //   <script src={`https://maps.googleapis.com/maps/api/js?key=${process.env.MAPS_API_KEY}&callback=initMap`} async defer/>
    // </div>

  );
}

export default GoogleApiWrapper({
  apiKey: config.mapsApiKey
})(App);
