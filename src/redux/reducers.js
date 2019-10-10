import { combineReducers } from 'redux'
import actionTypes from "./actionTypes"

const INITIAL_FLOOR_SELECTOR_STATE = {
  selectedFloorId: '5c9e6a3a469ebb001ca897c7',
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

const INITIAL_APP_STATE = {
  buildings: [],
  samples: [],
}

const app = (state = INITIAL_APP_STATE, action) => {
  switch (action.type) {
    case actionTypes.BUILDINGS_LOADED:
      console.debug(`Loaded ${action.buildings.length} building(s)`)
      return {
        ...state,
        buildings: action.buildings
      }
    case actionTypes.SAMPLES_LOADED:
      console.debug(`Loaded ${action.samples.length} sample(s)`)
      return {
        ...state,
        samples: action.samples
      }
    default:
      return state
  }
}

export default combineReducers({ app, floorSelector })
