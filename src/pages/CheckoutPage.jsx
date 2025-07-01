import React from 'react';
import { useCart } from '../components/CartContext';
import { useNavigate } from 'react-router-dom';
import { Trash2 } from 'lucide-react';

export default function CheckoutPage() {
  const { cart, removeFromCart} = useCart();
  const navigate = useNavigate();

  const cartTotal = cart.reduce((sum, item) => sum + Number(item.price.replace('₹', '')) * item.quantity, 0);

  return (
    <div style={{ background: '#faf9fb', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Progress Bar */}
      <div style={{ background: '#fff', borderBottom: '1px solid #eee', padding: '12px 0 0 0' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 18px' }}>
          <span style={{ fontWeight: 700, fontSize: 18 }}>CART</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 18px 0 18px' }}>
          {["Cart", "Address", "Payment", "Summary"].map((step, idx) => (
            <div key={step} style={{ textAlign: 'center', flex: 1 }}>
              <div style={{
                width: 28, height: 28, borderRadius: '50%', background: idx === 0 ? '#a020f0' : '#eee', color: idx === 0 ? '#fff' : '#888', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 16, marginBottom: 2
              }}>{idx + 1}</div>
              <div style={{ fontSize: 13, color: idx === 0 ? '#a020f0' : '#888' }}>{step}</div>
            </div>
          ))}
        </div>
      </div>
      {/* Cart Items */}
      <div style={{ background: '#fff', margin: '12px 0', padding: '0 0 12px 0' }}>
        {cart.map((item) => (
          <div key={item.id + item.size} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: 16, borderBottom: '1px solid #f2f2f2' }}>
            <img src={item.img} alt={item.name} style={{ width: 80, height: 100, objectFit: 'cover', borderRadius: 6 }} />
            <div style={{ flex: 1 }}>
              <div style={{display:'flex', alignItems:'center', justifyContent:"space-between"}}>
              <div style={{ fontWeight: 600, fontSize: 15, marginBottom: 2 }}>{item.name}</div>
              <Trash2 onClick={() => removeFromCart(item.id, item.size)} style={{ color: '#888', fontSize: 20, cursor: 'pointer' }} title="Remove" size={20} />
              </div>
              <div style={{ color: 'gray', fontWeight: 600, fontSize: 15 }}>₹{item.price.replace('₹', '')}</div>
             <div style={{display:'flex', justifyContent:"space-between", alignItems:'center'}}>
             <div style={{ color: '#444', fontSize: 14 }}>Size: {item.size}</div>
             <div style={{ color: '#444', fontSize: 14 }}>Qty: {item.quantity.toString().padStart(2, '0')}</div>
             </div>
            </div>
          </div>
        ))}
      </div>
      {/* Summary Section */}
      <div style={{ background: '#fff', margin: '0 0 12px 0', padding: '12px 18px', borderRadius: 8 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
          <span>Shipping:</span>
          <span style={{ color: '#038D63', fontWeight: 600 }}>FREE</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
          <span>Total Product Price:</span>
          <span style={{  }}>₹{(cartTotal).toFixed(2)}</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10, fontWeight: 600 }}>
          <span>Order Total:</span>
          <span>₹{cartTotal.toFixed(2)}</span>
        </div>
      </div>
      {/* Meehso Safe Section */}
      <div style={{ background: '#fff', margin: '0 0 12px 0', padding: '12px 18px', borderRadius: 8, display: 'flex', alignItems: 'center', gap: 16 }}>
        <img src="https://images.meesho.com/images/marketing/1588578650850.webp" alt="Meehso Safe" style={{ width: 90, height: 60, objectFit: 'contain' }} />
        <div>
          <div style={{ fontWeight: 600, fontSize: 15, color: '#a020f0', marginBottom: 2 }}>Your Safety, Our Priority</div>
          <div style={{ color: '#444', fontSize: 13 }}>We make sure that your package is safe at every point of contact.</div>
        </div>
      </div>
      {/* Bottom Bar */}
      <div style={{ position: 'fixed', bottom: 0, left: 0, width: '90%', background: '#fff', borderTop: '1px solid #eee', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 18px', zIndex: 100 }}>
        <div>
          <div style={{ fontWeight: 700, fontSize: 18 }}>₹{cartTotal.toFixed(2)}</div>
          <div style={{ color: '#a020f0', fontSize: 13, cursor: 'pointer', fontWeight: 600 }}>VIEW PRICE DETAILS</div>
        </div>
        <button
          style={{ background: '#a020f0', color: '#fff', border: 'none', borderRadius: 8, padding: '12px 32px', fontWeight: 600, fontSize: 16, cursor: 'pointer' }}
          onClick={() => navigate('/address')}
        >Continue</button>
      </div>
    </div>
  );
} 