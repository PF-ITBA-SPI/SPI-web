import { GoogleApiWrapper, InfoWindow, Map, Marker } from "google-maps-react"
import React from "react"
import apiClient from "../apiClient"

class MapContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { markers: [] };
  }

  renderMarker = (sample, key) =>
    <Marker key={key} position={{lat: sample.latitude, lng: sample.longitude}} />

  render() {
    return (
      <Map
        google={this.props.google}
        style={{
          width: '75%'
        }}
        zoom={18}
        initialCenter={{
          // ITBA
          lat: -34.604064,
          lng: -58.36754
        }}
      >

        {this.state.markers.map(this.renderMarker)}

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

  componentDidMount() {
    console.debug('Getting samples...')
    apiClient.getSamples().then(response => {
      const samples = response.data
      console.debug(`Got ${samples.length} samples:`, samples)
      this.setState( { markers: samples })
    })
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_MAPS_API_KEY
})(MapContainer)
