import axios from 'axios';
// import { errorHandler } from 'services/Utils';
import { apiBaseUrl } from 'utils/host';

export const refreshToken = async (form) => {
  console.log(apiBaseUrl);
  try {
    const response = await axios.post(`${apiBaseUrl}Auth/token/refresh`, form);
    console.log(response);
  } catch (e) {
    console.log(e);
    // errorHandler(e);
  }
};
