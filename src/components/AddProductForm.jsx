import React, { useState } from 'react';
import { createProduct } from '../services/productService';
import CustomTextField from './CustomTextField';
import CustomLabel from './CustomLabel';
import CustomButton from './CustomButton';

export default function AddProductForm() {
  const [formData, setFormData] = useState({
    name: '',
    image: '',
    price: '',
    rating: ''
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const productData = {
        ...formData,
        price: parseFloat(formData.price),
        rating: parseFloat(formData.rating)
      };

      const response = await createProduct(productData);
      setMessage('Product added successfully!');
      setFormData({ name: '', image: '', price: '', rating: '' });
      
      window.location.reload();
    } catch (error) {
      setMessage(error.response?.data?.message || 'Failed to add product');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Add New Product</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <CustomLabel text="Product Name" />
          <CustomTextField
            name="name"
            placeholder="Enter product name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <CustomLabel text="Image URL" />
          <CustomTextField
            name="image"
            placeholder="Enter image URL"
            value={formData.image}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <CustomLabel text="Price" />
          <CustomTextField
            name="price"
            type="number"
            step="0.01"
            placeholder="Enter price"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <CustomLabel text="Rating" />
          <CustomTextField
            name="rating"
            type="number"
            step="0.1"
            min="0"
            max="5"
            placeholder="Enter rating (0-5)"
            value={formData.rating}
            onChange={handleChange}
            required
          />
        </div>

        {message && (
          <div className={`text-center p-2 rounded ${
            message.includes('successfully') 
              ? 'bg-green-100 text-green-700' 
              : 'bg-red-100 text-red-700'
          }`}>
            {message}
          </div>
        )}

        <CustomButton
          label={loading ? 'Adding...' : 'Add Product'}
          type="submit"
          disabled={loading}
          className="w-full"
        />
      </form>
    </div>
  );
}

