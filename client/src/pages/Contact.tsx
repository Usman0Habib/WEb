import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertInquirySchema, type InsertInquiry } from "@shared/schema";
import { useCreateInquiry } from "@/hooks/use-coaching-data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, Send, Facebook, Instagram, Youtube } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useLocation } from "wouter";

export default function Contact() {
  const { toast } = useToast();
  const [location] = useLocation();
  const searchParams = new URLSearchParams(window.location.search);
  const courseInterest = searchParams.get("course");

  const { mutate, isPending } = useCreateInquiry();

  const form = useForm<InsertInquiry>({
    resolver: zodResolver(insertInquirySchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: courseInterest ? `I am interested in ${courseInterest} course.` : "",
    },
  });

  function onSubmit(data: InsertInquiry) {
    const mailtoUrl = `mailto:careergoalacademy00@gmail.com?subject=Inquiry from ${encodeURIComponent(data.name)}&body=${encodeURIComponent(
      `Name: ${data.name}\nPhone: ${data.phone}\nEmail: ${data.email}\n\nMessage:\n${data.message}`
    )}`;
    
    mutate(data, {
      onSuccess: () => {
        toast({
          title: "Form Submitted!",
          description: "Opening your email client to send the message...",
        });
        window.location.href = mailtoUrl;
        form.reset();
      },
      onError: (error) => {
        toast({
          title: "Error",
          description: error.message,
          variant: "destructive",
        });
      },
    });
  }

  return (
    <div className="min-h-screen bg-slate-50 pb-24">
      <div className="bg-slate-900 text-white">
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Have questions? We are here to help you start your journey.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            {[
              { 
                icon: MapPin, 
                title: "Main Centre", 
                desc: "Om Enclave Centre, Plot No. 1, Om Enclave, Part-1, Near Vinay Nagar, New Delhi" 
              },
              { 
                icon: Phone, 
                title: "Call Us", 
                desc: (
                  <div className="flex flex-col gap-1">
                    <a href="tel:+918802807397" className="hover:text-primary transition-colors">+91 88028 07397</a>
                    <a href="tel:+917042456947" className="hover:text-primary transition-colors">+91 70424 56947</a>
                  </div>
                )
              },
              { 
                icon: Mail, 
                title: "Email Us", 
                desc: (
                  <a href="mailto:careergoalacademy00@gmail.com" className="hover:text-primary transition-colors">
                    careergoalacademy00@gmail.com
                  </a>
                )
              },
              { icon: Clock, title: "Office Hours", desc: "Mon - Sat: 9:00 AM - 7:00 PM" },
            ].map((item, i) => (
              <Card key={i} className="border-none shadow-md">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="p-3 bg-primary/10 text-primary rounded-lg shrink-0">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-slate-900">{item.title}</h3>
                    <div className="text-slate-500">{item.desc}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
            
            {/* Socials Section */}
            <Card className="border-none shadow-md bg-slate-900 text-white">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a href="https://www.facebook.com/share/17WrpEbFyS/" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 rounded-full hover:bg-primary transition-colors">
                    <Facebook className="w-6 h-6" />
                  </a>
                  <a href="https://www.instagram.com/vivekjha3017?utm_source=qr&igsh=MWd0dzV6eDAxYWhpOQ==" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 rounded-full hover:bg-primary transition-colors">
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a href="https://youtube.com/@cga10th?si=kPSsHOeKhelD0jhm" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 rounded-full hover:bg-primary transition-colors">
                    <Youtube className="w-6 h-6" />
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-none shadow-xl overflow-hidden">
              <CardContent className="p-8 md:p-12 bg-white">
                <h2 className="text-3xl font-display font-bold text-slate-900 mb-6">Send us a message</h2>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                              <Input placeholder="John Doe" className="h-12 bg-slate-50" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number</FormLabel>
                            <FormControl>
                              <Input placeholder="+91 99999 99999" className="h-12 bg-slate-50" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input placeholder="john@example.com" className="h-12 bg-slate-50" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message / Query</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Tell us what course you are looking for..." 
                              className="min-h-[150px] bg-slate-50 resize-none p-4" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full h-14 text-lg shadow-lg shadow-primary/25"
                      disabled={isPending}
                    >
                      {isPending ? "Sending..." : (
                        <span className="flex items-center gap-2">
                          Send Message <Send className="w-5 h-5" />
                        </span>
                      )}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>

        </div>
      </div>
    </div>
  );
}
