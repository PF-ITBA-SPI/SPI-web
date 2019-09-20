import { GoogleApiWrapper, InfoWindow, Map, Marker } from "google-maps-react"
import React from "react"

class MapContainer extends React.Component {
  render() {
    return (
      <Map
        google={this.props.google}
        style={{
          width: '75%'
        }}
        zoom={18}
        initialCenter={{
          lat: -34.604064,
          lng: -58.36754
        }}
      >

        <Marker onClick={() => console.log('Marker click!')} name={'Current location'} />

        {/*<InfoWindow onClose={this.onInfoWindowClose}>*/}
        <InfoWindow onClose={() => console.log('Info window close!')}>
          <div>
            {/*<h1>{this.state.selectedPlace.name}</h1>*/}
            <h1>OLAAAA</h1>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_MAPS_API_KEY
})(MapContainer)
