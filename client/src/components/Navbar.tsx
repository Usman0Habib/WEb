import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X, GraduationCap } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/courses", label: "Courses" },
    { href: "/fees", label: "Fee Structure" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-border/40 shadow-sm">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group cursor-pointer">
          <div className="p-1 bg-white rounded-lg transition-transform group-hover:scale-105">
            <img src="/images/logo.png" alt="CGA Logo" className="w-12 h-12 object-contain" />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-xl leading-none text-foreground">
              Career Goal
            </span>
            <span className="font-body text-xs text-muted-foreground font-medium tracking-wider uppercase">
              Academy
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              <div
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary cursor-pointer relative py-1",
                  location === link.href ? "text-primary" : "text-muted-foreground"
                )}
              >
                {link.label}
                {location === link.href && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </div>
            </Link>
          ))}
          <div className="flex items-center gap-3 ml-4">
            <Button variant="outline" size="sm" className="font-semibold border-primary/20 text-primary hover:bg-primary/5" asChild>
              <Link href="/payment">Pay Fees</Link>
            </Button>
            <Button variant="default" size="sm" className="font-semibold shadow-lg shadow-primary/20" asChild>
              <Link href="/auth">Login</Link>
            </Button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-muted-foreground hover:text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden border-b bg-background overflow-hidden"
          >
            <div className="container px-4 py-6 flex flex-col gap-4">
              {links.map((link) => (
                <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)}>
                  <div
                    className={cn(
                      "text-lg font-medium p-2 rounded-lg transition-colors cursor-pointer",
                      location === link.href
                        ? "bg-primary/10 text-primary"
                        : "text-muted-foreground hover:bg-muted"
                    )}
                  >
                    {link.label}
                  </div>
                </Link>
              ))}
              <div className="flex flex-col gap-3 mt-4">
                <Button variant="outline" className="w-full" asChild onClick={() => setIsOpen(false)}>
                  <Link href="/payment">Pay Fees</Link>
                </Button>
                <Button className="w-full" asChild onClick={() => setIsOpen(false)}>
                  <Link href="/auth">Login</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
