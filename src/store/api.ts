import axios from 'axios';

const API_VERSION = 'v1';
const BASE_URL = ` https://api.parkbee.net/${API_VERSION}`;

const api = axios.create({
  baseURL: BASE_URL,
});

export { api };
