import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get('/api/products');
        setProducts(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) return <div>Loading products...</div>;

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', padding: '1rem' }}>
      {products.map(product => (
        <div key={product._id} style={{ border: '1px solid #ccc', padding: '1rem', width: '200px' }}>
          <img src={product.imageUrl || 'https://via.placeholder.com/150'} alt={product.name} style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
          <h3>{product.name}</h3>
          <p>${product.price}</p>
          <Link to={`/product/${product._id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default Home;
