const MANDATORY_ENV_VARIABLES = ['REACT_APP_MAPS_API_KEY', 'REACT_APP_JWT']
MANDATORY_ENV_VARIABLES.forEach(name => { if (!process.env[name]) throw new Error(`${name} is missing, specify it in a .env file`) })

export default {
  mapsApiKey: process.env.REACT_APP_MAPS_API_KEY,
  apiUrl: 'https://pf-itba-spi.herokuapp.com',
}
