import config from './config'
import axios from 'axios'

const client = axios.create({
  baseURL: config.apiUrl,
  headers: { Authorization: `Bearer ${process.env.REACT_APP_JWT}`}
})

export default {
  getSamples: (buildingId = '5c9e6a3a469ebb001ca897b8') => client.get(`/buildings/${buildingId}/samples`)
}
