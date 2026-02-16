import { useCourses } from "@/hooks/use-coaching-data";
import { CourseCard } from "@/components/CourseCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Courses() {
  const { data: courses, isLoading } = useCourses();
  const [activeTab, setActiveTab] = useState("all");

  const categories = ["all", "NEET", "JEE", "Foundation", "CUET"];

  const filteredCourses = activeTab === "all" 
    ? courses 
    : courses?.filter(c => c.category.includes(activeTab));

  return (
    <div className="min-h-screen bg-slate-50 pb-24">
      <div className="bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-4">
            Our Courses
          </h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto">
            Choose from our range of meticulously designed courses to help you crack your dream exam.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <Tabs defaultValue="all" onValueChange={setActiveTab} className="w-full">
          <div className="flex justify-center mb-12">
            <TabsList className="h-auto p-1 bg-white shadow-sm border border-slate-200 rounded-full">
              {categories.map((cat) => (
                <TabsTrigger 
                  key={cat} 
                  value={cat}
                  className="px-6 py-3 rounded-full text-base data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all"
                >
                  {cat === "all" ? "All Courses" : cat}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <TabsContent value={activeTab} className="mt-0">
            {isLoading ? (
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                 {[1, 2, 3, 4, 5, 6].map((n) => (
                   <div key={n} className="h-[400px] bg-slate-200 rounded-2xl animate-pulse" />
                 ))}
               </div>
            ) : (
              <motion.div 
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                <AnimatePresence>
                  {filteredCourses?.map((course) => (
                    <motion.div
                      key={course.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      layout
                    >
                      <CourseCard course={course} />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            )}

            {!isLoading && filteredCourses?.length === 0 && (
              <div className="text-center py-24 text-slate-400">
                <p className="text-xl">No courses found in this category.</p>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
