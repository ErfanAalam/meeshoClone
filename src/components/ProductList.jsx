import { Link } from "react-router-dom";
import { products } from "./products";

function ProductList() {
  return (
    <section className="product-list">
      <div className="products-row">
        {products.map((product, idx) => (
          <Link to={`/products/${idx}`} key={idx} style={{ textDecoration: "none", color: "inherit" }}>
            <div className="product-card">
              <img className="product-img" src={product.img} alt={product.name} />
              <div className="product-name">{product.name}</div>
              <div className="product-pricing">
                <span className="product-price">{product.price}</span>
                <span className="product-old-price">{product.oldPrice}</span>
                <span className="product-discount">{product.discount}</span>
              </div>
              <div className="product-offers">{product.offers}</div>
              <div className="product-delivery">Free Delivery</div>
              <div className="product-rating-row">
                <span className="product-rating">{product.rating}★</span>
                <span className="product-reviews">({product.reviews})</span>
                {product.trusted && <span className="product-trusted">Trusted</span>}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default ProductList; 