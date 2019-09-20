import config from './config'
import axios from 'axios'

const client = axios.create({ baseURL: config.apiUrl })

export default {
  getSamples: (buildingId = '5c9e6a3a469ebb001ca897c7') => client.get(`/buildings/${buildingId}/samples`)
}
