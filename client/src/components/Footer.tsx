import { GraduationCap, Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail, Youtube } from "lucide-react";
import { Link } from "wouter";

export function Footer() {
  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/share/17WrpEbFyS/", label: "Facebook" },
    { icon: Instagram, href: "https://www.instagram.com/vivekjha3017?utm_source=qr&igsh=MWd0dzV6eDAxYWhpOQ==", label: "Instagram" },
    { icon: Youtube, href: "https://youtube.com/@cga10th?si=kPSsHOeKhelD0jhm", label: "YouTube" },
  ];

  return (
    <footer className="bg-slate-950 text-slate-200 border-t border-slate-800">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="p-0 bg-transparent">
                <img src="/images/logo.png" alt="Career Goal Academy Logo" className="w-10 h-10 object-contain" />
              </div>
              <span className="font-display font-bold text-xl text-white whitespace-nowrap">Career Goal Academy</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Empowering students to achieve their dreams through quality education, 
              expert guidance, and a commitment to excellence since 2010.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, i) => (
                <a 
                  key={i} 
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-2 rounded-full bg-slate-900 hover:bg-primary/20 hover:text-primary transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-lg text-white mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/courses" className="hover:text-primary transition-colors">All Courses</Link></li>
              <li><Link href="/fees" className="hover:text-primary transition-colors">Fee Structure</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="font-display font-bold text-lg text-white mb-6">Popular Courses</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="/courses" className="hover:text-primary transition-colors text-left inline-block">Junior Programs<br />Class ( 1st to 8th )</Link></li>
              <li><Link href="/courses" className="hover:text-primary transition-colors">Foundation Classes (9th to 10th)</Link></li>
              <li><Link href="/courses" className="hover:text-primary transition-colors text-left inline-block">Senior Secondary Program<br />(Class 11–12)</Link></li>
              <li><Link href="/courses" className="hover:text-primary transition-colors text-left inline-block">CA Foundation &<br />Intermediate Program</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-lg text-white mb-6">Get in Touch</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-slate-400">
                  Main Centre: Om Enclave Centre<br />
                  Plot No. 1, Om Enclave, Part-1, Near Vinay Nagar, New Delhi
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-slate-400">
                  +91 88028 07397<br />
                  +91 70424 56947
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a href="https://mail.google.com/mail/?view=cm&to=careergoalacademy00@gmail.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary transition-colors">careergoalacademy00@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-900 py-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© 2024 Career Goal Academy. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
