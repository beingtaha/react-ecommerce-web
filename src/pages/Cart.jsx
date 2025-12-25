import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  // Cart localStorage se load karna
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(cart);
  }, []);

  // Remove from Cart
  const removeFromCart = (index) => {
    const updatedCart = cartItems.filter((item, i) => i !== index);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  // Total calculate karna
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <h2>🛒 Your Cart</h2>
      <button onClick={() => navigate('/products')}>⬅ Back to Products</button>
      {cartItems.length === 0 ? (
        <p>Cart is Empty</p>
      ) : (
        <div>
          {cartItems.map((item, index) => (
            <div key={index} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
              <img src={item.thumbnail} alt={item.title} width="60" />
              <h3>{item.title}</h3>
              <p>Price: ${item.price}</p>
              <button onClick={() => removeFromCart(index)}>❌ Remove</button>
            </div>
          ))}
          <h3>Total: ${total.toFixed(2)}</h3>
          <button onClick={() => navigate('/checkout')}>Proceed to Checkout</button>
        </div>
      )}
    </div>
  );
}

export default Cart;