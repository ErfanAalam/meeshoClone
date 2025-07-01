import React from 'react';
import { useCart } from './CartContext';

function Header() {
  const { openCart, cart } = useCart();
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  return (
    <header className="meesho-header">
      <div className="header-left">
        <span className="menu-icon" role="img" aria-label="menu">☰</span>
        <span className="logo">meesho</span>
      </div>
      
      <div className="header-right">
        <span className="wishlist-icon" role="img" aria-label="wishlist">❤️</span>
        <span className="cart-icon" role="img" aria-label="cart" onClick={openCart} style={{ cursor: 'pointer', position: 'relative' }}>
          🛒
          {cartCount > 0 && (
            <span style={{ position: 'absolute', top: -8, right: -8, background: '#a020f0', color: '#fff', borderRadius: '50%', fontSize: 12, padding: '2px 6px', fontWeight: 700 }}>{cartCount}</span>
          )}
        </span>
      </div>
    </header>
  );
}

export default Header; 