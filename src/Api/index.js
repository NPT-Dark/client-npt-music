import axios from 'axios'
export const API = axios.create({
    baseURL: 'https://python-libraries-tst.p.rapidapi.com',
    headers: {
      'X-RapidAPI-Key': '4016ba2d8bmsh4c33df0bb54dc5ep1a0733jsn81d1881c1f5c',
      'X-RapidAPI-Host': 'python-libraries-tst.p.rapidapi.com'
    }
  });