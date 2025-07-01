import { Home, Shirt, Package,BookAlert,Laugh } from "lucide-react";
const navItems = [
  { label: 'Home', icon: <Home color="#9F2089"/> }, 
  { label: 'Categories', icon: <Shirt /> },
  { label: 'My Orders', icon: <Package /> },                                                                                                                                   
  { label: 'Help', icon: <BookAlert /> },                                                     
  { label: 'Account', icon: <Laugh /> },
];

function BottomNav() {
  return (
    <nav className="bottom-nav">
      {navItems.map((item, idx) => (
        <div className="nav-item" key={idx}>
          {/* <span className="nav-icon">{item.icon}</span> */}
          {item.icon}
          <span className="nav-label">{item.label}</span>
        </div>
      ))}
    </nav>
  );
}

export default BottomNav; 