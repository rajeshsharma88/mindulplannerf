import { useParams, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { ArrowLeft, Star, ShieldCheck, Zap, RotateCcw, Users } from 'lucide-react';

const PRODUCTS = [
  {
    id: "daily-flow",
    name: "The Daily Flow",
    desc: "Your day, beautifully organized.",
    price: 24.99,
    category: "Daily",
    color: "F0E6D6",
    image: "/assets/images/product-daily-flow.jpeg",
    longDesc: "Transform your daily routine with The Daily Flow. This comprehensive daily planner includes hourly time blocking, priority task management, habit tracking, and reflection sections. Perfect for busy professionals who need structure without overwhelm.",
    features: [
      "Hourly time blocking layout",
      "Priority task management",
      "Daily habit tracker",
      "Evening reflection prompts",
      "Weekly review section",
      "Goal tracking integration"
    ],
    pages: 45,
    format: "Letter size (8.5\" x 11\")",
    compatible: "GoodNotes, Notability, Xodo"
  },
  {
    id: "goal-getter",
    name: "The Goal Getter",
    desc: "Big dreams, broken into steps.",
    price: 29.99,
    category: "Productivity",
    color: "E8D5C0",
    image: "/assets/images/product-goal-getter.jpeg",
    longDesc: "Turn your aspirations into achievements with The Goal Getter. This productivity-focused planner breaks down big goals into actionable steps, with quarterly planning, monthly reviews, and weekly action items.",
    features: [
      "Quarterly goal planning",
      "Monthly milestone tracking",
      "Weekly action items",
      "Progress visualization",
      "Obstacle planning",
      "Celebration prompts"
    ],
    pages: 52,
    format: "Letter size (8.5\" x 11\")",
    compatible: "GoodNotes, Notability, Xodo"
  },
  {
    id: "year-planner",
    name: "The Year Planner",
    desc: "365 days of intentional living.",
    price: 34.99,
    category: "Annual",
    color: "D4C5B0",
    image: "/assets/images/product-year-planner.jpeg",
    longDesc: "Plan your entire year with intention using The Year Planner. Features yearly overview, quarterly planning, monthly calendars, and weekly planning sections all in one comprehensive system.",
    features: [
      "Yearly overview calendar",
      "Quarterly goal setting",
      "Monthly planning pages",
      "Weekly planning sections",
      "Holiday and event tracking",
      "Year-end reflection"
    ],
    pages: 68,
    format: "Letter size (8.5\" x 11\")",
    compatible: "GoodNotes, Notability, Xodo"
  },
  {
    id: "weekly-reset",
    name: "The Weekly Reset",
    desc: "Plan your week with clarity.",
    price: 22.99,
    category: "Weekly",
    color: "C1C8B4",
    image: "/assets/images/customize-preview.jpeg",
    longDesc: "Start each week with clarity and purpose using The Weekly Reset. This focused planner helps you plan your week, track progress, and reset for the week ahead.",
    features: [
      "Weekly goal setting",
      "Daily task planning",
      "Progress tracking",
      "Weekly reflection",
      "Priority matrix",
      "Weekend planning"
    ],
    pages: 32,
    format: "Letter size (8.5\" x 11\")",
    compatible: "GoodNotes, Notability, Xodo"
  },
  {
    id: "minimal-focus",
    name: "The Minimal Focus",
    desc: "Less noise, more progress.",
    price: 19.99,
    category: "Minimal",
    color: "D4A5A5",
    image: "/assets/images/about-hero.jpeg",
    longDesc: "Cut through the noise with The Minimal Focus. This clean, distraction-free planner focuses on what matters most, helping you achieve deep focus and meaningful progress.",
    features: [
      "Clean, minimal design",
      "Essential planning only",
      "Focus session tracking",
      "Distraction log",
      "Weekly priorities",
      "Monthly review"
    ],
    pages: 28,
    format: "Letter size (8.5\" x 11\")",
    compatible: "GoodNotes, Notability, Xodo"
  },
  {
    id: "hustle-planner",
    name: "The Hustle Planner",
    desc: "Built for builders and doers.",
    price: 32.99,
    category: "Productivity",
    color: "92A8D1",
    image: "/assets/images/hero-ipad.jpeg",
    longDesc: "Fuel your entrepreneurial journey with The Hustle Planner. Designed for business owners and creators, this planner includes business planning, client management, and productivity tracking.",
    features: [
      "Business goal planning",
      "Client/project tracking",
      "Revenue planning",
      "Marketing task management",
      "Idea capture section",
      "Business reflection prompts"
    ],
    pages: 56,
    format: "Letter size (8.5\" x 11\")",
    compatible: "GoodNotes, Notability, Xodo"
  }
];

export const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();

  const product = PRODUCTS.find(p => p.id === id);

  if (!product) {
    return (
      <main className="bg-background min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-4xl text-foreground mb-4">Product Not Found</h1>
          <Link to="/shop" className="btn-primary">Back to Shop</Link>
        </div>
      </main>
    );
  }

  const handleAddToCart = () => {
    addToCart({
      name: product.name,
      price: product.price,
      image: product.image,
    });
  };

  return (
    <main className="bg-background">
      {/* Breadcrumb */}
      <section className="border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center gap-2 text-sm text-muted">
            <Link to="/" className="hover:text-foreground">Home</Link>
            <span>/</span>
            <Link to="/shop" className="hover:text-foreground">Shop</Link>
            <span>/</span>
            <span className="text-foreground">{product.name}</span>
          </div>
        </div>
      </section>

      {/* Product Hero */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20">
            {/* Image */}
            <div className="aspect-[4/5] bg-background-secondary flex items-center justify-center overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="space-y-8">
              <div>
                <Link to="/shop" className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground mb-4">
                  <ArrowLeft size={16} />
                  Back to Shop
                </Link>
                <h1 className="font-display text-3xl md:text-4xl text-foreground font-bold mb-2">{product.name}</h1>
                <p className="text-xl font-sans text-accent font-light">${product.price.toFixed(2)}</p>
                <p className="text-muted mt-4 leading-relaxed">{product.longDesc}</p>
              </div>

              {/* Quick Info */}
              <div className="grid grid-cols-2 gap-4 p-6 bg-background-secondary">
                <div>
                  <p className="text-sm text-muted">Pages</p>
                  <p className="font-semibold">{product.pages}</p>
                </div>
                <div>
                  <p className="text-sm text-muted">Format</p>
                  <p className="font-semibold">{product.format}</p>
                </div>
                <div className="col-span-2">
                  <p className="text-sm text-muted">Compatible Apps</p>
                  <p className="font-semibold">{product.compatible}</p>
                </div>
              </div>

              {/* Add to Cart */}
              <button onClick={handleAddToCart} className="w-full btn-primary py-4">
                ADD TO CART — ${product.price.toFixed(2)}
              </button>

              {/* Trust Badges */}
              <div className="grid grid-cols-2 gap-y-6 pt-8">
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
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-background-secondary">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-display text-3xl text-foreground text-center mb-12 font-semibold">What's Included</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {product.features.map((feature, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-6 h-6 bg-accent flex items-center justify-center rounded-full flex-shrink-0">
                  <Star size={12} className="text-white" fill="currentColor" />
                </div>
                <span className="text-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-display text-3xl text-foreground text-center mb-12 font-semibold">What our customers say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Sarah M.", quote: "This planner completely changed how I approach my days.", stars: 5, avatar: "/assets/images/avatar-1.jpeg" },
              { name: "James L.", quote: "The layout is perfect for my workflow.", stars: 5, avatar: "/assets/images/avatar-2.jpeg" },
              { name: "Priya K.", quote: "Worth every penny. Highly recommend!", stars: 5, avatar: "/assets/images/avatar-3.jpeg" },
            ].map((review, i) => (
              <div key={i} className="bg-background-secondary p-6 space-y-4">
                <div className="flex text-accent">
                  {[...Array(review.stars)].map((_, j) => <Star key={j} size={14} fill="currentColor" strokeWidth={0} />)}
                </div>
                <p className="font-display italic text-foreground leading-relaxed">"{review.quote}"</p>
                <div className="flex items-center gap-3">
                  <img src={review.avatar} alt={review.name} className="w-8 h-8 rounded-full" loading="lazy" />
                  <p className="font-sans text-sm text-muted font-medium">{review.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductDetail;