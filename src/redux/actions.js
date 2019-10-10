import actionTypes from './actionTypes'

export const selectFloor = (floorId) => ({
  type: actionTypes.SELECT_FLOOR,
  floorId,
})
