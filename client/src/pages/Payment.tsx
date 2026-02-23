import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { QrCode, CreditCard, ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function Payment() {
  // Replace with actual UPI details
  const upiId = "coaching@upi";
  const name = "Career Goal Academy";
  const upiUrl = `upi://pay?pa=${upiId}&pn=${encodeURIComponent(name)}&cu=INR`;

  return (
    <div className="min-h-screen bg-slate-50 py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <Link href="/fees">
            <Button variant="ghost" className="mb-8 gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Fees
            </Button>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Card className="border-none shadow-2xl overflow-hidden">
              <CardHeader className="bg-slate-900 text-white p-8 text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <img src="/images/logo.png" alt="" className="w-24 h-24 object-contain" />
                </div>
                <CardTitle className="text-3xl font-display">Pay Your Fees</CardTitle>
                <p className="text-slate-400 mt-2 text-sm uppercase tracking-widest font-medium">
                  Scan & Pay Securely
                </p>
              </CardHeader>
              <CardContent className="p-8 flex flex-col items-center text-center">
                <div className="mb-8 p-4 bg-white rounded-2xl shadow-lg border-2 border-slate-100">
                  {/* Placeholder for QR Code - In a real app, this would be a dynamic or static QR image */}
                  <div className="w-64 h-64 bg-slate-100 flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-slate-300">
                    <QrCode className="w-16 h-16 text-slate-400 mb-2" />
                    <p className="text-xs text-slate-500 font-medium px-4">
                      QR Code for {upiId}
                    </p>
                  </div>
                </div>

                <div className="space-y-6 w-full max-w-sm">
                  <div className="p-4 bg-primary/5 rounded-xl border border-primary/10">
                    <p className="text-sm text-muted-foreground mb-1">UPI ID</p>
                    <p className="font-mono font-bold text-lg text-primary">{upiId}</p>
                  </div>

                  <div className="flex flex-col gap-3">
                    <Button 
                      size="lg" 
                      className="w-full h-14 text-lg font-bold shadow-xl shadow-primary/20 gap-3"
                      onClick={() => window.location.href = upiUrl}
                      data-testid="button-pay-fees-upi"
                    >
                      <CreditCard className="w-6 h-6" />
                      Pay via UPI App
                    </Button>
                    <p className="text-xs text-muted-foreground mt-4 italic">
                      Supported Apps: PhonePe, Google Pay, Paytm, BHIM & more
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="p-6 bg-white border-none shadow-sm flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <span className="text-green-600 font-bold text-lg">✓</span>
                </div>
                <div>
                  <h4 className="font-bold text-sm">Instant Confirmation</h4>
                  <p className="text-xs text-muted-foreground">Payments are verified instantly</p>
                </div>
              </Card>
              <Card className="p-6 bg-white border-none shadow-sm flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-lg">🔒</span>
                </div>
                <div>
                  <h4 className="font-bold text-sm">Secure Payment</h4>
                  <p className="text-xs text-muted-foreground">Encrypted UPI transactions</p>
                </div>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
