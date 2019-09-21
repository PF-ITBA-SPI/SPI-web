import { GoogleMap, withGoogleMap, withScriptjs, Marker, GroundOverlay } from "react-google-maps"
import React from "react"
import PropTypes from 'prop-types'
import apiClient from "../apiClient"

class MapContainer extends React.Component {
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
      defaultZoom={19}
      defaultCenter={{
        // ITBA
        lat: -34.603564,
        lng: -58.36774
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

MapContainer.propTypes = {
  googleMapURL: PropTypes.string.isRequired,
  loadingElement: PropTypes.element.isRequired,
  containerElement: PropTypes.element.isRequired,
  mapElement: PropTypes.element.isRequired
}

export default withScriptjs(withGoogleMap(MapContainer))
