import { useCourses } from "@/hooks/use-coaching-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { IndianRupee, BookOpen, FileText, CheckCircle2, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

export default function Fees() {
  const { data: courses, isLoading } = useCourses();

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-24">
        <div className="h-96 w-full bg-slate-100 animate-pulse rounded-2xl" />
      </div>
    );
  }

  const schoolCourses = courses?.filter(c => c.category === "School") || [];
  const competitiveCourses = courses?.filter(c => c.category !== "School") || [];

  return (
    <div className="min-h-screen bg-slate-50 py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6"
          >
            Course Fee Structure
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600"
          >
            Transparent pricing for all our programs. Academic excellence made accessible.
          </motion.p>
        </div>

        <div className="space-y-16 max-w-6xl mx-auto">
          {/* SCHOOL FEES TABLE */}
          <section>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-primary/10 rounded-lg">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">School Academic Fees (CGA OM Enclave)</h2>
            </div>
            
            <Card className="border-none shadow-xl overflow-hidden">
              <CardContent className="p-0">
                <Table>
                  <TableHeader className="bg-slate-900 text-white">
                    <TableRow className="hover:bg-slate-900">
                      <TableHead className="text-white py-4 px-8">Class / Program</TableHead>
                      <TableHead className="text-white text-right py-4 px-8">Monthly Fee (₹)</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {schoolCourses.map((course) => (
                      <TableRow key={course.id} className="hover:bg-slate-50">
                        <TableCell className="py-4 px-8 font-medium">{course.title.replace('Class ', '')}</TableCell>
                        <TableCell className="text-right py-4 px-8 font-semibold text-primary">₹{course.fee.toLocaleString()}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </section>

          {/* COMPETITIVE COURSES */}
          <section>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-primary/10 rounded-lg">
                <IndianRupee className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Competitive Coaching Programs</h2>
            </div>

            <Tabs defaultValue={competitiveCourses?.[0]?.id.toString()} className="w-full">
              <TabsList className="w-full justify-start overflow-x-auto mb-8 bg-white p-1 rounded-xl shadow-sm border h-auto flex-nowrap">
                {competitiveCourses?.map((course) => (
                  <TabsTrigger 
                    key={course.id} 
                    value={course.id.toString()}
                    className="px-6 py-3 rounded-lg data-[state=active]:bg-primary data-[state=active]:text-white transition-all whitespace-nowrap"
                  >
                    {course.title}
                  </TabsTrigger>
                ))}
              </TabsList>

              {competitiveCourses?.map((course) => (
                <TabsContent key={course.id} value={course.id.toString()}>
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 space-y-6">
                      <Card className="border-none shadow-xl overflow-hidden">
                        <CardHeader className="bg-slate-900 text-white p-8">
                          <CardTitle className="text-2xl">Detailed Breakdown</CardTitle>
                        </CardHeader>
                        <CardContent className="p-0">
                          <Table>
                            <TableHeader className="bg-slate-50">
                              <TableRow>
                                <TableHead className="w-[300px] py-4 px-8">Component</TableHead>
                                <TableHead className="text-right py-4 px-8">Amount (₹)</TableHead>
                              </TableRow>
                            </TableHeader>
                            <TableBody>
                              <TableRow>
                                <TableCell className="py-6 px-8 font-medium">Admission & Registration</TableCell>
                                <TableCell className="text-right py-6 px-8">₹{course.feeStructure?.admissionFee.toLocaleString()}</TableCell>
                              </TableRow>
                              <TableRow>
                                <TableCell className="py-6 px-8 font-medium">Annual Tuition Fee</TableCell>
                                <TableCell className="text-right py-6 px-8">₹{course.feeStructure?.tuitionFee.toLocaleString()}</TableCell>
                              </TableRow>
                              <TableRow>
                                <TableCell className="py-6 px-8 font-medium">Study Material</TableCell>
                                <TableCell className="text-right py-6 px-8">₹{course.feeStructure?.studyMaterial.toLocaleString()}</TableCell>
                              </TableRow>
                              <TableRow>
                                <TableCell className="py-6 px-8 font-medium">Test Series</TableCell>
                                <TableCell className="text-right py-6 px-8">₹{course.feeStructure?.testSeries.toLocaleString()}</TableCell>
                              </TableRow>
                              <TableRow className="bg-primary/5">
                                <TableCell className="py-6 px-8 font-bold text-lg">Total Fee</TableCell>
                                <TableCell className="text-right py-6 px-8 font-bold text-2xl text-primary">₹{course.feeStructure?.total.toLocaleString()}</TableCell>
                              </TableRow>
                            </TableBody>
                          </Table>
                        </CardContent>
                      </Card>
                    </div>

                    <Card className="bg-primary text-primary-foreground p-8 border-none shadow-xl h-fit">
                      <h3 className="text-2xl font-bold mb-6">Course Benefits</h3>
                      <ul className="space-y-4">
                        {course.features?.map((feature: string, idx: number) => (
                          <li key={idx} className="flex items-center gap-3">
                            <CheckCircle2 className="w-5 h-5 text-white/40 shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </Card>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </section>

          {/* NOTES */}
          <Card className="p-8 border-dashed border-2 bg-slate-50">
            <h4 className="font-bold text-slate-900 mb-4">Payment Information & Policies:</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ul className="text-sm text-slate-600 space-y-3">
                <li>• All fees are inclusive of applicable taxes.</li>
                <li>• Monthly school fees must be paid by the 10th of every month.</li>
                <li>• Scholarship discounts are available based on performance.</li>
              </ul>
              <ul className="text-sm text-slate-600 space-y-3">
                <li>• 10% discount for full annual payment in advance.</li>
                <li>• Study materials provided once registration is complete.</li>
                <li>• Installment facility available for coaching programs.</li>
              </ul>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
