import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8000/api/products", 
  withCredentials: true, 
});

// Get all products
export const getProducts = () => API.get("/");

// Create a new product
export const createProduct = (productData) => API.post("/", productData);

// Get a single product by ID
export const getProductById = (id) => API.get(`/${id}`);

// Update a product
export const updateProduct = (id, productData) => API.put(`/${id}`, productData);

// Delete a product
export const deleteProduct = (id) => API.delete(`/${id}`);
