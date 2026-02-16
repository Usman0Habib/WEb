import { useCourses } from "@/hooks/use-coaching-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { IndianRupee, BookOpen, FileText, CheckCircle2 } from "lucide-react";
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
            Transparent pricing for all our programs. Invest in your future with Career Goal Academy.
          </motion.p>
        </div>

        <Tabs defaultValue={courses?.[0]?.id.toString()} className="max-w-5xl mx-auto">
          <TabsList className="w-full justify-start overflow-x-auto mb-12 bg-white p-1 rounded-xl shadow-sm border h-auto flex-nowrap">
            {courses?.map((course) => (
              <TabsTrigger 
                key={course.id} 
                value={course.id.toString()}
                className="px-6 py-3 rounded-lg data-[state=active]:bg-primary data-[state=active]:text-white transition-all whitespace-nowrap"
              >
                {course.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {courses?.map((course) => (
            <TabsContent key={course.id} value={course.id.toString()}>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-6">
                  <Card className="border-none shadow-xl overflow-hidden">
                    <CardHeader className="bg-slate-900 text-white p-8">
                      <CardTitle className="text-2xl flex items-center gap-3">
                        <IndianRupee className="w-6 h-6 text-primary" />
                        Detailed Breakdown
                      </CardTitle>
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
                            <TableCell className="py-6 px-8 font-medium">Admission & Registration Fee</TableCell>
                            <TableCell className="text-right py-6 px-8">₹{course.feeStructure?.admissionFee.toLocaleString()}</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="py-6 px-8 font-medium">Annual Tuition Fee</TableCell>
                            <TableCell className="text-right py-6 px-8">₹{course.feeStructure?.tuitionFee.toLocaleString()}</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="py-6 px-8 font-medium">Study Material & Library</TableCell>
                            <TableCell className="text-right py-6 px-8">₹{course.feeStructure?.studyMaterial.toLocaleString()}</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="py-6 px-8 font-medium">All India Test Series</TableCell>
                            <TableCell className="text-right py-6 px-8">₹{course.feeStructure?.testSeries.toLocaleString()}</TableCell>
                          </TableRow>
                          <TableRow className="bg-primary/5 hover:bg-primary/5">
                            <TableCell className="py-6 px-8 font-bold text-lg">Total Course Fee</TableCell>
                            <TableCell className="text-right py-6 px-8 font-bold text-2xl text-primary">₹{course.feeStructure?.total.toLocaleString()}</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </CardContent>
                  </Card>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-start gap-4">
                      <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
                        <BookOpen className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-1">Duration</h4>
                        <p className="text-slate-500">{course.duration}</p>
                      </div>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-start gap-4">
                      <div className="p-3 bg-green-50 text-green-600 rounded-xl">
                        <FileText className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-1">Course Type</h4>
                        <p className="text-slate-500">{course.category} Preparation</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <Card className="bg-primary text-primary-foreground p-8 border-none shadow-xl">
                    <h3 className="text-2xl font-bold mb-6">What's Included?</h3>
                    <ul className="space-y-4">
                      {course.features?.map((feature: string, idx: number) => (
                        <li key={idx} className="flex items-center gap-3">
                          <CheckCircle2 className="w-5 h-5 text-white/40 shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                      <li className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-white/40 shrink-0" />
                        <span>Interactive Smart Classes</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-white/40 shrink-0" />
                        <span>24/7 Portal Access</span>
                      </li>
                    </ul>
                  </Card>

                  <Card className="p-8 border-dashed border-2 bg-slate-50">
                    <h4 className="font-bold text-slate-900 mb-4">Payment Notes:</h4>
                    <ul className="text-sm text-slate-600 space-y-3">
                      <li>• Fees are inclusive of all taxes.</li>
                      <li>• Payment can be made in up to 3 installments.</li>
                      <li>• 10% Early Bird discount for full payment.</li>
                      <li>• Scholarship up to 50% available via talent test.</li>
                    </ul>
                  </Card>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
}
