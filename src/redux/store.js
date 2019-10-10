import { createStore } from 'redux'
import combinedReducers from './reducers'

// Get the Redux dev tools Chrome extension from https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en
const reduxDevToolsEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

export default createStore(combinedReducers, undefined, reduxDevToolsEnhancer)
