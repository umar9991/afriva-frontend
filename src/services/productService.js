import axios from "axios";
import API_CONFIG from '../config/api';

const API = axios.create({
  baseURL: `${API_CONFIG.getBaseURL()}/api/products`, 
  withCredentials: true, 
});

export const getProducts = () => API.get("/");

export const createProduct = (productData) => API.post("/", productData);

export const getProductById = (id) => API.get(`/${id}`);

export const updateProduct = (id, productData) => API.put(`/${id}`, productData);

export const deleteProduct = (id) => API.delete(`/${id}`);
