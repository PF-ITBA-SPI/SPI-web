import { combineReducers } from 'redux'
import actionTypes from "./actionTypes"

const INITIAL_MAP_STATE = {
  currentFloorId: null,
}

const map = (state = INITIAL_MAP_STATE, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_FLOOR:
      return {
        ...state,
        currentFloorId: action.payload.floorId
      }
    default:
      return state
  }
}

export default combineReducers({ map })
