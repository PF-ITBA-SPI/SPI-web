const MANDATORY_ENV_VARIABLES = ['REACT_APP_MAPS_API_KEY', 'REACT_APP_JWT']
MANDATORY_ENV_VARIABLES.forEach(name => { if (!process.env[name]) throw new Error(`${name} is missing, specify it in a .env file`) })

const CONFIG = {
  common: {
    mapsApiKey: process.env.REACT_APP_MAPS_API_KEY,
    jwt: `Bearer ${process.env.REACT_APP_JWT}`,
  },
  development: {
    apiUrl: 'http://localhost:4000',
    jwt: 'admin'
  },
  production: {
    apiUrl: 'https://pf-itba-spi.herokuapp.com'
  }
}

export default {
  ...CONFIG.default, ...CONFIG[process.env.NODE_ENV]
}
