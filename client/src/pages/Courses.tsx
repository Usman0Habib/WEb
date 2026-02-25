import { useCourses } from "@/hooks/use-coaching-data";
import { CourseCard } from "@/components/CourseCard";
import { motion } from "framer-motion";

export default function Courses() {
  const { data: courses, isLoading } = useCourses();

  return (
    <div className="min-h-screen bg-slate-50 pb-24">
      <div className="bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-4">
            Our Courses
          </h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto">
            Explore our comprehensive range of academic programs designed for student success.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
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
            {courses?.map((course) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                layout
              >
                <CourseCard course={course} />
              </motion.div>
            ))}
          </motion.div>
        )}

        {!isLoading && courses?.length === 0 && (
          <div className="text-center py-24 text-slate-400">
            <p className="text-xl">No courses found.</p>
          </div>
        )}
      </div>
    </div>
  );
}
