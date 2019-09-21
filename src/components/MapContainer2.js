import { GoogleMap, withGoogleMap, withScriptjs, Marker, GroundOverlay } from "react-google-maps"
import React from "react"
import PropTypes from 'prop-types'
import apiClient from "../apiClient"

class MapContainer2 extends React.Component {
  constructor(props) {
    super(props)
    this.state = { buildings: [], markers: [] }
  }

  renderMarker = (sample, key) =>
    <Marker key={key} position={{lat: sample.latitude, lng: sample.longitude}} />

  renderGroundOverlay = (building, key) => {
    const overlay = building.floors.find(f => f._id === building.defaultFloorId).overlay
    return <GroundOverlay
      key={key}
      url={overlay.url}
      defaultBounds={{
        north: -34.602816,
        south: -34.604077,
        east: -58.367626,
        west: -58.367926,
      }}
      defaultOpacity={1}
    />
  }

  render() {
    return (<GoogleMap
      defaultZoom={18}
      defaultCenter={{
        // ITBA
        lat: -34.604064,
        lng: -58.36754
      }}
    >
      {this.state.markers.map(this.renderMarker)}

      {/*{this.state.buildings.map(this.renderGroundOverlay)}*/}

    </GoogleMap>)
  }

  componentDidMount() {
    Promise.all([apiClient.listBuildings(), apiClient.getSamples()]).then(([buildingsResponse, samplesResponse]) => {
      const samples = samplesResponse.data,
        buildings = buildingsResponse.data
      console.debug(`Got ${buildings.length} building(s)`)
      console.debug(`Got ${samples.length} sample(s)`)
      this.setState( { markers: samples, buildings })
    })
  }
}

MapContainer2.propTypes = {
  googleMapURL: PropTypes.string.isRequired,
  loadingElement: PropTypes.element.isRequired,
  containerElement: PropTypes.element.isRequired,
  mapElement: PropTypes.element.isRequired
}

export default withScriptjs(withGoogleMap(MapContainer2))

// const MapWithGroundOverlay = compose(
//   withScriptjs,
//   withGoogleMap
// )(props =>
//   <GoogleMap
//     defaultZoom={12}
//     defaultCenter={{lat: 40.740, lng: -74.18}}
//   >
//     <GroundOverlay
//       defaultUrl="https://www.lib.utexas.edu/maps/historical/newark_nj_1922.jpg"
//       defaultBounds={new google.maps.LatLngBounds(
//         new google.maps.LatLng(40.712216, -74.22655),
//         new google.maps.LatLng(40.773941, -74.12544)
//       )}
//       defaultOpacity={.5}
//     />
//   </GoogleMap>
// );
//
// <MapWithGroundOverlay
//   googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places"
//   loadingElement={<div style={{ height: `100%` }} />}
//   containerElement={<div style={{ height: `400px` }} />}
//   mapElement={<div style={{ height: `100%` }} />}
// />
