import { useState } from 'react';
import { Mail, Clock, ChevronDown } from 'lucide-react';

const FAQ_ITEMS = [
  { q: "How do I download my planner?", a: "After purchase, you'll receive an instant download link via email. You can also access your files from your account dashboard at any time." },
  { q: "Which apps are compatible?", a: "MindFlow planners work beautifully with GoodNotes, Notability, Noteshelf, Xodo, and any PDF-compatible annotation app on iPad, Android tablets, or desktop." },
  { q: "Can I get a refund?", a: "Absolutely. We offer a 30-day money-back guarantee. If MindFlow isn't right for you, just email us and we'll process your refund — no questions asked." },
  { q: "How do I customize after purchase?", a: "Your planner comes with modular pages. Simply rearrange, duplicate, or delete pages within your note-taking app to create your perfect setup." },
];

export const Contact = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thanks for reaching out! This is a demo — no message was sent.');
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <main className="bg-background">
      <section className="bg-background-secondary py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="font-display text-4xl md:text-5xl text-foreground font-bold">Get in touch</h1>
          <p className="text-muted mt-4 max-w-md mx-auto">We'd love to hear from you. Drop us a line and we'll get back within 24 hours.</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 md:gap-20">
          {/* Form */}
          <div>
            <h2 className="font-display text-2xl text-foreground font-semibold mb-8">Send us a message</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                type="text"
                placeholder="Your name"
                value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })}
                className="w-full px-5 py-4 bg-background-secondary text-foreground text-sm border border-border outline-none focus:border-foreground transition-colors placeholder:text-muted"
                required
              />
              <input
                type="email"
                placeholder="Your email"
                value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })}
                className="w-full px-5 py-4 bg-background-secondary text-foreground text-sm border border-border outline-none focus:border-foreground transition-colors placeholder:text-muted"
                required
              />
              <input
                type="text"
                placeholder="Subject"
                value={form.subject}
                onChange={e => setForm({ ...form, subject: e.target.value })}
                className="w-full px-5 py-4 bg-background-secondary text-foreground text-sm border border-border outline-none focus:border-foreground transition-colors placeholder:text-muted"
                required
              />
              <textarea
                placeholder="Your message"
                value={form.message}
                onChange={e => setForm({ ...form, message: e.target.value })}
                rows={6}
                className="w-full px-5 py-4 bg-background-secondary text-foreground text-sm border border-border outline-none focus:border-foreground transition-colors placeholder:text-muted resize-none"
                required
              />
              <button type="submit" className="btn-primary">SEND MESSAGE</button>
            </form>
          </div>

          {/* Info + FAQ */}
          <div>
            <h2 className="font-display text-2xl text-foreground font-semibold mb-8">Support</h2>
            <div className="space-y-6 mb-12">
              <div className="flex items-start gap-4">
                <Mail size={20} className="text-accent mt-0.5" strokeWidth={1.5} />
                <div>
                  <p className="font-sans text-sm font-semibold text-foreground">Email us</p>
                  <p className="text-sm text-muted">hello@mindflow.co</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock size={20} className="text-accent mt-0.5" strokeWidth={1.5} />
                <div>
                  <p className="font-sans text-sm font-semibold text-foreground">Response time</p>
                  <p className="text-sm text-muted">Within 24 hours, Mon–Fri</p>
                </div>
              </div>
            </div>

            <h3 className="font-display text-xl text-foreground font-semibold mb-6">Frequently asked questions</h3>
            <div className="space-y-0">
              {FAQ_ITEMS.map((item, i) => (
                <div key={i} className="border-b border-border">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between py-5 text-left"
                  >
                    <span className="font-sans text-sm font-medium text-foreground pr-4">{item.q}</span>
                    <ChevronDown
                      size={16}
                      className={`text-muted flex-shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {openFaq === i && (
                    <div className="pb-5">
                      <p className="text-sm text-muted leading-relaxed">{item.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
