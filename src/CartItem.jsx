import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
  selectCartCount,
  selectCartItems,
  selectCartTotal,
} from './CartSlice';

const CartItem = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const totalItems = useSelector(selectCartCount);
  const totalCost = useSelector(selectCartTotal);

  return (
    <div>
      <header className="navbar">
        <div className="brand-link">
          <Link to="/" className="brand-link">
            <span className="logo">🌿</span>
            <div>
              <h2>Paradise Nursery</h2>
              <p>Bring nature home</p>
            </div>
          </Link>
        </div>

        <nav>
          <Link to="/">Home</Link>
          <Link to="/plants">Plants</Link>
          <Link to="/cart">
            🛒 Cart <span className="cart-count">{totalItems}</span>
          </Link>
        </nav>
      </header>

      <div className="cart-page">
        <h1>Shopping Cart</h1>

        <div className="cart-summary">
          <h3>Total Plants: {totalItems}</h3>
          <h3>Total Cost: ${totalCost.toFixed(2)}</h3>
        </div>

        <div className="cart-actions-top">
          <Link to="/plants" className="continue-btn">
            Continue Shopping
          </Link>
          <button
            className="checkout-btn"
            onClick={() => alert('Checkout coming soon!')}
          >
            Checkout
          </button>
        </div>

        {cartItems.length === 0 ? (
          <p className="empty-cart">Your cart is empty.</p>
        ) : (
          <div className="cart-list">
            {cartItems.map((item) => (
              <div className="cart-card" key={item.id}>
                <img src={item.image} alt={item.name} />
                <div className="cart-info">
                  <h3>{item.name}</h3>
                  <p>Unit Price: ${item.price.toFixed(2)}</p>
                  <p>Quantity: {item.quantity}</p>
                  <p>Subtotal: ${(item.quantity * item.price).toFixed(2)}</p>
                  <div className="cart-buttons">
                    <button onClick={() => dispatch(increaseQuantity(item.id))}>
                      +
                    </button>
                    <button onClick={() => dispatch(decreaseQuantity(item.id))}>
                      -
                    </button>
                    <button onClick={() => dispatch(removeFromCart(item.id))}>
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CartItem;