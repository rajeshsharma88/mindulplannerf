import { Heart, Leaf, Sun } from 'lucide-react';

const values = [
  { icon: Heart, title: "Community First", desc: "We build for real people, not metrics. Every feature starts with a conversation." },
  { icon: Leaf, title: "Intentional Design", desc: "Every element earns its place. We believe in clarity over complexity." },
  { icon: Sun, title: "Accessible Planning", desc: "Great planning tools shouldn't require a learning curve or a big budget." },
];

export const About = () => {
  return (
    <main className="bg-background">
      {/* Hero */}
      <section className="overflow-hidden">
        <img
          src="/assets/images/about-hero.jpeg"
          alt="MindFlow story"
          className="w-full h-[300px] md:h-[500px] object-cover"
        />
      </section>

      {/* Story */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 md:gap-20">
          <div>
            <h2 className="font-display text-3xl md:text-4xl text-foreground font-semibold mb-6">Our story</h2>
            <p className="text-muted leading-[1.75] mb-4">
              MindFlow started with a simple frustration: every planner we tried felt like it was designed for someone else. 
              The layouts didn't match our workflows, the aesthetics didn't inspire us, and the rigid structures felt more 
              like constraints than tools.
            </p>
            <p className="text-muted leading-[1.75]">
              So we built what we wished existed — a digital planner that adapts to you. One that's as beautiful as it is 
              functional, as flexible as your life demands, and as intentional as the goals you're chasing.
            </p>
          </div>
          <div>
            <h2 className="font-display text-3xl md:text-4xl text-foreground font-semibold mb-6">Our philosophy</h2>
            <p className="text-muted leading-[1.75] mb-4">
              We believe that how you plan shapes how you live. A cluttered planner creates a cluttered mind. 
              A beautiful, intentional system creates space for what matters.
            </p>
            <p className="text-muted leading-[1.75]">
              That's why every MindFlow planner is designed with generous whitespace, warm aesthetics, and modular 
              pages that let you build a system that's truly yours.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-background-secondary py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="font-display italic text-2xl md:text-4xl text-foreground leading-relaxed">
            "We don't just make planners. We make space for the life you're building."
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-display text-3xl md:text-4xl text-foreground text-center mb-16 font-semibold">What we stand for</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {values.map((v, i) => (
              <div key={i} className="text-center space-y-4">
                <div className="w-14 h-14 bg-background-secondary flex items-center justify-center rounded-full mx-auto">
                  <v.icon size={22} className="text-accent" strokeWidth={1.5} />
                </div>
                <h3 className="font-sans font-semibold text-xl text-foreground">{v.title}</h3>
                <p className="text-muted leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
