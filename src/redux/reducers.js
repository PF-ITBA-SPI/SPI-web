import { combineReducers } from 'redux'
import actionTypes from "./actionTypes"

const map = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_FLOOR:
      return {
        ...state,
        currentFloorId: action.floorId
      }
    default:
      return state
  }
}

export default combineReducers({ map })
