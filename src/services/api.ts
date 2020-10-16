import axios from 'axios';

const api =  axios.create({
  baseURL: 'https://happy-server-gyn.herokuapp.com',
})

export default api;