import axios from 'axios'
export const API = axios.create({
    baseURL: 'https://server-music-npt.herokuapp.com',
  });