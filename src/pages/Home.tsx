import { Link } from 'react-router-dom';
import { Star, ArrowRight, Sparkles, Download, Layout, Target, Shield, CheckCircle } from 'lucide-react';
import { useState } from 'react';

const features = [
  { icon: Sparkles, title: "Fully Customizable", desc: "Every page tailored to your specific workflow and planning style." },
  { icon: CheckCircle, title: "GoodNotes Compatible", desc: "Optimized for the world's best digital note-taking apps." },
  { icon: Download, title: "Instant Download", desc: "Start planning seconds after your purchase. No waiting." },
  { icon: Layout, title: "12 Layout Styles", desc: "From vertical hourly to horizontal minimalist layouts." },
  { icon: Target, title: "Habit + Goal Pages", desc: "Integrated systems for tracking what matters most." },
  { icon: Shield, title: "30-Day Guarantee", desc: "Not your flow? We'll refund you, no questions asked." },
];

const products = [
  { id: "daily-flow", name: "The Daily Flow", price: 24.99, image: "/assets/images/product-daily-flow.jpeg" },
  { id: "goal-getter", name: "The Goal Getter", price: 29.99, image: "/assets/images/product-goal-getter.jpeg" },
  { id: "year-planner", name: "The Year Planner", price: 34.99, image: "/assets/images/product-year-planner.jpeg" },
];

const testimonials = [
  { name: "Sarah M.", role: "Freelance Designer", quote: "MindFlow completely changed how I approach my days. I finally feel in control of my time.", avatar: "/assets/images/avatar-1.jpeg" },
  { name: "James L.", role: "Entrepreneur", quote: "The customization options are incredible. It's like having a planner built just for me.", avatar: "/assets/images/avatar-2.jpeg" },
  { name: "Priya K.", role: "Graduate Student", quote: "I've tried dozens of planners. This is the first one I've actually stuck with for more than a month.", avatar: "/assets/images/avatar-3.jpeg" },
];

const steps = [
  { num: "01", title: "Choose your style", desc: "Pick from minimal, aesthetic, productivity, or business layouts." },
  { num: "02", title: "Customize your pages", desc: "Add habit trackers, goal pages, journals, and more." },
  { num: "03", title: "Download & start planning", desc: "Instant delivery to your inbox. Works with GoodNotes, Notability, and more." },
];

export const Home = () => {
  const [email, setEmail] = useState('');

  return (
    <main className="bg-background">
      {/* Hero */}
      <section className="bg-background-secondary min-h-[80vh] flex items-center">
        <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-5 gap-12 md:gap-16 items-center">
          <div className="md:col-span-3 space-y-8">
            <div className="flex items-center gap-2 text-accent">
              <div className="flex">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" strokeWidth={0} />)}
              </div>
              <span className="font-sans text-xs font-semibold tracking-wider uppercase">Loved by 14,000+ planners</span>
            </div>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-foreground leading-[1.1] font-bold">
              Plan with purpose. <br />
              <span className="italic">Live with intention.</span>
            </h1>
            <p className="font-sans text-lg text-muted max-w-md leading-relaxed">
              Customizable digital planners built around your goals, not someone else's template.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/customize" className="btn-primary">CREATE MY PLANNER</Link>
              <Link to="/shop" className="btn-secondary">SHOP ALL</Link>
            </div>
          </div>
          <div className="md:col-span-2">
            <img
              src="/assets/images/about-hero.jpeg"
              alt="MindFlow digital planner open on iPad"
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Mission Band */}
      <section className="bg-foreground py-12 md:py-16">
        <p className="text-center font-display italic text-primary-foreground text-xl md:text-2xl lg:text-3xl px-6">
          "Your goals deserve more than a blank notebook."
        </p>
      </section>

      {/* Features */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-display text-3xl md:text-4xl text-foreground text-center mb-4 font-semibold">Why MindFlow?</h2>
          <p className="text-center text-muted mb-16 md:mb-20 max-w-lg mx-auto">Everything you need to plan with clarity and intention.</p>
          <div className="grid md:grid-cols-3 gap-x-12 gap-y-16 md:gap-y-20">
            {features.map((f, i) => (
              <div key={i} className="space-y-4">
                <div className="w-12 h-12 bg-background-secondary flex items-center justify-center rounded-full">
                  <f.icon size={20} className="text-accent" strokeWidth={1.5} />
                </div>
                <h3 className="font-sans font-semibold text-xl text-foreground tracking-tight">{f.title}</h3>
                <p className="font-sans text-muted leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-background-secondary">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-display text-3xl md:text-4xl text-foreground text-center mb-16 md:mb-20 font-semibold">How it works</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {steps.map((s, i) => (
              <div key={i} className="relative">
                <span className="font-display text-[100px] md:text-[120px] font-light text-border absolute -top-8 -left-2 leading-none select-none">{s.num}</span>
                <div className="relative pt-16 md:pt-20 space-y-3">
                  <h3 className="font-sans font-semibold text-xl text-foreground">{s.title}</h3>
                  <p className="text-muted leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-display text-3xl md:text-4xl text-foreground text-center mb-16 md:mb-20 font-semibold">The planners</h2>
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {products.map((p, i) => (
              <div key={i} className="group">
                <div className="overflow-hidden mb-6">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <h3 className="font-sans font-semibold text-lg text-foreground">{p.name}</h3>
                <p className="text-muted mt-1">${p.price.toFixed(2)}</p>
                <Link to={`/product/${p.id}`} className="inline-flex items-center gap-2 mt-3 text-sm font-medium text-foreground hover:text-accent transition-colors tracking-wide uppercase">
                  View Details <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="reviews" className="section-padding bg-background-secondary">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-display text-3xl md:text-4xl text-foreground text-center mb-4 font-semibold">Real people. Real results.</h2>
          <p className="text-center text-muted mb-16 md:mb-20">What our community has to say.</p>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-background p-8 md:p-10 space-y-6">
                <div className="flex text-accent">
                  {[...Array(5)].map((_, j) => <Star key={j} size={14} fill="currentColor" strokeWidth={0} />)}
                </div>
                <p className="font-display italic text-foreground text-lg leading-relaxed">"{t.quote}"</p>
                <div className="flex items-center gap-4">
                  <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full" loading="lazy" />
                  <div>
                    <p className="font-sans text-sm font-semibold text-foreground">{t.name}</p>
                    <p className="font-sans text-xs text-muted">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Email Capture */}
      <section className="bg-accent py-20 md:py-24">
        <div className="max-w-xl mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl text-foreground font-semibold mb-4">
            Get a free weekly planning template
          </h2>
          <p className="text-foreground/70 mb-10">Join 14,000+ people who plan with intention.</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 px-5 py-4 bg-background text-foreground text-sm border-0 outline-none placeholder:text-muted"
            />
            <button className="btn-primary whitespace-nowrap">SEND IT TO ME</button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
