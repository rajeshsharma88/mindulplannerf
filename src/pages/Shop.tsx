import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { ArrowRight } from 'lucide-react';

const FILTERS = ['All', 'Daily', 'Weekly', 'Annual', 'Productivity', 'Minimal'];

const PRODUCTS = [
  { id: "daily-flow", name: "The Daily Flow", desc: "Your day, beautifully organized.", price: 24.99, category: "Daily", color: "F0E6D6", image: "/assets/images/product-daily-flow.jpeg" },
  { id: "goal-getter", name: "The Goal Getter", desc: "Big dreams, broken into steps.", price: 29.99, category: "Productivity", color: "E8D5C0", image: "/assets/images/product-goal-getter.jpeg" },
  { id: "year-planner", name: "The Year Planner", desc: "365 days of intentional living.", price: 34.99, category: "Annual", color: "D4C5B0", image: "/assets/images/product-year-planner.jpeg" },
  { id: "weekly-reset", name: "The Weekly Reset", desc: "Plan your week with clarity.", price: 22.99, category: "Weekly", color: "C1C8B4", image: "/assets/images/customize-preview.jpeg" },
  { id: "minimal-focus", name: "The Minimal Focus", desc: "Less noise, more progress.", price: 19.99, category: "Minimal", color: "D4A5A5", image: "/assets/images/about-hero.jpeg" },
  { id: "hustle-planner", name: "The Hustle Planner", desc: "Built for builders and doers.", price: 32.99, category: "Productivity", color: "92A8D1", image: "/assets/images/hero-ipad.jpeg" },
];

export const Shop = () => {
  const [filter, setFilter] = useState('All');
  const { addToCart } = useCart();

  const filtered = filter === 'All' ? PRODUCTS : PRODUCTS.filter(p => p.category === filter);

  return (
    <main className="bg-background">
      <section className="bg-background-secondary py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="font-display text-4xl md:text-5xl text-foreground font-bold">The Planners</h1>
          <p className="text-muted mt-4 max-w-md mx-auto">Thoughtfully designed digital planners for every kind of planner.</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6">
          {/* Filters */}
          <div className="flex flex-wrap gap-3 mb-12 md:mb-16 justify-center">
            {FILTERS.map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-6 py-2.5 text-[13px] font-medium tracking-[0.06em] uppercase transition-all duration-300 ${
                  filter === f
                    ? 'bg-foreground text-primary-foreground'
                    : 'border border-border text-muted hover:border-foreground hover:text-foreground'
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {filtered.map((p, i) => (
              <div key={i} className="group animate-fade-in" style={{ animationDelay: `${i * 100}ms` }}>
                <div className="overflow-hidden mb-6">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <h3 className="font-sans font-semibold text-lg text-foreground">{p.name}</h3>
                <p className="text-muted text-sm mt-1">{p.desc}</p>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-foreground font-medium">${p.price.toFixed(2)}</span>
                  <div className="flex gap-3">
                    <Link
                      to={`/product/${p.id}`}
                      className="text-sm font-medium text-muted hover:text-foreground transition-colors"
                    >
                      View Details
                    </Link>
                    <button
                      onClick={() => addToCart({ name: p.name, price: p.price, image: p.image })}
                      className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-accent transition-colors tracking-wide uppercase"
                    >
                      Add to cart <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Shop;
