import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="font-display italic text-2xl block">MindFlow</Link>
            <p className="text-sm leading-relaxed opacity-70">
              Customizable digital planners built around your goals, not someone else's template.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-[11px] font-bold tracking-[0.2em] uppercase mb-6 opacity-50">Shop</h4>
            <div className="space-y-3">
              <Link to="/shop" className="block text-sm opacity-70 hover:opacity-100 transition-opacity">All Planners</Link>
              <Link to="/customize" className="block text-sm opacity-70 hover:opacity-100 transition-opacity">Custom Builder</Link>
              <Link to="/shop" className="block text-sm opacity-70 hover:opacity-100 transition-opacity">Gift Cards</Link>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[11px] font-bold tracking-[0.2em] uppercase mb-6 opacity-50">Company</h4>
            <div className="space-y-3">
              <Link to="/about" className="block text-sm opacity-70 hover:opacity-100 transition-opacity">Our Story</Link>
              <Link to="/contact" className="block text-sm opacity-70 hover:opacity-100 transition-opacity">Contact</Link>
              <Link to="/about" className="block text-sm opacity-70 hover:opacity-100 transition-opacity">Careers</Link>
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-[11px] font-bold tracking-[0.2em] uppercase mb-6 opacity-50">Connect</h4>
            <div className="space-y-3">
              <a href="#" className="block text-sm opacity-70 hover:opacity-100 transition-opacity">Instagram</a>
              <a href="#" className="block text-sm opacity-70 hover:opacity-100 transition-opacity">Pinterest</a>
              <a href="#" className="block text-sm opacity-70 hover:opacity-100 transition-opacity">TikTok</a>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs opacity-50">
          <p>© 2026 MindFlow. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:opacity-100 transition-opacity">Privacy Policy</a>
            <a href="#" className="hover:opacity-100 transition-opacity">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
