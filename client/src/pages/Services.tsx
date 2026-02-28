import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Book, Clock, Wifi, Coffee, ShieldCheck, MapPin, Heart, Sparkles, Users, Baby, PlayCircle, Video, BookOpen, Zap } from "lucide-react";
import { SiYoutube } from "react-icons/si";

import ytBanner from "@assets/Screenshot_2026-02-28_102441_1772254577153.png";
import ytPlaylists from "@assets/Screenshot_2026-02-28_102553_1772254577154.png";
import ytTeacher from "@assets/WhatsApp_Image_2026-02-28_at_10.48.21_AM_1772256280128.jpeg";
import ytTeacher2 from "@assets/WhatsApp_Image_2026-02-28_at_11.07.58_AM_1772257197597.jpeg";
import ytTeacher3 from "@assets/WhatsApp_Image_2026-02-28_at_11.07.36_AM_1772257208820.jpeg";

// Library images
import libBuilding from "@assets/WhatsApp_Image_2026-02-25_at_10.43.08_AM_1771997291123.jpeg";
import libInfo from "@assets/2024-12-20_(1)_1771995038637.webp";
import libInterior1 from "@assets/2024-12-29_(6)_1771995038643.webp";
import libInterior2 from "@assets/2024-12-29_(7)_1771995038644.webp";
import libInterior3 from "@assets/2024-12-29_(8)_1771995038644.webp";
import libInterior4 from "@assets/2024-12-29_1771995038646.jpg";
import libInterior5 from "@assets/2024-12-29_1771995038647.webp";
import libFrames from "@assets/2024-12-29_(1)_1771995038639.webp";
import libPlantWall from "@assets/2024-12-29_(2)_1771995038639.webp";
import libPlant1 from "@assets/2024-12-29_(3)_1771995038640.webp";
import libPlant2 from "@assets/2024-12-29_(9)_1771995038645.webp";
import libRules from "@assets/2024-12-29_(4)_1771995038641.webp";
import libCCTV from "@assets/2024-12-29_(5)_1771995038642.webp";
import libFees from "@assets/2024-12-20_1771995038638.webp";

// Playschool images
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

// Gallery: interior shots first, decor, rules/cctv, info poster, then fees last
const libraryGallery = [
  { src: libInterior1, label: "Study Hall" },
  { src: libInterior2, label: "Cabin Area" },
  { src: libInterior3, label: "Reading Zone" },
  { src: libInterior5, label: "Main Hall" },
  { src: libInterior4, label: "Overview" },
  { src: libBuilding, label: "Our Building" },
  { src: libFrames, label: "Inspiration Wall" },
  { src: libPlantWall, label: "Decor" },
  { src: libPlant1, label: "Green Space" },
  { src: libPlant2, label: "Green Space" },
  { src: libRules, label: "Library Rules" },
  { src: libCCTV, label: "CCTV Security" },
  { src: libInfo, label: "Facilities" },
  { src: libFees, label: "Fee Structure" },
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
              <h2 className="text-3xl md:text-4xl font-display font-extrabold text-slate-900 mb-6">
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
              {[libInterior1, libInterior2, libInterior3, libInterior5].map((img, index) => (
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
          <div className="mb-6">
            <h3 className="text-xl font-display font-bold text-slate-800 mb-2 text-center">Inside My Library</h3>
            <p className="text-slate-500 text-center mb-8">A premium, peaceful space built for focus and success</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
            {libraryGallery.slice(0, -1).map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all border-2 border-white"
              >
                <img src={item.src} alt={item.label} className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="absolute bottom-2 left-3 text-white text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity">{item.label}</span>
              </motion.div>
            ))}
          </div>

          {/* Fees Poster — last, full width */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-xl mx-auto"
          >
            <div className="text-center mb-4">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-bold">
                <Book className="w-4 h-4" /> Affordable Fee Structure
              </span>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img src={libFees} alt="Library Fee Structure" className="w-full h-auto object-contain" />
            </div>
          </motion.div>
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
              <h2 className="text-3xl md:text-4xl font-display font-extrabold text-slate-900 mb-6">
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

        {/* YouTube Channel Section */}
        <section className="max-w-6xl mx-auto mb-24">
          {/* Section header */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">

            {/* Text Side */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-red-600 text-sm font-bold mb-6">
                <SiYoutube className="w-4 h-4" />
                Free Online Classes
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-extrabold text-slate-900 mb-4">
                Learn Anywhere,{" "}
                <span className="text-red-600">Anytime</span> — Free!
              </h2>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                Our YouTube channel <strong>CGA 9th to 12th</strong> brings classroom-quality teaching directly to your screen — completely free. Expert lessons on Maths, Science, English, Social Science and more, taught by our experienced faculty. With <strong>696+ videos</strong> and over <strong>1,700 subscribers</strong>, thousands of students are already learning with us online.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-start gap-3 p-4 bg-white rounded-2xl shadow-sm border border-red-100 group hover:border-red-200 hover:shadow-md transition-all">
                  <div className="p-2 bg-red-50 rounded-lg text-red-500 group-hover:scale-110 transition-transform">
                    <Video className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">696+ Videos</h4>
                    <p className="text-xs text-slate-500">Full syllabus covered</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-white rounded-2xl shadow-sm border border-rose-100 group hover:border-rose-200 hover:shadow-md transition-all">
                  <div className="p-2 bg-rose-50 rounded-lg text-rose-500 group-hover:scale-110 transition-transform">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">1.72K Subscribers</h4>
                    <p className="text-xs text-slate-500">& growing every day</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-white rounded-2xl shadow-sm border border-orange-100 group hover:border-orange-200 hover:shadow-md transition-all">
                  <div className="p-2 bg-orange-50 rounded-lg text-orange-500 group-hover:scale-110 transition-transform">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">All Subjects Covered</h4>
                    <p className="text-xs text-slate-500">Class 9th to 12th Covered!</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-white rounded-2xl shadow-sm border border-yellow-100 group hover:border-yellow-200 hover:shadow-md transition-all">
                  <div className="p-2 bg-yellow-50 rounded-lg text-yellow-600 group-hover:scale-110 transition-transform">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Live + Recorded</h4>
                    <p className="text-xs text-slate-500">Learn at your own pace</p>
                  </div>
                </div>
              </div>

              {/* Subscribe CTA */}
              <a
                href="https://www.youtube.com/@cga10th"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-2xl shadow-lg shadow-red-200 hover:shadow-red-300 transition-all text-lg"
              >
                <SiYoutube className="w-7 h-7 group-hover:scale-110 transition-transform" />
                Subscribe & Watch Free Classes
              </a>
              <p className="mt-3 text-sm text-slate-400">Opens YouTube · <span className="font-semibold text-slate-500">@cga10th</span></p>
            </motion.div>

            {/* Images Side */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* 3-image staggered teacher grid */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="space-y-3">
                  <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-white rotate-[-2deg]">
                    <img src={ytTeacher} alt="CGA faculty teaching" className="w-full aspect-[4/3] object-cover" />
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-white rotate-[1deg]">
                    <img src={ytTeacher3} alt="CGA faculty – economics" className="w-full aspect-[4/3] object-cover" />
                  </div>
                </div>
                <div className="pt-6 space-y-3">
                  <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-white rotate-[2deg]">
                    <img src={ytTeacher2} alt="CGA faculty – geography" className="w-full aspect-[4/3] object-cover" />
                  </div>
                  {/* Channel banner in second column */}
                  <div className="rounded-xl overflow-hidden shadow-md border-2 border-white rotate-[-1deg]">
                    <img src={ytBanner} alt="CGA YouTube channel banner" className="w-full object-cover" />
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 bg-red-600 text-white rounded-2xl px-4 py-3 shadow-xl flex items-center gap-2 font-bold text-sm"
              >
                <SiYoutube className="w-5 h-5" />
                100% Free
              </motion.div>

              {/* Decorative blobs */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-red-200/40 rounded-full blur-2xl -z-10" />
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-orange-200/40 rounded-full blur-2xl -z-10" />
            </motion.div>
          </div>

          {/* Playlists preview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-6">
              <h3 className="text-2xl font-display font-bold text-slate-800">Explore Our Playlists</h3>
              <p className="text-slate-500">Chapter-wise, topic-wise, and exam-ready playlists for every student</p>
            </div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white group cursor-pointer">
              <img src={ytPlaylists} alt="YouTube playlists preview" className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end justify-center pb-8">
                <a
                  href="https://www.youtube.com/@cga10th"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white font-bold px-7 py-3.5 rounded-2xl shadow-2xl transition-all hover:scale-105 text-base"
                >
                  <PlayCircle className="w-6 h-6" />
                  View All Playlists on YouTube
                </a>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
}

import { cn } from "@/lib/utils";
