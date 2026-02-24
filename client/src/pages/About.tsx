import { motion } from "framer-motion";
import { Target, Lightbulb, Heart, Shield, Award, Users, ChevronDown, ChevronUp, GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function About() {
  const [showAllResults, setShowAllResults] = useState(false);

  const values = [
    { icon: Shield, title: "Integrity", desc: "Honest guidance and transparent results are our pillars." },
    { icon: Award, title: "Excellence", desc: "We strive for nothing less than the best in education quality." },
    { icon: Heart, title: "Personalized Care", desc: "Understanding and nurturing every student's unique potential." },
    { icon: Lightbulb, title: "Innovation", desc: "Constantly evolving our teaching methodologies for better results." },
  ];

  const timeline = [
    { year: "2010", title: "Founded", desc: "Started with a vision and 10 dedicated students in a small classroom." },
    { year: "2015", title: "Expansion", desc: "Opened our second branch and introduced advanced NEET/JEE modules." },
    { year: "2018", title: "Digital Leap", desc: "Launched our online learning platform and smart classrooms." },
    { year: "2023", title: "New Horizons", desc: "Expanded to a dedicated Library wing and state-of-the-art labs." },
  ];

  const faculty = [
    {
      name: "Dr. Rajesh Kumar",
      role: "HOD - Physics",
      exp: "15+ Years",
      quote: "Physics is not about formulas, it's about understanding the universe.",
      image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=200&h=200&auto=format&fit=crop"
    },
    {
      name: "Prof. Sneha Verma",
      role: "HOD - Biology",
      exp: "12+ Years",
      quote: "Biology is the most powerful technology ever created. Let's explore it together.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&h=200&auto=format&fit=crop"
    },
    {
      name: "Amit Singh",
      role: "Senior Math Faculty",
      exp: "10+ Years",
      quote: "Mathematics is the language of logic. Master the language, master the world.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&h=200&auto=format&fit=crop"
    }
  ];

  const results = [
    { name: "Aryan Singh", rank: "AIR 42", exam: "NEET 2024", score: "710/720", comment: "CGA's test series was the game changer for me." },
    { name: "Isha Gupta", rank: "AIR 156", exam: "JEE Adv 2024", score: "285/360", comment: "The faculty support here is unparalleled." },
    { name: "Rohan Das", rank: "AIR 210", exam: "NEET 2024", score: "695/720", comment: "Personalized attention helped me clear my basics." },
    { name: "Sanya Malik", rank: "AIR 450", exam: "JEE Main 2024", score: "99.8%ile", comment: "Structured curriculum and regular PTMs kept me on track." },
    // Mock data for show more
    ...Array(16).fill(null).map((_, i) => ({
      name: `Student ${i + 5}`,
      rank: `Rank ${1000 + i * 100}`,
      exam: "Competitive Exam",
      score: "Excellent",
      comment: "A great learning experience at Career Goal Academy."
    }))
  ];

  return (
    <div className="min-h-screen bg-slate-50 pb-24 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative bg-slate-900 py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-152305085306e-8c44c212c0cc?q=80&w=2000&auto=format&fit=crop')] opacity-20 bg-cover bg-center" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-display font-bold text-white mb-6"
          >
            Our Legacy of <span className="text-primary">Excellence</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-300 max-w-2xl mx-auto font-body"
          >
            Empowering the next generation of leaders through innovation, integrity, and personalized care.
          </motion.p>
        </div>
      </section>

      {/* Vision & Mission - Glassmorphism Feature Grid */}
      <section className="py-24 container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative p-10 rounded-3xl bg-white/40 backdrop-blur-xl border border-white/40 shadow-2xl overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform">
              <Lightbulb className="w-32 h-32 text-primary" />
            </div>
            <h2 className="text-4xl font-display font-bold text-slate-900 mb-6">Our Vision</h2>
            <p className="text-slate-600 text-xl leading-relaxed font-body">
              "Empowering the next generation of leaders." We envision a future where every student has the tools, confidence, and character to lead and innovate in a rapidly changing world.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative p-10 rounded-3xl bg-primary/5 backdrop-blur-xl border border-primary/10 shadow-2xl overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform">
              <Target className="w-32 h-32 text-primary" />
            </div>
            <h2 className="text-4xl font-display font-bold text-slate-900 mb-6">Our Mission</h2>
            <p className="text-slate-600 text-xl leading-relaxed font-body">
              Every day, we strive to identify the unique potential in our students. We provide world-class resources, expert mentorship, and a nurturing environment to transform academic goals into reality.
            </p>
          </motion.div>
        </div>

        {/* Core Values Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-2xl bg-white border border-slate-100 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 group"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <v.icon className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-3">{v.title}</h3>
              <p className="text-slate-500 font-body">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Director's Message */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2"
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-primary/20 rounded-3xl blur-2xl" />
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop" 
                  alt="Director" 
                  className="relative rounded-3xl shadow-2xl w-full object-cover aspect-[4/5]"
                />
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2 space-y-8"
            >
              <div className="inline-block px-4 py-2 bg-primary/10 text-primary font-bold rounded-full text-sm tracking-widest uppercase">
                Director's Message
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 leading-tight">
                "Our philosophy is simple: Every student is a leader in waiting."
              </h2>
              <div className="space-y-6 text-lg text-slate-600 font-body leading-relaxed">
                <p>
                  At Career Goal Academy, we don't just teach subjects; we inspire dreams. We believe that education is the most powerful weapon which you can use to change the world. 
                </p>
                <p>
                  Our goal is to provide an environment where curiosity is encouraged, and excellence is a habit. We are committed to walking alongside every student on their journey to success.
                </p>
              </div>
              <div className="pt-6 border-t border-slate-100">
                <p className="text-2xl font-display font-bold text-slate-900">Dr. S.K. Sharma</p>
                <p className="text-primary font-bold">Founder & Managing Director</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story Timeline */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900">Our Journey</h2>
            <p className="text-slate-500 mt-4 max-w-2xl mx-auto">A decade of growth, stability, and thousands of success stories.</p>
          </div>
          <div className="relative">
            {/* Center Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-slate-200 hidden md:block" />
            
            <div className="space-y-16">
              {timeline.map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`flex flex-col md:flex-row items-center ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  <div className="flex-1 w-full md:w-auto text-center md:text-left px-8">
                    <div className={`p-8 rounded-2xl bg-white shadow-xl border border-slate-100 ${i % 2 !== 0 ? 'md:text-left' : 'md:text-right'}`}>
                      <span className="text-3xl font-display font-bold text-primary mb-2 block">{item.year}</span>
                      <h3 className="text-2xl font-display font-bold text-slate-900 mb-3">{item.title}</h3>
                      <p className="text-slate-600 font-body">{item.desc}</p>
                    </div>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-primary border-4 border-white shadow-xl z-10 my-4 md:my-0" />
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Spotlight */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900">The Mentors</h2>
            <p className="text-slate-500 mt-4 max-w-2xl mx-auto">Learn from the best in the industry who are passionate about teaching.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {faculty.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative h-[500px] rounded-3xl overflow-hidden shadow-2xl"
              >
                <img src={f.image} alt={f.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent" />
                <div className="absolute bottom-0 p-8 w-full transform transition-transform duration-500 group-hover:-translate-y-4">
                  <div className="bg-primary/20 backdrop-blur-md px-3 py-1 rounded-full text-primary-foreground text-xs font-bold w-fit mb-3">
                    {f.role} • {f.exp}
                  </div>
                  <h3 className="text-3xl font-display font-bold text-white mb-2">{f.name}</h3>
                  <p className="text-slate-300 font-body italic opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    "{f.quote}"
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results & Wall of Fame */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-[150px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600 rounded-full blur-[150px]" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-display font-bold">Wall of Fame</h2>
            <div className="flex flex-wrap justify-center gap-12 mt-12">
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-2">1500+</div>
                <p className="text-slate-400 uppercase tracking-widest text-sm font-bold">Selections</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-2">98%</div>
                <p className="text-slate-400 uppercase tracking-widest text-sm font-bold">Pass Rate</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-2">50+</div>
                <p className="text-slate-400 uppercase tracking-widest text-sm font-bold">Top 100 Ranks</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {(showAllResults ? results : results.slice(0, 4)).map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: (i % 4) * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-md p-6 rounded-3xl border border-white/10 hover:border-primary/50 transition-colors"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-slate-700 flex items-center justify-center border-2 border-primary overflow-hidden">
                    <GraduationCap className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl">{r.name}</h4>
                    <p className="text-primary font-bold">{r.rank}</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">{r.exam}</span>
                    <span className="text-white font-bold">{r.score}</span>
                  </div>
                  <p className="text-slate-400 font-body text-sm italic italic leading-relaxed">
                    "{r.comment}"
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button 
              onClick={() => setShowAllResults(!showAllResults)}
              variant="outline" 
              size="lg"
              className="bg-transparent border-white/20 text-white hover:bg-white hover:text-slate-900 h-14 px-10 text-lg rounded-full"
            >
              {showAllResults ? (
                <>Show Less <ChevronUp className="ml-2" /></>
              ) : (
                <>View All Achievements <ChevronDown className="ml-2" /></>
              )}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

