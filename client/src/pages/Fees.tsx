import { useCourses } from "@/hooks/use-coaching-data";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Check, QrCode } from "lucide-react";

export default function Fees() {
  const { data: courses, isLoading } = useCourses();

  // Mock UPI Data
  const upiId = "fees.careergoal@upi";
  const upiLink = `upi://pay?pa=${upiId}&pn=CareerGoalAcademy&cu=INR`;

  return (
    <div className="min-h-screen bg-slate-50 pb-24">
      <div className="bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-4">
            Fee Structure
          </h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto">
            Transparent pricing with no hidden charges. Invest in your future today.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Table */}
          <div className="lg:col-span-2">
            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle>Course Fees Breakdown (2025-26)</CardTitle>
                <CardDescription>All fees are inclusive of study material and test series.</CardDescription>
              </CardHeader>
              <CardContent>
                {isLoading ? (
                  <div className="space-y-4">
                    {[1, 2, 3, 4].map((n) => (
                      <div key={n} className="h-12 bg-slate-100 rounded animate-pulse" />
                    ))}
                  </div>
                ) : (
                  <Table>
                    <TableHeader>
                      <TableRow className="hover:bg-transparent">
                        <TableHead className="w-[40%]">Course Name</TableHead>
                        <TableHead>Category</TableHead>
                        <TableHead>Duration</TableHead>
                        <TableHead className="text-right">Total Fee</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {courses?.map((course) => (
                        <TableRow key={course.id} className="hover:bg-slate-50">
                          <TableCell className="font-medium text-slate-900">{course.title}</TableCell>
                          <TableCell>{course.category}</TableCell>
                          <TableCell>{course.duration}</TableCell>
                          <TableCell className="text-right font-bold text-primary">₹ {course.fee.toLocaleString()}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                )}
              </CardContent>
            </Card>

            <div className="mt-8 bg-blue-50 border border-blue-100 p-6 rounded-xl text-blue-900">
              <h4 className="font-bold mb-2 flex items-center gap-2">
                <Check className="w-5 h-5" /> Scholarship Available
              </h4>
              <p className="text-sm">
                Merit-based scholarships up to 100% are available based on our entrance test (CGA-SAT). 
                Contact admission office for more details.
              </p>
            </div>
          </div>

          {/* Payment Card */}
          <div className="lg:col-span-1">
            <Card className="border-primary/20 shadow-xl bg-white sticky top-24">
              <CardHeader className="bg-primary/5 border-b border-primary/10">
                <CardTitle className="text-primary">Pay Fees Online</CardTitle>
                <CardDescription>Instant payment via UPI</CardDescription>
              </CardHeader>
              <CardContent className="pt-8 flex flex-col items-center text-center">
                <div className="bg-white p-4 rounded-xl shadow-inner border border-slate-200 mb-6">
                  {/* QrCode Placeholder - Using Lucide icon for simplicity, in real app use react-qr-code */}
                  <div className="w-48 h-48 bg-slate-900 rounded-lg flex items-center justify-center text-white">
                    <QrCode className="w-24 h-24" />
                  </div>
                </div>
                
                <div className="space-y-1 mb-6">
                  <p className="text-sm text-slate-500">Scan QR Code or use UPI ID</p>
                  <p className="font-mono font-bold text-lg bg-slate-100 px-3 py-1 rounded">
                    {upiId}
                  </p>
                </div>

                <Button className="w-full text-lg h-12 shadow-lg shadow-primary/25" asChild>
                  <a href={upiLink}>Pay via UPI App</a>
                </Button>
                
                <p className="text-xs text-slate-400 mt-4">
                  *Please mention Student Name & Course in remarks while paying.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
