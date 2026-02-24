import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Award, GraduationCap } from "lucide-react";

// Import all poster images
import result10th_2024 from "@assets/WhatsApp_Image_2026-02-12_at_1.20.58_AM_1771931727439.jpeg";
import result10th_2023 from "@assets/WhatsApp_Image_2026-02-12_at_1.20.55_AM_1771931727434.jpeg";
import result10th_2023_alt from "@assets/WhatsApp_Image_2026-02-12_at_1.20.56_AM_1771931727435.jpeg";

import result12th_science from "@assets/WhatsApp_Image_2026-02-12_at_1.20.58_AM_(1)_1771931727437.jpeg";
import result12th_maths from "@assets/WhatsApp_Image_2026-02-12_at_1.20.58_AM_(2)_1771931727438.jpeg";

import result12th_accounts_2024 from "@assets/WhatsApp_Image_2026-02-12_at_1.20.57_AM_(3)_1771931727436.jpeg";
import result12th_economics_2024 from "@assets/WhatsApp_Image_2026-02-12_at_1.20.59_AM_1771931727433.jpeg";
import result12th_accounts_2023 from "@assets/WhatsApp_Image_2026-02-12_at_1.20.55_AM_(1)_1771931727433.jpeg";
import result12th_economics_2023 from "@assets/WhatsApp_Image_2026-02-12_at_1.20.56_AM_(1)_1771931727435.jpeg";

const PosterSection = ({ images }: { images: string[] }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
    {images.map((img, idx) => (
      <motion.div
        key={idx}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: idx * 0.1 }}
      >
        <Card className="overflow-hidden border-8 border-white shadow-2xl hover:shadow-primary/10 transition-shadow duration-500 rounded-3xl">
          <img 
            src={img} 
            alt={`Result Poster ${idx + 1}`}
            className="w-full h-auto object-contain bg-slate-100"
          />
        </Card>
      </motion.div>
    ))}
  </div>
);

const ResultsPage = () => {
  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-20">
      {/* Hero Header */}
      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-bold text-sm"
          >
            <Award className="w-4 h-4" /> Academic Excellence Results
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-display font-bold text-slate-900"
          >
            Our Hall of <span className="text-primary">Fame</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 font-body"
          >
            Celebrating the outstanding achievements of our Class 10th and 12th students.
          </motion.p>
        </div>
      </section>

      {/* Results Tabs */}
      <section className="container mx-auto px-4 max-w-6xl">
        <Tabs defaultValue="class12" className="space-y-16">
          <div className="flex justify-center">
            <TabsList className="bg-white p-1 rounded-full shadow-md border border-slate-100 h-14">
              <TabsTrigger value="class12" className="rounded-full px-10 h-full data-[state=active]:bg-primary data-[state=active]:text-white transition-all font-bold">
                Class 12th
              </TabsTrigger>
              <TabsTrigger value="class10" className="rounded-full px-10 h-full data-[state=active]:bg-primary data-[state=active]:text-white transition-all font-bold">
                Class 10th
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="class10" className="space-y-12">
            <div className="text-center">
               <h2 className="text-3xl font-display font-bold text-slate-900 mb-2">Class 10th Results</h2>
               <p className="text-slate-600">Our foundation batch excellence</p>
            </div>
            <PosterSection images={[result10th_2024, result10th_2023, result10th_2023_alt]} />
          </TabsContent>

          <TabsContent value="class12" className="space-y-12">
            <div className="text-center">
               <h2 className="text-3xl font-display font-bold text-slate-900 mb-2">Class 12th Results</h2>
               <p className="text-slate-600">Science & Commerce Streams</p>
            </div>
            <PosterSection images={[
              result12th_science, 
              result12th_maths, 
              result12th_accounts_2024, 
              result12th_economics_2024, 
              result12th_accounts_2023, 
              result12th_economics_2023
            ]} />
          </TabsContent>
        </Tabs>
      </section>

      {/* Bottom CTA */}
      <section className="container mx-auto px-4 mt-32">
        <div className="bg-slate-900 rounded-[3rem] p-12 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-primary/10 pointer-events-none" />
          <div className="relative z-10 space-y-6">
            <GraduationCap className="w-16 h-16 text-primary mx-auto" />
            <h2 className="text-3xl md:text-5xl font-display font-bold">Be Part of Next Year's Poster</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              Join Career Goal Academy today and start your journey towards academic excellence.
            </p>
            <div className="pt-6">
              <button className="bg-primary text-white hover:bg-primary/90 px-12 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-primary/20 transition-all">
                Enroll Now for 2025-26
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResultsPage;
