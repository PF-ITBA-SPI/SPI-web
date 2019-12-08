import React from "react"
import { connect } from "react-redux"

class Controls extends React.Component {

  getSampleBuilding(sample) {
    if (!this.props.buildings.length) {
      console.error(`No buildings loaded to get building for sample ${sample._id}`)
      return null
    }
    return this.props.buildings.find(b => b._id === sample.buildingId)
  }

  renderTitle(selectedSample) {
    if (!selectedSample) {
      return (<h1>Select a Sample</h1>)
    } else {
      const building = this.getSampleBuilding(this.props.selectedSample)
      const floor = building.floors.find(f => f._id === selectedSample.floorId)
      const numAps = Object.keys(selectedSample.fingerprint).length
      return (<h1>{building.name}, floor {floor.name}, {numAps} AP{numAps !== 1 ? 's' : ''}</h1>)
    }
  }

  renderDetail(selectedSample) {
    if (!selectedSample) {
      return
    }

    return Object.entries(selectedSample.fingerprint).flatMap((bssid, rssi) => {
      const networkName = (selectedSample.extra[bssid] && selectedSample.extra[bssid].SSID) || '?'

      return (
          <div className="row">
            <div className="bssid">{bssid}</div>
            <div className="ssid">{networkName}</div>
            <div className="rssi">{rssi}</div>
          </div>
      )
    })
  }

  render() {
    const selectedSample = this.props.selectedSample
    return (
      <div id="controls">
        {this.renderTitle(selectedSample)}
        <div className="detail">
          {this.renderDetail(selectedSample)}
        </div>
      </div>
    )
  }
}

// Update selected sample from store
const mapStateToProps = state => ({
  selectedSample: state.app.selectedSample,
  buildings: state.app.buildings,
})

Controls.propTypes = {}

export default connect(mapStateToProps)(Controls)
