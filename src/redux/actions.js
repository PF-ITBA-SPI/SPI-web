import actionTypes from './actionTypes'

export const selectFloor = (floorId) => ({
  type: actionTypes.SELECT_FLOOR,
  floorId,
})

export const selectSample = (sample) => ({
  type: actionTypes.SELECT_SAMPLE,
  sample,
})

export const buildingsLoaded = buildings => ({
  type: actionTypes.BUILDINGS_LOADED,
  buildings
})

export const samplesLoaded = samples => ({
  type: actionTypes.SAMPLES_LOADED,
  samples
})
