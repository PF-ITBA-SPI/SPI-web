import actionTypes from './actionTypes'

export const selectFloor = (floorId) => ({
  type: actionTypes.UPDATE_FLOOR,
  payload: {
    floorId,
  }
})
