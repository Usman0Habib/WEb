import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GraduationCap, Award, TrendingUp, User } from "lucide-react";

interface StudentResult {
  name: string;
  score: string;
  subjects?: string;
  image?: string;
  rank?: string;
}

const ResultsPage = () => {
  const class10Results: StudentResult[] = [
    { name: "Gotavya", score: "96%", subjects: "Maths: 96, Science: 93", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&h=200&auto=format&fit=crop" },
    { name: "Rishika Kumari", score: "96%", subjects: "S.ST: 99, Eng: 93", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop" },
    { name: "Sakshi", score: "95%", subjects: "S.ST: 99, Eng: 83", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&h=200&auto=format&fit=crop" },
    { name: "Rohit Kumar", score: "92%", subjects: "S.ST: 99, Eng: 85", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&h=200&auto=format&fit=crop" },
    { name: "Bhavya", score: "91%", subjects: "S.ST: 98, Eng: 85", image: "https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=200&h=200&auto=format&fit=crop" },
    { name: "Nikhil", score: "95%", subjects: "S.ST: 97, Eng: 93", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&h=200&auto=format&fit=crop" },
    { name: "Durga", score: "97%", subjects: "S.ST: 97", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&h=200&auto=format&fit=crop" },
    { name: "Harsh", score: "95%", subjects: "S.ST: 95", image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=200&h=200&auto=format&fit=crop" },
    { name: "Saurabh", score: "93%", subjects: "S.ST: 93", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&h=200&auto=format&fit=crop" },
    { name: "Rohit", score: "91%", subjects: "S.ST: 91", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&h=200&auto=format&fit=crop" },
  ];

  const class12Science: StudentResult[] = [
    { name: "Anubhav", score: "95+", subjects: "Physics: 95, Chemistry: 96, Maths: 99", image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=200&h=200&auto=format&fit=crop" },
    { name: "Namrita", score: "94%", subjects: "Maths: 94, Physics: 80, Chemistry: 82", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&h=200&auto=format&fit=crop" },
    { name: "Kumkum", score: "93%", subjects: "Maths: 93, Physics: 82", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&h=200&auto=format&fit=crop" },
    { name: "Anshika", score: "92%", subjects: "Maths: 92, Physics: 87, Chemistry: 86", image: "https://images.unsplash.com/photo-1598550874175-4d0fe4a2c90b?q=80&w=200&h=200&auto=format&fit=crop" },
    { name: "Vishal", score: "91%", subjects: "Maths: 91", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&h=200&auto=format&fit=crop" },
    { name: "Prince", score: "90%", subjects: "Maths: 90", image: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?q=80&w=200&h=200&auto=format&fit=crop" },
    { name: "Anshu", score: "94%", subjects: "Biology: 94, Physics: 83, Chemistry: 88", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&h=200&auto=format&fit=crop" },
    { name: "Nandini", score: "91%", subjects: "Biology: 91, Physics: 83, Chemistry: 88", image: "https://images.unsplash.com/photo-1557053910-d9eadeed1c58?q=80&w=200&h=200&auto=format&fit=crop" },
  ];

  const class12Commerce: StudentResult[] = [
    { name: "Prakhar", score: "99%", subjects: "Accounts: 99, Economics: 96", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&h=200&auto=format&fit=crop" },
    { name: "Sumit", score: "97%", subjects: "Economics: 97", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&h=200&auto=format&fit=crop" },
    { name: "Aditya", score: "96%", subjects: "Accounts: 96", image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=200&h=200&auto=format&fit=crop" },
    { name: "Janshi", score: "95%", subjects: "Economics: 95", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&h=200&auto=format&fit=crop" },
    { name: "Lavi", score: "95%", subjects: "Economics: 95", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&h=200&auto=format&fit=crop" },
    { name: "Arshit", score: "95%", subjects: "Accounts: 95", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&h=200&auto=format&fit=crop" },
    { name: "Mousumi", score: "94%", subjects: "Economics: 94", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop" },
    { name: "Kavita", score: "91%", subjects: "Economics: 91", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&h=200&auto=format&fit=crop" },
  ];

  const StudentCard = ({ student }: { student: StudentResult }) => (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="group"
    >
      <Card className="overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
        <div className="relative aspect-square overflow-hidden">
          <img 
            src={student.image || "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?q=80&w=200&h=200&auto=format&fit=crop"} 
            alt={student.name}
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <p className="text-2xl font-bold">{student.score}</p>
            <p className="text-sm font-medium text-primary-foreground/90">{student.name}</p>
          </div>
        </div>
        <CardContent className="p-4 bg-white">
          <p className="text-xs text-slate-500 font-medium uppercase tracking-wider mb-1">Key Subjects</p>
          <p className="text-sm text-slate-700 font-body leading-tight line-clamp-2">
            {student.subjects}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );

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
            <Award className="w-4 h-4" /> Academic Excellence 2024-25
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
            Celebrating the hard work and dedication of our top performers. 
            Success is a habit at Career Goal Academy.
          </motion.p>
        </div>
      </section>

      {/* Results Tabs */}
      <section className="container mx-auto px-4">
        <Tabs defaultValue="class12" className="space-y-12">
          <div className="flex justify-center">
            <TabsList className="bg-white p-1 rounded-full shadow-md border border-slate-100">
              <TabsTrigger value="class12" className="rounded-full px-8 py-3 data-[state=active]:bg-primary data-[state=active]:text-white transition-all">
                Class 12th
              </TabsTrigger>
              <TabsTrigger value="class10" className="rounded-full px-8 py-3 data-[state=active]:bg-primary data-[state=active]:text-white transition-all">
                Class 10th
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="class10" className="space-y-12">
            <div className="text-center">
              <h2 className="text-3xl font-display font-bold text-slate-900 mb-2">Class 10th Excellence</h2>
              <p className="text-slate-500">Foundation builders who made us proud</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {class10Results.map((s, i) => <StudentCard key={i} student={s} />)}
            </div>
          </TabsContent>

          <TabsContent value="class12" className="space-y-16">
            <div className="space-y-12">
              <div className="text-center">
                <div className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-sm mb-4">
                  <TrendingUp className="w-4 h-4" /> Science Stream
                </div>
                <h2 className="text-3xl font-display font-bold text-slate-900 mb-2">Future Engineers & Doctors</h2>
                <p className="text-slate-500">Exceptional performance in Physics, Chemistry, Maths & Biology</p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {class12Science.map((s, i) => <StudentCard key={i} student={s} />)}
              </div>
            </div>

            <div className="space-y-12 pt-12 border-t border-slate-200">
              <div className="text-center">
                <div className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-sm mb-4">
                  <TrendingUp className="w-4 h-4" /> Commerce Stream
                </div>
                <h2 className="text-3xl font-display font-bold text-slate-900 mb-2">Business Leaders of Tomorrow</h2>
                <p className="text-slate-500">Mastering Accounts, Economics & Business Studies</p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {class12Commerce.map((s, i) => <StudentCard key={i} student={s} />)}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* Bottom CTA */}
      <section className="container mx-auto px-4 mt-24">
        <div className="bg-slate-900 rounded-[3rem] p-12 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-primary/10 pointer-events-none" />
          <div className="relative z-10 space-y-6">
            <GraduationCap className="w-16 h-16 text-primary mx-auto" />
            <h2 className="text-3xl md:text-5xl font-display font-bold">Be Part of Next Year's Wall of Fame</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              Join Career Goal Academy today and start your journey towards academic excellence. 
              Our expert faculty and personalized guidance will help you reach your goals.
            </p>
            <div className="pt-6">
              <button className="bg-primary text-white hover:bg-primary/90 px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-primary/20 transition-all">
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
