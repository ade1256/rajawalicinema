// require('dotenv').config()
import axios from 'axios';

const Request = axios.create({
  baseURL: process.env.BASE_URL,
  headers: {
    Authorization: process.env.BEARER,
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default Request;
