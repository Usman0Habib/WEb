import { motion } from "framer-motion";
import { Target, Lightbulb, Heart, Shield, Award, Users, ChevronDown, ChevronUp, GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState, useRef } from "react";
import founderImg from "@/assets/images/founder.png";

export default function About() {
  const [showAllResults, setShowAllResults] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const values = [
    { icon: Shield, title: "Integrity", desc: "Honest guidance and transparent results are our pillars." },
    { icon: Award, title: "Excellence", desc: "We strive for nothing less than the best in education quality." },
    { icon: Heart, title: "Personalized Care", desc: "Understanding and nurturing every student's unique potential." },
    { icon: Lightbulb, title: "Innovation", desc: "Constantly evolving our teaching methodologies for better results." },
  ];

  const faculty = [
    { name: "Vivek Jha", role: "Economics (11th-12th), Maths (9th-10th)", branch: "Om Enclave + Roshan nagar + Nikhil Vihar", phone: "8802807397", image: "/faculty/Vivek_Jha.jpg" },
    { name: "CA Nikunj", role: "Accounts (11th-12th)", branch: "Om Enclave + Roshan nagar", phone: "9899795706", image: "/faculty/Ca_Nikunj_Sharma.jpg" },
    { name: "Sagar Sir", role: "Mathematics (9th-12th)", branch: "Om Enclave + Vinay nagar + Nikhil Vihar", phone: "8447083627", image: "/faculty/Sagar.png" },
    { name: "Neeraj Varma", role: "Physics & Maths (11th-12th), Maths & Science (9th-10th)", branch: "Roshan nagar", phone: "9540139492", image: "/faculty/Neeraj_Verma.jpg" },
    { name: "Sumit Shah", role: "Biology & Chemistry (11th-12th), Science (9th-10th)", branch: "Vinay nagar", phone: "8595157784", image: "/faculty/Sumit_Shah.jpg" },
    { name: "Sumit Choudhary", role: "Physics & Biology (11th-12th), Science (9th-10th)", branch: "Om Enclave + Vinay nagar", phone: "8178600078", image: "/faculty/Sumit_Chaudhari.jpg" },
    { name: "Ajit Mishra", role: "Biology & Chemistry (11th-12th)", branch: "Roshan nagar + Nikhil Vihar", phone: "9354055230", image: "/faculty/Ajit_Mishra.png" },
    { name: "Vikash Sir", role: "Pol. Science & History (11th-12th), S.ST (9th-10th)", branch: "Om Enclave + Roshan nagar + Nikhil Vihar", phone: "7678191864", image: "/faculty/Vikash.jpg" },
    { name: "Anjali Mam", role: "History (11th-12th)", branch: "Vinay nagar", phone: "8368184330", image: "/faculty/Anjali.png" },
    { name: "Ankush Sir", role: "Pol. Science (11th-12th)", branch: "Vinay nagar", phone: "9311019383", image: "/faculty/Ankush.png" },
    { name: "Akash Sir", role: "Economics (11th-12th), English & S.ST (9th-10th)", branch: "Om Enclave + Vinay nagar", phone: "9205088610", image: "/faculty/Akash.jpg" },
    { name: "Nidhi Mam", role: "Science (9th-10th)", branch: "Nikhil Vihar", phone: "8178765101", image: "/faculty/Nidhi_Ojha.jpg" },
    { name: "Anand Sir", role: "Accounts (11th-12th)", branch: "Vinay nagar", phone: "N/A", image: "/faculty/Anand.jpg" },
    { name: "Shahabuddin Sir", role: "English (9th-10th)", branch: "Nikhil Vihar", phone: "N/A", image: "/faculty/Shahabuddin.png" },
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

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

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

      {/* Founder's Message */}
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
                  src={founderImg} 
                  alt="Founder" 
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
                Founder's Message
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
                <p className="text-2xl font-display font-bold text-slate-900">Vivek Jha</p>
                <p className="text-primary font-bold">Founder & Managing Director</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Faculty Spotlight */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-end justify-between mb-12">
            <div className="text-left">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900">The Faculty</h2>
              <p className="text-slate-500 mt-4 max-w-2xl font-body">Learn from the best in the industry who are passionate about teaching.</p>
            </div>
            <div className="flex gap-4 mt-8 md:mt-0">
              <Button 
                variant="outline" 
                size="icon" 
                className="rounded-full h-12 w-12 border-slate-200"
                onClick={() => scroll("left")}
              >
                <ChevronDown className="rotate-90" />
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                className="rounded-full h-12 w-12 border-slate-200"
                onClick={() => scroll("right")}
              >
                <ChevronUp className="rotate-90" />
              </Button>
            </div>
          </div>
          
          <div 
            ref={scrollRef}
            className="flex gap-8 overflow-x-auto pb-8 snap-x snap-mandatory scroll-smooth custom-scrollbar"
          >
            {faculty.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="min-w-[300px] md:min-w-[350px] group relative h-[450px] rounded-3xl overflow-hidden shadow-xl snap-center"
              >
                <img src={f.image} alt={f.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent" />
                <div className="absolute bottom-0 p-8 w-full transform transition-transform duration-500 group-hover:-translate-y-4">
                  <div className="bg-primary/20 backdrop-blur-md px-3 py-1 rounded-full text-primary-foreground text-xs font-bold w-fit mb-3">
                    {f.role}
                  </div>
                  <h3 className="text-3xl font-display font-bold text-white mb-2">{f.name}</h3>
                  <div className="text-slate-300 font-body opacity-0 group-hover:opacity-100 transition-opacity duration-500 space-y-1">
                    <p className="flex items-center gap-2"><span className="text-primary font-bold uppercase text-[10px]">Branch:</span> {f.branch}</p>
                    <p className="flex items-center gap-2"><span className="text-primary font-bold uppercase text-[10px]">Phone:</span> {f.phone}</p>
                  </div>
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

