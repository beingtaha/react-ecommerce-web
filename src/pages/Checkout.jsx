import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Checkout() {
  const navigate = useNavigate();

  useEffect(() => {
    // Checkout pe aate hi cart khali kar denge
    localStorage.removeItem('cart');
  }, []);

  const handleConfirm = () => {
    alert('✅ Order placed! Thank you for shopping.');
    navigate('/products');
  };

  return (
    <div>
      <h2>Checkout Page</h2>
      <p>Your order is ready to be placed.</p>
      <button onClick={handleConfirm}>✅ Confirm Order</button>
      <br />
      <button onClick={() => navigate('/cart')}>⬅ Back to Cart</button>
    </div>
  );
}

export default Checkout;