import { combineReducers } from 'redux'
import actionTypes from "./actionTypes"

const INITIAL_FLOOR_SELECTOR_STATE = {
  selectedFloorId: null,
}

const floorSelector = (state = INITIAL_FLOOR_SELECTOR_STATE, action) => {
  switch (action.type) {
    case actionTypes.SELECT_FLOOR:
      return {
        ...state,
        selectedFloorId: action.floorId
      }
    default:
      return state
  }
}

export default combineReducers({ floorSelector })
