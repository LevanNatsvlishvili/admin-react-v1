import axios from 'axios';
// import { axiosRemote as axios } from "utils/axios";
import { errorHandler, successHandler } from 'services/Utils';
import { apiBaseUrl } from 'utils/host';
import Messages from './Messages';
import BuildQuery from 'utils/buildQuery';

export const fetchDataList = async (form) => {
  try {
    const response = await axios.get(`${apiBaseUrl}blogs${BuildQuery(form)}`);
    const { data } = response;
    return data;
  } catch (e) {
    errorHandler(e);
  }
};

export const deleteData = async (id, updateStore) => {
  try {
    const response = await axios.delete(`${apiBaseUrl}blogs/${id}`);
    successHandler(response, Messages.successDelete, updateStore);
  } catch (e) {
    errorHandler(e);
  }
};

export const fetchData = async (id) => {
  try {
    const response = await axios.get(`${apiBaseUrl}blogs/${id}`);
    return response.data;
  } catch (e) {
    errorHandler(e);
  }
};

export const enterData = async (form, clearForm) => {
  try {
    const response = await axios.post(`${apiBaseUrl}blogs`, form);
    successHandler(response, Messages.success, clearForm);
  } catch (e) {
    errorHandler(e);
  }
};

export const updateData = async (form, id, clearForm) => {
  try {
    const response = await axios.put(`${apiBaseUrl}blogs/${id}`, form);
    successHandler(response, Messages.update, clearForm);
  } catch (e) {
    errorHandler(e);
  }
};

export const generateSlug = async (form) => {
  try {
    const response = await axios.get(
      `${apiBaseUrl}blogs/slug${BuildQuery(form)}`
    );
    return response.data;
  } catch (e) {
    errorHandler(e);
  }
};
