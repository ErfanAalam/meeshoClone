const navItems = [
  { label: 'Home', icon: '🏠' }, 
  { label: 'Categories', icon: '📂' },
  { label: 'My Orders', icon: '📦' },                                                                                                                                   
  { label: 'Help', icon: '📦' },                                                     
  { label: 'Account', icon: '👤' },
];

function BottomNav() {
  return (
    <nav className="bottom-nav">
      {navItems.map((item, idx) => (
        <div className="nav-item" key={idx}>
          <span className="nav-icon">{item.icon}</span>
          <span className="nav-label">{item.label}</span>
        </div>
      ))}
    </nav>
  );
}

export default BottomNav; 