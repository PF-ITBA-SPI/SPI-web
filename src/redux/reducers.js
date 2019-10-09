const DEFAULT_STATE = {
  selectedMarker: null,
}

const defaultReducer = (state = DEFAULT_STATE, _action) => state

export const otherReducer = (state, action) => ({...state, action})

export default defaultReducer
