import actionTypes from './actionTypes'

export const changeFloor = (floorId) => ({
  type: actionTypes.UPDATE_FLOOR,
  floorId,
})
