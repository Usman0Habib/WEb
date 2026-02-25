import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Book, Clock, Wifi, Coffee, ShieldCheck, MapPin, Heart, Sparkles, Users, Baby } from "lucide-react";

import play1 from "@assets/WhatsApp_Image_2026-02-25_at_9.30.30_AM_1771993817210.jpeg";
import play2 from "@assets/WhatsApp_Image_2026-02-25_at_9.30.31_AM_(1)_1771993817211.jpeg";
import play3 from "@assets/WhatsApp_Image_2026-02-25_at_9.30.31_AM_(2)_1771993817211.jpeg";
import play4 from "@assets/WhatsApp_Image_2026-02-25_at_9.30.31_AM_1771993817212.jpeg";
import play5 from "@assets/WhatsApp_Image_2026-02-25_at_9.30.32_AM_(1)_1771993817213.jpeg";
import play6 from "@assets/WhatsApp_Image_2026-02-25_at_9.30.32_AM_(2)_1771993817213.jpeg";
import play7 from "@assets/WhatsApp_Image_2026-02-25_at_9.30.32_AM_1771993817214.jpeg";
import play8 from "@assets/WhatsApp_Image_2026-02-25_at_9.30.33_AM_(1)_1771993817215.jpeg";
import play9 from "@assets/WhatsApp_Image_2026-02-25_at_9.30.33_AM_(2)_1771993817216.jpeg";
import play10 from "@assets/WhatsApp_Image_2026-02-25_at_9.30.33_AM_1771993817217.jpeg";
import play11 from "@assets/WhatsApp_Image_2026-02-25_at_9.30.34_AM_1771993817217.jpeg";
import playActivity1 from "@assets/WhatsApp_Image_2026-02-25_at_9.40.08_AM_1771993817218.jpeg";
import playActivity2 from "@assets/WhatsApp_Image_2026-02-25_at_9.40.09_AM_(1)_1771993817218.jpeg";
import playAdmission from "@assets/WhatsApp_Image_2026-02-25_at_9.40.09_AM_1771993817218.jpeg";
import playActivity3 from "@assets/WhatsApp_Image_2026-02-25_at_9.40.10_AM_(1)_1771993817219.jpeg";
import playActivity4 from "@assets/WhatsApp_Image_2026-02-25_at_9.40.10_AM_1771993817219.jpeg";

const libraryImages = [
  "/images/library/2024-12-20_1771970787394.png",
  "/images/library/2024-12-29_(1)_1771970787395.png",
  "/images/library/2024-12-29_(2)_1771970787396.png",
  "/images/library/2024-12-29_(3)_1771970787396.png",
  "/images/library/2024-12-29_(4)_1771970787397.png",
  "/images/library/2024-12-29_(5)_1771970787397.png",
];

export default function Services() {
  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6"
          >
            Our Special Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600"
          >
            Beyond coaching, we provide the essential infrastructure to support your academic journey.
          </motion.p>
        </div>

        {/* Library Section */}
        <section className="max-w-6xl mx-auto mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-bold mb-6">
                <Book className="w-4 h-4" />
                Premium Facility
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">
                My Library
              </h2>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                A dedicated space for deep focus and uninterrupted study. Our library is designed to provide the perfect environment for students who are serious about their goals. With ergonomic seating, high-speed internet, and a peaceful atmosphere, it's the ultimate study hub.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-white rounded-lg shadow-sm text-primary">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Flexible Timings</h4>
                    <p className="text-sm text-slate-500">Open early morning to late night.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-white rounded-lg shadow-sm text-primary">
                    <Wifi className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">High-Speed Wi-Fi</h4>
                    <p className="text-sm text-slate-500">Uninterrupted online resources.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-white rounded-lg shadow-sm text-primary">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">CCTV Secured</h4>
                    <p className="text-sm text-slate-500">Safe and monitored environment.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-white rounded-lg shadow-sm text-primary">
                    <Coffee className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Comfortable Zone</h4>
                    <p className="text-sm text-slate-500">Ergonomic chairs & AC cabin.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {libraryImages.slice(0, 4).map((img, index) => (
                <div key={index} className={cn(
                  "relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border-4 border-white",
                  index === 1 || index === 2 ? "mt-8" : ""
                )}>
                  <img src={img} alt={`Library view ${index + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Full Gallery */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {libraryImages.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all"
              >
                <img src={img} alt={`Library gallery ${index + 1}`} className="w-full h-full object-cover transition-transform group-hover:scale-110" />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>
        </section>

        {/* Matri Chhaya Playschool Section */}
        <section className="max-w-6xl mx-auto mb-24 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:order-2"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-100 text-pink-600 text-sm font-bold mb-6">
                <Heart className="w-4 h-4" />
                Aangan Bachpan Ka
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">
                Maatri Chhaya Play School
              </h2>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                Experience a world of joy, learning, and growth. Maatri Chhaya Play School provides a nurturing environment where your child's first steps into education are filled with wonder and care. Our activity-based curriculum focuses on holistic development through play, creativity, and exploration.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-start gap-3 p-4 bg-white rounded-2xl shadow-sm border border-pink-100 group hover:border-pink-200 transition-colors">
                  <div className="p-2 bg-pink-50 rounded-lg text-pink-500 group-hover:scale-110 transition-transform">
                    <Baby className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">2 to 6 Years</h4>
                    <p className="text-sm text-slate-500">Play Group to UKG</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-white rounded-2xl shadow-sm border border-rose-100 group hover:border-rose-200 transition-colors">
                  <div className="p-2 bg-rose-50 rounded-lg text-rose-500 group-hover:scale-110 transition-transform">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">10+ Years</h4>
                    <p className="text-xs font-bold text-rose-600 uppercase tracking-wider">In Service</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-white rounded-2xl shadow-sm border border-orange-100 group hover:border-orange-200 transition-colors">
                  <div className="p-2 bg-orange-50 rounded-lg text-orange-500 group-hover:scale-110 transition-transform">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Activity Based</h4>
                    <p className="text-sm text-slate-500">Learning through fun.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-white rounded-2xl shadow-sm border border-blue-100 group hover:border-blue-200 transition-colors">
                  <div className="p-2 bg-blue-50 rounded-lg text-blue-500 group-hover:scale-110 transition-transform">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Expert Guidance</h4>
                    <p className="text-sm text-slate-500">Caring & trained staff.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-white rounded-2xl shadow-sm border border-green-100 group hover:border-green-200 transition-colors">
                  <div className="p-2 bg-green-50 rounded-lg text-green-500 group-hover:scale-110 transition-transform">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Safe Campus</h4>
                    <p className="text-sm text-slate-500">Om Enclave, Faridabad.</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-pink-500 to-orange-500 rounded-2xl p-6 text-white shadow-xl">
                <h4 className="text-xl font-bold mb-2 flex items-center gap-2">
                   Admission Open 2024-25
                </h4>
                <p className="text-white/90 mb-4 text-sm">Join the most loved play school in Faridabad. Secure your child's future today!</p>
                <div className="flex flex-col gap-2">
                   <p className="font-bold text-lg">Contact: Vivek Jha</p>
                   <p className="font-mono bg-white/20 px-3 py-1 rounded-lg self-start">8802807397</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="lg:order-1 relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <Card className="overflow-hidden rounded-3xl border-4 border-white shadow-xl rotate-[-2deg]">
                    <img src={play1} className="w-full h-full object-cover aspect-[3/4]" />
                  </Card>
                  <Card className="overflow-hidden rounded-3xl border-4 border-white shadow-xl rotate-[1deg]">
                    <img src={playActivity1} className="w-full h-full object-cover aspect-square" />
                  </Card>
                </div>
                <div className="space-y-4 pt-8">
                  <Card className="overflow-hidden rounded-3xl border-4 border-white shadow-xl rotate-[2deg]">
                    <img src={playAdmission} className="w-full h-full object-cover aspect-square" />
                  </Card>
                  <Card className="overflow-hidden rounded-3xl border-4 border-white shadow-xl rotate-[-1deg]">
                    <img src={play10} className="w-full h-full object-cover aspect-[3/4]" />
                  </Card>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-pink-200/50 rounded-full blur-2xl -z-10" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-orange-200/50 rounded-full blur-2xl -z-10" />
            </motion.div>
          </div>

          {/* Activities Showcase */}
          <div className="mb-16">
            <div className="text-center mb-10">
              <h3 className="text-2xl font-display font-bold text-slate-800">Glimpses of Joy</h3>
              <p className="text-slate-500">Moments from our daily activities and celebrations</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[play2, play3, play4, play5, play6, play7, play8, play9, play11, playActivity2, playActivity3, playActivity4].map((img, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="group relative aspect-[4/5] rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all border-2 border-white"
                >
                  <img src={img} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-pink-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

import { cn } from "@/lib/utils";
