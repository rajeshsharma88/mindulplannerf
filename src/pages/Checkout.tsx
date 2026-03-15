import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const STEPS = ['Your Info', 'Payment', 'Confirm'];

export const Checkout = () => {
  const { subtotal, cart, clearCart } = useCart();
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({ name: '', email: '', country: '' });

  const handleConfirm = () => {
    setStep(2);
    clearCart();
  };

  return (
    <main className="bg-background">
      <section className="section-padding">
        <div className="max-w-2xl mx-auto px-6">
          {/* Step Indicators */}
          <div className="flex items-center justify-center gap-4 mb-16">
            {STEPS.map((s, i) => (
              <div key={s} className="flex items-center gap-4">
                <div className={`flex items-center gap-2 ${i <= step ? 'text-foreground' : 'text-muted'}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border transition-all ${
                    i < step ? 'bg-foreground text-primary-foreground border-foreground' :
                    i === step ? 'border-foreground' : 'border-border'
                  }`}>
                    {i < step ? <Check size={14} /> : i + 1}
                  </div>
                  <span className="text-sm font-medium hidden sm:block">{s}</span>
                </div>
                {i < STEPS.length - 1 && <div className="w-12 h-px bg-border" />}
              </div>
            ))}
          </div>

          {/* Step 0: Info */}
          {step === 0 && (
            <div className="space-y-8">
              <h2 className="font-display text-2xl md:text-3xl text-foreground font-semibold">Your information</h2>
              <div className="space-y-5">
                <input
                  type="text"
                  placeholder="Full name"
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                  className="w-full px-5 py-4 bg-background-secondary text-foreground text-sm border border-border outline-none focus:border-foreground transition-colors placeholder:text-muted"
                />
                <input
                  type="email"
                  placeholder="Email address"
                  value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                  className="w-full px-5 py-4 bg-background-secondary text-foreground text-sm border border-border outline-none focus:border-foreground transition-colors placeholder:text-muted"
                />
                <input
                  type="text"
                  placeholder="Country"
                  value={form.country}
                  onChange={e => setForm({ ...form, country: e.target.value })}
                  className="w-full px-5 py-4 bg-background-secondary text-foreground text-sm border border-border outline-none focus:border-foreground transition-colors placeholder:text-muted"
                />
              </div>
              <button onClick={() => setStep(1)} className="btn-primary">CONTINUE TO PAYMENT</button>
            </div>
          )}

          {/* Step 1: Payment */}
          {step === 1 && (
            <div className="space-y-8">
              <h2 className="font-display text-2xl md:text-3xl text-foreground font-semibold">Payment</h2>
              <div className="bg-background-secondary p-8 space-y-4">
                <p className="text-sm text-muted">This is a demo checkout. No real payment will be processed.</p>
                <div className="flex justify-between text-sm border-t border-border pt-4">
                  <span className="text-muted">Total</span>
                  <span className="font-semibold text-foreground">${subtotal.toFixed(2)}</span>
                </div>
              </div>
              <div className="flex gap-4">
                <button onClick={() => setStep(0)} className="btn-secondary">BACK</button>
                <button onClick={handleConfirm} className="btn-primary">CONFIRM ORDER</button>
              </div>
            </div>
          )}

          {/* Step 2: Confirm */}
          {step === 2 && (
            <div className="text-center space-y-6 py-12">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto">
                <Check size={28} className="text-foreground" />
              </div>
              <h2 className="font-display text-2xl md:text-3xl text-foreground font-semibold">Order confirmed!</h2>
              <p className="text-muted max-w-md mx-auto">
                Thank you for your purchase. This is a demo — in a real scenario, your planner would be delivered instantly to your email.
              </p>
              <Link to="/shop" className="btn-primary inline-block">CONTINUE SHOPPING</Link>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default Checkout;
