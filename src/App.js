import React from "react"
import { Provider } from 'react-redux'
import store from './redux/store'
import "./App.scss"
import MapContainer from "./components/MapContainer"
import FloorSelector from "./components/FloorSelector"
import { buildingsLoaded, samplesLoaded } from "./redux/actions"
import apiClient from "./apiClient"

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      buildings: []
    }
  }


  render() {
    return (
      <Provider store={store}>
        <div id="map">
          <MapContainer className="container"
                        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&key=${process.env.REACT_APP_MAPS_API_KEY}`}
                        containerElement={<div className="container"/>}
                        mapElement={<div style={{width: '100%', height: '100%'}}/>}
                        loadingElement={<h1>Loading...</h1>}
          />
          {this.state.buildings.length > 0 && <FloorSelector building={this.state.buildings[0]}/>}
          <div className="control">
            <h1>Controls here</h1>
          </div>
        </div>
      </Provider>
    );
  }

  componentDidMount() {
    Promise.all([apiClient.listBuildings(), apiClient.getSamples()]).then(([buildingsResponse, samplesResponse]) => {
      const buildings = buildingsResponse.data,
        samples = samplesResponse.data
      this.setState({ buildings })

      store.dispatch(buildingsLoaded(buildings))
      store.dispatch(samplesLoaded(samples))
    })
  }
}
