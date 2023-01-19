import axios from 'axios';
import { apiUrl } from '@constants/env';

const http = axios.create({
  baseURL: apiUrl,
});

export default http;
