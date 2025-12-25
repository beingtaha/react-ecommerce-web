import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Products() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  // DummyJSON se products fetch karna
  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => setProducts(data.products));
  }, []);

  // Add to Cart function
  const addToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${product.title} Add to Card`);
  };

  return (
    <div>
      <h2>Products</h2>
      <button onClick={() => navigate('/cart')}>🛒 Show Cart</button>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {products.map(product => (
          <div key={product.id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px', width: '200px' }}>
            <img src={product.thumbnail} alt={product.title} width="100" />
            <h3>{product.title}</h3>
            <p>Price: ${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;