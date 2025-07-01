import { useNavigate } from 'react-router-dom';

const categories = [
  { name: 'Categories', icon: 'https://images.meesho.com/images/marketing/1594489152649_100.webp' },
  { name: 'Kurtis', icon: 'https://images.meesho.com/images/widgets/9PAQI/fb2sf_300.webp' },
  { name: 'Kurti 2 Combo Pack', icon: 'https://pic.markop.xyz/cdn.shopify.com/s/files/1/0864/0204/0081/products/photogrid.photocollagemaker.photoeditor.squarepic_2023122015483381bf34.png?v=1710321704' },
  { name: 'Kurti 3 Combo Pack', icon: 'https://images.meesho.com/images/marketing/1649688502928_100.webp' },
  // Add more as needed
];

function CategoryShortcuts() {
  const navigate = useNavigate();
  return (
    <section className="category-shortcuts">
      <div className="category-list">
        {categories.map((cat, idx) => (     
          <div
            className="category-item"
            key={idx}
            onClick={() => navigate(`/products/category/${encodeURIComponent(cat.name)}`)}
            style={{ cursor: 'pointer' }}
          >
            {/* <div className="category-icon">{cat.icon}</div> */}
            <img src={cat.icon} className="category-icon" alt="" width={70} height={70} />
            <div className="category-label">{cat.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CategoryShortcuts; 