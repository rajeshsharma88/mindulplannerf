import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

const NAV_LINKS = [
  { label: 'SHOP', to: '/shop' },
  { label: 'CUSTOMIZE', to: '/customize' },
  { label: 'ABOUT', to: '/about' },
  { label: 'REVIEWS', to: '/#reviews' },
];

export const Navbar = () => {
  const { itemCount } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="font-display italic text-2xl text-foreground">
          MindFlow
        </Link>

        <div className="hidden md:flex items-center gap-12">
          {NAV_LINKS.map(link => (
            <Link key={link.label} to={link.to} className="nav-link">
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Link to="/cart" className="relative p-2">
            <ShoppingBag size={20} strokeWidth={1.5} className="text-foreground" />
            {itemCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 bg-accent text-foreground text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </Link>
          <button className="md:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-background px-6 py-8 space-y-6">
          {NAV_LINKS.map(link => (
            <Link
              key={link.label}
              to={link.to}
              className="nav-link block"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};
