import React from 'react';
import { useCart } from './CartContext';
import { Trash2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function CartDrawer() {
  const { cart, isCartOpen, closeCart, removeFromCart, updateQuantity } = useCart();
  const navigate = useNavigate();

  const cartTotal = cart.reduce((sum, item) => sum + (item.price).slice(1) * item.quantity, 0);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        right: isCartOpen ? 0 : '-420px',
        width: 300,
        height: '100vh',
        background: '#fff',
        boxShadow: '-2px 0 16px rgba(0,0,0,0.12)',
        zIndex: 1000,
        transition: 'right 0.3s',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div style={{ padding: 18, borderBottom: '1px solid #eee', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{ fontWeight: 700, fontSize: 20 }}>Your Cart</span>
        <span style={{ fontSize: 26, cursor: 'pointer' }} onClick={closeCart}>&times;</span>
      </div>
      <div style={{ flex: 1, overflowY: 'auto' }}>
        {cart.length === 0 ? (
          <div style={{ padding: 32, textAlign: 'center', color: '#888' }}>Your cart is empty.</div>
        ) : (
          cart.map((item) => (
            <div key={item.id + item.size} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: 16, borderBottom: '1px solid #f2f2f2' }}>
              <img src={item.img} alt={item.name} style={{ width: 64, height: 80, objectFit: 'cover', borderRadius: 6 }} />
              <div style={{ flex: 1 }}>
                <div style={{display:'flex'}}>
                <div style={{ fontWeight: 600, fontSize: 15, marginBottom: 2 }}>{item.name}</div>
                <Trash2 onClick={() => removeFromCart(item.id, item.size)} style={{ color: '#888', fontSize: 20, cursor: 'pointer' }} title="Remove" size={20} />
                </div>
                <div style={{ color: '#a020f0', fontWeight: 600, fontSize: 15 }}>₹{item.price}</div>
               <div style={{display:'flex', justifyContent:'space-between',alignItems:'center' }}>
               <div style={{ color: '#444', fontSize: 14 }}>Size: {item.size}</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 4 }}>
                  <button onClick={() => updateQuantity(item.id, item.size, Math.max(1, item.quantity - 1))} style={{ border: '1px solid #ccc', background: '#faf9fb', borderRadius: 4, width: 28, height: 28, fontWeight: 700, cursor: 'pointer' }}>-</button>
                  <span style={{ minWidth: 24, textAlign: 'center' }}>{item.quantity.toString().padStart(2, '0')}</span>
                  <button onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)} style={{ border: '1px solid #ccc', background: '#faf9fb', borderRadius: 4, width: 28, height: 28, fontWeight: 700, cursor: 'pointer' }}>+</button>
                </div>
               </div>
              </div>
             
            </div>
          ))
        )}
      </div>
      <div style={{ borderTop: '1px solid #eee', padding: 18, background: '#fff' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
          <span>Cart Total:</span>
          <span>₹{cartTotal.toFixed(2)}</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
          <span>Shipping:</span>
          <span style={{ color: '#038D63', fontWeight: 600 }}>FREE</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10, fontWeight: 600 }}>
          <span>To Pay:</span>
          <span>₹{cartTotal.toFixed(2)}</span>
        </div>
        <div style={{ fontWeight: 700, fontSize: 18, marginBottom: 10 }}>₹{cartTotal.toFixed(2)}</div>
        <div style={{ color: '#888', fontSize: 13, marginBottom: 10 }}>Inclusive of all taxes</div>
        <button style={{ width: '100%', background: '#a020f0', color: '#fff', border: 'none', borderRadius: 8, padding: '12px 0', fontWeight: 600, fontSize: 16, cursor: 'pointer' }} onClick={() =>{ navigate('/checkout'); closeCart();}}>Confirm Order</button>
      </div>
    </div>
  );
} 