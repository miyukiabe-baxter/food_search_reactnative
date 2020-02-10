import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'Bearer OVvWHT8okLiFN2bzj9LPEqLCqnwXIJMAQabV5dDpHCasSrg0uKPAUJVwDPinzFNJs7U40dUb0-vhueYaWM95BTK-1UCLqxkBVAsWz7A4kiWRNIfX8lEsNUrnnPndXXYx'
  }
});


