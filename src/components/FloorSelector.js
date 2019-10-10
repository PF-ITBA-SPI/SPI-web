import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { selectFloor } from "../redux/actions"

class FloorSelector extends React.Component {

  /**
   * Render a button for the floor of the given number.
   *
   * @param floor {object} Floor for which to render a button.
   */
  renderButton = floor => {
    const { _id: id, name } = floor
    return (
      <button key={id} onClick={() => this.props.selectFloor(id)} disabled={id === this.props.currentFloorId}>{name}</button>
    )
  }

  render() {
    return (
      <div id="floorSelector">
        {this.props.building.floors.map(this.renderButton)}
      </div>
    )
  }
}

// Update selected floor from state
const mapStateToProps = state => ({
  currentFloorId: state.map.currentFloorId
})

// Dispatch actions from props
const mapDispatchToProps = ({
  selectFloor
})

FloorSelector.propTypes = {
  building: PropTypes.object.isRequired,
  currentFloorId: PropTypes.string,
}

export default connect(mapStateToProps, mapDispatchToProps)(FloorSelector)
