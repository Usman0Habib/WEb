import { motion } from "framer-motion";
import {
  Target,
  Lightbulb,
  Heart,
  Shield,
  Award,
  Users,
  ChevronDown,
  ChevronUp,
  GraduationCap,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState, useRef } from "react";
import { useLocation } from "wouter";
import founderImg from "@/assets/images/founder.png";

// Import poster images for the results preview
import result12th_science from "@assets/WhatsApp_Image_2026-02-12_at_1.20.58_AM_(1)_1771931727437.jpeg";
import result12th_accounts_2024 from "@assets/WhatsApp_Image_2026-02-12_at_1.20.57_AM_(2)_1771971254687.jpeg";
import result12th_physics_2024 from "@assets/WhatsApp_Image_2026-02-12_at_1.20.57_AM_(4)_1771971325002.jpeg";
import result10th_2024 from "@assets/WhatsApp_Image_2026-02-12_at_1.20.58_AM_1771931727439.jpeg";

// Junior Faculty images
import divyaMam1 from "@assets/DivyaMam_1772374468156.png";
import divyaMam2 from "@assets/DivyaMam_(2)_1772374468155.png";
import jyotiMam from "@assets/JyotiMam_1772374468157.png";
import monuSir from "@assets/Monusir_1772374468158.png";
import rajeshSir from "@assets/RajeshJha_1772374468158.png";
import adityaSir from "@assets/AdityaSir_1772374468159.png";
import deveshSir from "@assets/DeveshSir_1772374468160.png";
import defaultAvatar from "@assets/image_1772375121058.png";

export default function About() {
  const [, setLocation] = useLocation();
  const scrollRef = useRef<HTMLDivElement>(null);

  const values = [
    {
      icon: Shield,
      title: "Integrity",
      desc: "Honest guidance and transparent results are our pillars.",
    },
    {
      icon: Award,
      title: "Excellence",
      desc: "We strive for nothing less than the best in education quality.",
    },
    {
      icon: Heart,
      title: "Personalized Care",
      desc: "Understanding and nurturing every student's unique potential.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      desc: "Constantly evolving our teaching methodologies for better results.",
    },
  ];

  const faculty = [
    {
      name: "Vivek Jha",
      role: "Economics (11th-12th), Maths (9th-10th)",
      branch: "Om Enclave + Roshan nagar + Nikhil Vihar",
      phone: "8802807397",
      image: "/faculty/Vivek_Jha.jpg",
    },
    {
      name: "CA Nikunj Sharma",
      role: "Accounts (11th-12th)",
      branch: "Om Enclave + Roshan nagar",
      phone: "9899795706",
      image: "/faculty/Ca_Nikunj_Sharma.jpg",
    },
    {
      name: "Sagar Sir",
      role: "Mathematics (9th-12th)",
      branch: "Om Enclave + Vinay nagar + Nikhil Vihar",
      phone: "8447083627",
      image: "/faculty/Sagar.png",
    },
    {
      name: "Neeraj Verma",
      role: "Physics & Maths (11th-12th), Maths & Science (9th-10th)",
      branch: "Roshan nagar",
      phone: "9540139492",
      image: "/faculty/Neeraj_Verma.jpg",
    },
    {
      name: "Sumit Shah",
      role: "Biology & Chemistry (11th-12th), Science (9th-10th)",
      branch: "Vinay nagar",
      phone: "8595157784",
      image: "/faculty/Sumit_Shah.jpg",
    },
    {
      name: "Sumit Choudhary",
      role: "Physics & Biology (11th-12th), Science (9th-10th)",
      branch: "Om Enclave + Vinay nagar",
      phone: "8178600078",
      image: "/faculty/Sumit_Chaudhari.jpg",
    },
    {
      name: "Ajit Mishra",
      role: "Biology & Chemistry (11th-12th)",
      branch: "Roshan nagar + Nikhil Vihar",
      phone: "9354055230",
      image: "/faculty/Ajit_Mishra.png",
    },
    {
      name: "Vikash Sir",
      role: "Pol. Science & History (11th-12th), S.ST (9th-10th)",
      branch: "Om Enclave + Roshan nagar + Nikhil Vihar",
      phone: "7678191864",
      image: "/faculty/Vikash.jpg",
    },
    {
      name: "Anjali Mam",
      role: "History (11th-12th)",
      branch: "Vinay nagar",
      phone: "8368184330",
      image: "/faculty/Anjali.png",
    },
    {
      name: "Ankush Sir",
      role: "Pol. Science (11th-12th)",
      branch: "Vinay nagar",
      phone: "9311019383",
      image: "/faculty/Ankush.png",
    },
    {
      name: "Akash Sir",
      role: "Economics (11th-12th), English & S.ST (9th-10th)",
      branch: "Om Enclave + Vinay nagar",
      phone: "9205088610",
      image: "/faculty/Akash.jpg",
    },
    {
      name: "Nidhi Mam",
      role: "Science (9th-10th)",
      branch: "Nikhil Vihar",
      phone: "8178765101",
      image: "/faculty/Nidhi_Ojha.jpg",
    },
    {
      name: "CA Anand Sir",
      role: "Accounts (11th-12th)",
      branch: "Vinay nagar",
      phone: "N/A",
      image: "/faculty/Anand.jpg",
    },
    {
      name: "Shahabuddin Sir",
      role: "English (9th-10th)",
      branch: "Nikhil Vihar",
      phone: "N/A",
      image: "/faculty/Shahabuddin.png",
    },
    {
      name: "Divya Mam",
      role: "Junior Teacher",
      image: divyaMam1,
    },
    {
      name: "Divya Mam",
      role: "Junior Teacher",
      image: divyaMam2,
    },
    {
      name: "Jyoti Mam",
      role: "Junior Teacher",
      image: jyotiMam,
    },
    {
      name: "Monu Sir",
      role: "Junior Teacher",
      image: monuSir,
    },
    {
      name: "Rajesh Jha",
      role: "Junior Teacher",
      image: rajeshSir,
    },
    {
      name: "Aditya Sir",
      role: "Junior Teacher",
      image: adityaSir,
    },
    {
      name: "Devesh Sir",
      role: "Junior Teacher",
      image: deveshSir,
    },
    {
      name: "Rohan Sir",
      role: "Junior Teacher",
      image: defaultAvatar,
    },
    {
      name: "Mamta Mam",
      role: "Junior Teacher",
      image: defaultAvatar,
    },
    {
      name: "Preeti Mam",
      role: "Junior Teacher",
      image: defaultAvatar,
    },
    {
      name: "Anjani Mam",
      role: "Junior Teacher",
      image: defaultAvatar,
    },
    {
      name: "Rashmi Mam",
      role: "Junior Teacher",
      image: defaultAvatar,
    },
    {
      name: "Shrishti Mam",
      role: "Junior Teacher",
      image: defaultAvatar,
    },
    {
      name: "Yogesh Sir",
      role: "Junior Teacher",
      image: defaultAvatar,
    },
  ];

  const resultPosters = [
    result12th_science,
    result12th_accounts_2024,
    result12th_physics_2024,
    result10th_2024,
  ];

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;
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
            Empowering the next generation of leaders through innovation,
            integrity, and personalized care.
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
            <h2 className="text-4xl font-display font-bold text-slate-900 mb-6">
              Our Vision
            </h2>
            <p className="text-slate-600 text-xl leading-relaxed font-body">
              "Empowering the next generation of leaders." We envision a future
              where every student has the tools, confidence, and character to
              lead and innovate in a rapidly changing world.
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
            <h2 className="text-4xl font-display font-bold text-slate-900 mb-6">
              Our Mission
            </h2>
            <p className="text-slate-600 text-xl leading-relaxed font-body">
              Every day, we strive to identify the unique potential in our
              students. We provide world-class resources, expert mentorship, and
              a nurturing environment to transform academic goals into reality.
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
              <h3 className="text-2xl font-display font-bold mb-3">
                {v.title}
              </h3>
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
                "Our philosophy is simple: Every student is a leader in
                waiting."
              </h2>
              <div className="space-y-6 text-lg text-slate-600 font-body leading-relaxed">
                <p>
                  At Career Goal Academy, we don't just teach subjects; we
                  inspire dreams. We believe that education is the most powerful
                  weapon which you can use to change the world.
                </p>
                <p>
                  Our goal is to provide an environment where curiosity is
                  encouraged, and excellence is a habit. We are committed to
                  walking alongside every student on their journey to success.
                </p>
              </div>
              <div className="pt-6 border-t border-slate-100">
                <p className="text-2xl font-display font-bold text-slate-900">
                  Vivek Jha
                </p>
                <p className="text-primary font-bold">
                  Founder & Managing Director
                </p>
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
              <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900">
                The Faculty
              </h2>
              <p className="text-slate-500 mt-4 max-w-2xl font-body">
                Learn from the best in the industry who are passionate about
                teaching.
              </p>
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
                <img
                  src={f.image}
                  alt={f.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent" />
                <div className="absolute bottom-0 p-8 w-full transform transition-transform duration-500 group-hover:-translate-y-4">
                  <div className="bg-primary/20 backdrop-blur-md px-3 py-1 rounded-full text-primary-foreground text-xs font-bold w-fit mb-3">
                    {f.role}
                  </div>
                  <h3 className="text-3xl font-display font-bold text-white mb-2">
                    {f.name}
                  </h3>
                  {f.role !== "Junior Teacher" && (
                    <div className="text-slate-300 font-body opacity-0 group-hover:opacity-100 transition-opacity duration-500 space-y-1">
                      <p className="flex items-center gap-2">
                        <span className="text-primary font-bold uppercase text-[10px]">
                          Branch:
                        </span>{" "}
                        {f.branch}
                      </p>
                      <p className="flex items-center gap-2">
                        <span className="text-primary font-bold uppercase text-[10px]">
                          Phone:
                        </span>{" "}
                        {f.phone}
                      </p>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-[150px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600 rounded-full blur-[150px]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Wall of Fame
            </h2>
            <p className="text-slate-400 text-lg">
              Celebrating our top performers and their success stories.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {resultPosters.map((poster, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="overflow-hidden border-4 border-white shadow-2xl hover:shadow-primary/20 transition-all duration-300 rounded-2xl group">
                  <img
                    src={poster}
                    alt={`Result Poster ${i + 1}`}
                    className="w-full h-auto object-contain bg-slate-100 group-hover:scale-105 transition-transform duration-500"
                  />
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button
              onClick={() => setLocation("/results")}
              variant="outline"
              size="lg"
              className="bg-transparent border-white/20 text-white hover:bg-white hover:text-slate-900 h-14 px-10 text-lg rounded-full transition-all duration-300 group"
            >
              See More{" "}
              <ChevronDown className="ml-2 group-hover:translate-x-1 transition-transform rotate-[-90deg]" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
