import { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { ShieldCheck, Zap, RotateCcw, Users } from 'lucide-react';

const STYLES = ['Minimal', 'Aesthetic', 'Productivity', 'Business'];
const COLORS = [
  { name: 'Warm Cream', hex: '#F5F0E8' },
  { name: 'Sage Green', hex: '#C1C8B4' },
  { name: 'Dusty Rose', hex: '#D4A5A5' },
  { name: 'Slate Blue', hex: '#92A8D1' },
  { name: 'Carbon', hex: '#2C2C2C' },
  { name: 'Sand', hex: '#E8D5C0' },
];
const DURATIONS = [
  { label: '3 Months', price: 24.99 },
  { label: '6 Months', price: 29.99 },
  { label: '12 Months', price: 34.99 },
];
const ADD_ONS = [
  { name: 'Habit Tracker', price: 3 },
  { name: 'Goal Planning', price: 3 },
  { name: 'Reflection Journal', price: 3 },
  { name: 'Business Dashboard', price: 5 },
];

export const Customize = () => {
  const { addToCart } = useCart();
  const [style, setStyle] = useState('Minimal');
  const [duration, setDuration] = useState(DURATIONS[1]);
  const [color, setColor] = useState(COLORS[0]);
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);
  const [total, setTotal] = useState(duration.price);

  useEffect(() => {
    const addOnTotal = ADD_ONS.filter(a => selectedAddOns.includes(a.name)).reduce((acc, a) => acc + a.price, 0);
    setTotal(duration.price + addOnTotal);
  }, [duration, selectedAddOns]);

  const toggleAddOn = (name: string) => {
    setSelectedAddOns(prev => prev.includes(name) ? prev.filter(n => n !== name) : [...prev, name]);
  };

  const handleAddToCart = () => {
    addToCart({
      name: `Custom ${style} Planner`,
      price: total,
      color: color.name,
      style,
      duration: duration.label,
      addOns: selectedAddOns,
      image: `/assets/images/hero-ipad.jpg?text=${style}+Planner`,
    });
  };

  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row">
        {/* Left: Preview */}
        <div className="md:w-[55%] md:sticky md:top-20 h-fit p-6 md:p-12">
          <div className="aspect-[4/5] bg-background-secondary flex items-center justify-center overflow-hidden">
            <img
              src="/assets/images/customize-preview.jpeg"
              alt="Planner preview"
              className="w-full h-full object-cover transition-all duration-700"
            />
          </div>
          <div className="grid grid-cols-3 gap-4 mt-6">
            {['Layout', 'Pages', 'Cover'].map(label => (
              <div key={label} className="aspect-square bg-background-secondary border border-border flex items-center justify-center">
                <span className="text-xs text-muted">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Controls */}
        <div className="md:w-[45%] p-6 md:p-12 md:border-l border-border">
          <div className="mb-10">
            <h1 className="font-display text-3xl md:text-4xl text-foreground mb-2 font-bold">MindFlow Custom Planner</h1>
            <p className="text-2xl font-sans text-accent font-light">${total.toFixed(2)}</p>
            <p className="mt-6 text-muted leading-relaxed">
              Design a digital workspace that mirrors your mind. Choose your duration, select your aesthetic, and add the modules you need to succeed.
            </p>
          </div>

          {/* Style */}
          <div className="mb-12">
            <h4 className="section-label">1. Planner Style</h4>
            <div className="grid grid-cols-2 gap-3">
              {STYLES.map(s => (
                <button
                  key={s}
                  onClick={() => setStyle(s)}
                  className={`py-4 px-6 text-sm font-medium transition-all duration-300 ${
                    style === s
                      ? 'bg-foreground text-primary-foreground border border-foreground'
                      : 'border border-border text-muted hover:border-foreground'
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Duration */}
          <div className="mb-12">
            <h4 className="section-label">2. Duration</h4>
            <div className="flex flex-wrap gap-3">
              {DURATIONS.map(d => (
                <button
                  key={d.label}
                  onClick={() => setDuration(d)}
                  className={`flex-1 py-4 text-sm font-medium transition-all duration-300 ${
                    duration.label === d.label
                      ? 'bg-foreground text-primary-foreground border border-foreground'
                      : 'border border-border text-muted hover:border-foreground'
                  }`}
                >
                  {d.label}
                </button>
              ))}
            </div>
          </div>

          {/* Color */}
          <div className="mb-12">
            <h4 className="section-label">3. Color Theme</h4>
            <div className="flex gap-4">
              {COLORS.map(c => (
                <button
                  key={c.name}
                  onClick={() => setColor(c)}
                  className={`w-10 h-10 rounded-full border-2 transition-transform duration-300 ${
                    color.name === c.name ? 'border-foreground scale-110' : 'border-transparent'
                  }`}
                  style={{ backgroundColor: c.hex }}
                  title={c.name}
                />
              ))}
            </div>
          </div>

          {/* Add-ons */}
          <div className="mb-12">
            <h4 className="section-label">4. Add-on Modules</h4>
            <div className="space-y-3">
              {ADD_ONS.map(a => (
                <label
                  key={a.name}
                  className="flex items-center justify-between p-4 border border-border cursor-pointer hover:bg-background-secondary transition-colors duration-300"
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={selectedAddOns.includes(a.name)}
                      onChange={() => toggleAddOn(a.name)}
                      className="accent-foreground w-4 h-4"
                    />
                    <span className="text-sm font-medium text-foreground">{a.name}</span>
                  </div>
                  <span className="text-xs text-muted">+${a.price}</span>
                </label>
              ))}
            </div>
          </div>

          <button onClick={handleAddToCart} className="w-full btn-primary py-5">
            ADD TO CART — ${total.toFixed(2)}
          </button>

          {/* Trust Badges */}
          <div className="grid grid-cols-2 gap-y-6 mt-16 pt-12 border-t border-border">
            <div className="flex items-center gap-3 text-xs font-medium text-muted">
              <ShieldCheck size={18} className="text-accent" /> Secure Checkout
            </div>
            <div className="flex items-center gap-3 text-xs font-medium text-muted">
              <Zap size={18} className="text-accent" /> Instant Download
            </div>
            <div className="flex items-center gap-3 text-xs font-medium text-muted">
              <RotateCcw size={18} className="text-accent" /> 30-Day Returns
            </div>
            <div className="flex items-center gap-3 text-xs font-medium text-muted">
              <Users size={18} className="text-accent" /> 14k+ Planners
            </div>
          </div>
        </div>
      </div>

      {/* Mobile sticky bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-background border-t border-border px-6 py-4 flex items-center justify-between z-40">
        <span className="font-sans text-lg font-semibold text-foreground">${total.toFixed(2)}</span>
        <button onClick={handleAddToCart} className="btn-primary py-3 px-8">ADD TO CART</button>
      </div>
    </main>
  );
};

export default Customize;
