import { useCourses } from "@/hooks/use-coaching-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { IndianRupee, BookOpen, FileText, CheckCircle2, GraduationCap, Phone, QrCode, Smartphone, Copy } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex flex-col items-center gap-6"
          >
            <p className="text-lg text-slate-600">
              Transparent pricing for all our programs. Academic excellence made accessible.
            </p>
            <Button variant="outline" size="sm" className="gap-2 text-muted-foreground hover:text-primary" asChild>
              <Link href="/contact">
                <Phone className="w-4 h-4" />
                Contact Us for Admission
              </Link>
            </Button>
          </motion.div>
        </div>

        <div className="space-y-16 max-w-4xl mx-auto">
          {/* FEES TABLE */}
          <section>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-primary/10 rounded-lg">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Fee Structure</h2>
            </div>
            
            <Card className="border-none shadow-xl overflow-hidden">
              <CardContent className="p-0">
                <Table>
                  <TableHeader className="bg-slate-900 text-white">
                    <TableRow className="hover:bg-slate-900">
                      <TableHead className="text-white py-4 px-8 text-lg">Class / Program</TableHead>
                      <TableHead className="text-white text-right py-4 px-8 text-lg">Monthly Fee (₹)</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {courses?.map((course) => (
                      <TableRow key={course.id} className="hover:bg-slate-50 border-b">
                        <TableCell className="py-5 px-8 font-medium text-slate-700">
                          {course.title}
                        </TableCell>
                        <TableCell className="text-right py-5 px-8 font-bold text-primary text-lg">
                          ₹{course.fee.toLocaleString()}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </section>

          {/* NOTES */}
          <Card className="p-8 border-dashed border-2 bg-slate-50">
            <h4 className="font-bold text-slate-900 mb-4">Payment Information:</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ul className="text-sm text-slate-600 space-y-3">
                <li>• All fees are inclusive of applicable taxes.</li>
                <li>• Monthly fees must be paid by the 10th of every month.</li>
              </ul>
              <ul className="text-sm text-slate-600 space-y-3">
                <li>• Scholarship discounts are available based on performance.</li>
                <li>• Contact office for sibling discount details.</li>
              </ul>
            </div>
          </Card>

          {/* UPI PAYMENT */}
          <UpiPaymentSection />
        </div>
      </div>
    </div>
  );
}

const UPI_ID = "cavkjha45@okaxis";
const UPI_NAME = "Career Goal Academy";
const UPI_LINK = `upi://pay?pa=${encodeURIComponent(UPI_ID)}&pn=${encodeURIComponent(UPI_NAME)}&cu=INR&tn=${encodeURIComponent("Fee Payment")}`;

function UpiPaymentSection() {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);

  const copyUpiId = () => {
    navigator.clipboard.writeText(UPI_ID);
    setCopied(true);
    toast({ title: "Copied!", description: "UPI ID copied to clipboard." });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2 bg-primary/10 rounded-lg">
          <IndianRupee className="w-6 h-6 text-primary" />
        </div>
        <h2 className="text-2xl font-bold text-slate-900">Pay Online via UPI</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left: actions */}
        <div className="flex flex-col gap-6">
          <p className="text-slate-600 leading-relaxed">
            Pay your fees instantly using any UPI app — PhonePe, Google Pay, Paytm, or your bank app. Tap the button below on your phone to open the payment screen directly.
          </p>

          {/* UPI ID display */}
          <div className="flex items-center gap-3 bg-slate-100 rounded-xl px-5 py-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-0.5">UPI ID</p>
              <p className="font-mono font-bold text-slate-900 text-lg tracking-wide">{UPI_ID}</p>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="ml-auto shrink-0 text-slate-400 hover:text-primary"
              onClick={copyUpiId}
              data-testid="button-copy-upi"
            >
              <Copy className="w-4 h-4" />
            </Button>
          </div>

          {/* Pay Now button — UPI deep link */}
          <a href={UPI_LINK} data-testid="link-upi-pay">
            <Button size="lg" className="w-full gap-3 text-base font-bold shadow-lg">
              <Smartphone className="w-5 h-5" />
              Pay Now via UPI App
            </Button>
          </a>

          <p className="text-xs text-slate-400 text-center">
            Works on mobile with PhonePe, Google Pay, Paytm & all UPI apps.
            <br />Scan the QR code if you're on desktop.
          </p>
        </div>

        {/* Right: QR code */}
        <div className="flex flex-col items-center gap-4">
          <div className="bg-white p-5 rounded-3xl shadow-xl border border-slate-100">
            <img
              src="/images/upi-qr.jpeg"
              alt="PhonePe UPI QR Code"
              className="w-56 h-56 object-contain rounded-xl"
              data-testid="img-upi-qr"
            />
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <QrCode className="w-4 h-4" />
            Scan with any UPI app to pay
          </div>
        </div>
      </div>
    </motion.section>
  );
}
