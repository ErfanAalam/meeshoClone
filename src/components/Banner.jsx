import React, { useState, useEffect } from 'react';

const images = [
  'https://images.meesho.com/images/marketing/1705665922742_600.webp',
  'https://images.meesho.com/images/marketing/1706108173253_600.webp',
  'https://images.meesho.com/images/marketing/1705665922742_600.webp',
];

function Banner() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="banner-slider" style={{ position: 'relative', width: '100%', maxWidth: 600, margin: '0 auto' }}>
      <img
        src={images[current]}
        alt="Banner Slide"
        style={{ width: '100%', height: 'auto', borderRadius: 10 }}
      />
    </div>
  );
}

export default Banner; 