import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`/api/products/${id}`);
        setProduct(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (!product) return <div>Product not found</div>;

  return (
    <div>
      <h2>{product.name}</h2>
      <img src={product.imageUrl || 'https://via.placeholder.com/300'} alt={product.name} style={{ width: '300px' }} />
      <p>Price: ${product.price}</p>
      <p>{product.description}</p>
      <p>Stock: {product.stock}</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductDetails;
