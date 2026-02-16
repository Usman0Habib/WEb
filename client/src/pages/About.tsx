import { motion } from "framer-motion";
import { Target, Lightbulb, Heart, Shield, Award, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  const values = [
    { icon: Target, title: "Excellence", desc: "We strive for nothing less than the best in education quality." },
    { icon: Shield, title: "Integrity", desc: "Honest guidance and transparent results are our pillars." },
    { icon: Heart, title: "Empathy", desc: "Understanding every student's unique learning curve." },
    { icon: Lightbulb, title: "Innovation", desc: "Constantly evolving our teaching methodologies." },
  ];

  return (
    <div className="min-h-screen bg-slate-50 pb-24">
      {/* Header */}
      <section className="bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 py-20 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-display font-bold text-slate-900 mb-6"
          >
            About Us
          </motion.h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto">
            Empowering the next generation of doctors, engineers, and leaders since 2010.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 -mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-12 rounded-2xl shadow-lg border border-slate-100"
          >
            <div className="p-4 bg-primary/10 rounded-2xl w-fit mb-6">
              <Lightbulb className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl font-display font-bold text-slate-900 mb-6">Our Vision</h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              To be the most trusted educational institution that not only prepares students for 
              competitive exams but also nurtures their intellectual curiosity and critical thinking 
              skills, enabling them to become leaders in their respective fields.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-12 rounded-2xl shadow-lg border border-slate-100"
          >
            <div className="p-4 bg-blue-500/10 rounded-2xl w-fit mb-6">
              <Target className="w-8 h-8 text-blue-600" />
            </div>
            <h2 className="text-3xl font-display font-bold text-slate-900 mb-6">Our Mission</h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              To provide accessible, high-quality coaching through experienced faculty and 
              innovative study materials. We aim to identify the potential in every student 
              and guide them toward achieving their academic career goals with confidence.
            </p>
          </motion.div>
        </div>

        {/* Stats Section */}
        <div className="bg-slate-900 rounded-3xl p-12 mb-24 text-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="text-5xl font-bold font-display text-primary mb-2">15+</div>
              <div className="text-slate-400">Years of Experience</div>
            </div>
            <div>
              <div className="text-5xl font-bold font-display text-primary mb-2">20k+</div>
              <div className="text-slate-400">Students Mentored</div>
            </div>
            <div>
              <div className="text-5xl font-bold font-display text-primary mb-2">95%</div>
              <div className="text-slate-400">Success Rate</div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">Our Core Values</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              These principles guide every interaction, decision, and lecture at Career Goal Academy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="h-full border-none shadow-lg hover:shadow-xl transition-shadow bg-white">
                  <CardContent className="p-8 text-center flex flex-col items-center">
                    <div className="p-4 bg-slate-50 rounded-full mb-6 group-hover:bg-primary/10 transition-colors">
                      <value.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-bold text-xl mb-3">{value.title}</h3>
                    <p className="text-slate-500">{value.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
