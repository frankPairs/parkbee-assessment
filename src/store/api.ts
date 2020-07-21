import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const API_VERSION = 'v1';
const BASE_URL = ` https://api.parkbee.net/${API_VERSION}`;

const api = axios.create({
  baseURL: BASE_URL,
});

const apiMock = new MockAdapter(api);

export { api, apiMock };
