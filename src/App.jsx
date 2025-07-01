import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Header from './components/Header';
import CategoryShortcuts from './components/CategoryShortcuts';
import Banner from './components/Banner';
import OfferStrip from './components/OfferStrip';
import DailyDeals from './components/DailyDeals';
import ProductList from './components/ProductList';
import BottomNav from './components/BottomNav';
import ProductListPage from './components/ProductListPage';
import ProductDetail from './components/ProductDetail';
import { CartProvider } from './components/CartContext';
import CartDrawer from './components/CartDrawer';
import CheckoutPage from './pages/CheckoutPage';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <CartDrawer />
        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <div className="header-center">
                <input
                  className="search-bar"
                  type="text"
                  placeholder="Search for Sarees, Kurtis, Cosmetics, etc."
                />
              </div>
              <CategoryShortcuts />
              <img src="https://big-billion.flipkartx.com/tb3wfw/OFFER/images.meesho.com/images/widgets/Y8HIH/2f53o.gif" height={35} width='100%' alt="" />
              <Banner />
              <OfferStrip />
              <DailyDeals />
              <ProductList />
              <BottomNav />
            </>
          } />
          <Route path="/products/:productId" element={<ProductDetail />} />
          <Route path="/products/category/:category" element={<ProductListPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
