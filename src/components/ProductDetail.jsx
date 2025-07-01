import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { products } from "./products";
import Header from "./Header";
import { Heart, Share2 } from "lucide-react";
import { useCart } from './CartContext';

const sizes = ["S", "M", "L", "XL", "XXL"];

function ProductDetail() {
  const { productId } = useParams();
  const product = products[productId];
  const [selectedSize, setSelectedSize] = useState("S");
  const [selectedImgIdx, setSelectedImgIdx] = useState(0);
  const { addToCart, closeCart } = useCart();
  const navigate = useNavigate();

  if (!product) return <div>Product not found</div>;

  return (
    <div style={{ background: "#faf9fb", minHeight: "100vh" }}>
      <Header />
      <div style={{ background: "#fff", padding: 16, textAlign: "center" }}>
        <img src={product.img} alt={product.name} style={{ width: 260, height: 320, objectFit: "cover", borderRadius: 8 }} />
      </div>
      {/* Image Preview Thumbnails */}
      <div style={{ background: "#fff", padding: '8px 0', display: 'flex', justifyContent: 'center', gap: 8, borderBottom: '1px solid #eee' }}>
        {[...Array(5)].map((_, idx) => (
          <img
            key={idx}
            src={product.img}
            alt={`Preview ${idx + 1}`}
            onClick={() => setSelectedImgIdx(idx)}
            style={{
              width: 54,
              height: 64,
              objectFit: 'cover',
              borderRadius: 4,
              border: selectedImgIdx === idx ? '2.5px solid #a020f0' : '1.5px solid #eee',
              cursor: 'pointer',
              boxShadow: '0 1px 2px rgba(0,0,0,0.04)'
            }}
          />
        ))}
      </div>
      <div style={{ padding: 16, background: "#fff", marginTop: 8 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 4 }}>
          <div style={{ fontWeight: 300, fontSize: 18, color: 'gray' }}>{product.name}</div>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <Heart size={22} color="#d1006f" style={{ cursor: "pointer" }} />
            <Share2 size={22} color="#800080" style={{ cursor: "pointer" }} />
          </div>
        </div>
        <div style={{ margin: "8px 0", display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ fontWeight: 700, fontSize: 20, color: "#222" }}>{product.price}</span>
          <span style={{ textDecoration: "line-through", color: "#888" }}>{product.oldPrice}</span>
          <span style={{ color: "#000000", fontWeight: 500 }}>{product.discount}</span>
        </div>
        <div style={{ color: "#038D63", fontWeight: 500, fontSize: 15, background: '#D3F4EA',padding:4 }}>{product.offers}</div>
        <div style={{ display: "flex", alignItems: "center", gap: 8, margin: "8px 0" }}>
          <span style={{ background: "#e0f7e9", color: "#1a7f37", borderRadius: 4, padding: "2px 8px", fontWeight: 600 }}>{product.rating}★</span>
          <span style={{ color: "#888" }}>{product.reviews} ratings</span>
          {product.trusted && <span style={{ color: "#a020f0", fontWeight: 600, marginLeft: 8 }}>Trusted</span>}
        </div>
        <div style={{ color: "#1a7f37", fontWeight: 500 }}>Free Delivery</div>
      </div>
      <div style={{ background: "#fff", marginTop: 8, padding: 16 }}>
        <div style={{ fontWeight: 600, fontSize: 16, marginBottom: 8 }}>Select Size</div>
        <div style={{ display: "flex", gap: 12, marginBottom: 8 }}>
          {sizes.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              style={{
                border: selectedSize === size ? "2px solid #a020f0" : "1px solid #888",
                background: selectedSize === size ? "#faf0ff" : "#fff",
                color: selectedSize === size ? "#a020f0" : "#222",
                borderRadius: 20,
                padding: "6px 18px",
                fontWeight: 500,
                cursor: "pointer",
                outline: "none",
              }}
            >
              {size}
            </button>
          ))}
        </div>
      </div>
      <div style={{ background: "#fff", marginTop: 8, padding: 16, marginBottom:30 }}>
        <div style={{ fontWeight: 600, fontSize: 16, marginBottom: 8 }}>Product Details</div>
        <div style={{ color: "#444", fontSize: 15, marginBottom: 8 }}>
          <i>Model is Wearing:</i> S Size<br />
          <i>Model Height:</i> 5.5<br />
          <i>Care:</i> Dry Clean<br />
          <i>Delivery time:</i> 10-12 Days
        </div>
        <div style={{ fontWeight: 500, marginBottom: 4 }}>Dress :</div>
        <ul style={{ color: "#444", fontSize: 15, marginLeft: 18 }}>
          <li>Fabric – cotton</li>
          <li>Flared</li>
          <li>Length – 47"</li>
          <li>Sleeves – 9" puff sleeves</li>
          <li>front – 7</li>
          <li>Back neck – covered</li>
          <li>color- pink</li>
        </ul>
      </div>
      <div style={{ display: "flex", gap: 12, margin: "24px 0 0 0", justifyContent: "center",position:'fixed',bottom:0, left:'7%', background:'white', padding:6 }}>
        <button
          style={{
            background: "#fff",
            color: "#a020f0",
            border: "2px solid #a020f0",
            borderRadius: 8,
            padding: "12px 32px",
            fontWeight: 600,
            fontSize: 16,
            cursor: "pointer"
          }}
          onClick={() => addToCart({
            id: productId,
            name: product.name,
            img: product.img,
            price: product.price,
            size: selectedSize,
            quantity: 1
          })}
        >Add to Cart</button>
        <button style={{
          background: "#a020f0",
          color: "#fff",
          border: "none",
          borderRadius: 8,
          padding: "12px 32px",
          fontWeight: 600,
          fontSize: 16,
          cursor: "pointer"
        }}
        onClick={() => {
          addToCart({
            id: productId,
            name: product.name,
            img: product.img,
            price: product.price,
            size: selectedSize,
            quantity: 1
          });
          navigate('/checkout');
          closeCart()
        }}
        >Buy Now</button>
      </div>
    </div>
  );
}

export default ProductDetail; 