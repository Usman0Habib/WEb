import { useCourses, useLocations, useReviews } from "@/hooks/use-coaching-data";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { CourseCard } from "@/components/CourseCard";
import { 
  ArrowRight, 
  MapPin, 
  Users, 
  Award, 
  Trophy, 
  Star,
  Quote,
  ExternalLink
} from "lucide-react";
import { motion } from "framer-motion";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import GoogleMapReact from 'google-map-react';

const Marker = ({ text, onClick }: any) => (
  <div 
    onClick={onClick}
    className="group relative flex flex-col items-center cursor-pointer"
  >
    <div className="p-1.5 bg-primary text-white rounded-full shadow-lg border-2 border-white hover:scale-110 transition-transform">
      <MapPin className="w-5 h-5" />
    </div>
    <div className="absolute bottom-full mb-2 bg-slate-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50">
      {text}
    </div>
  </div>
);

export default function Home() {
  const { data: courses, isLoading: coursesLoading } = useCourses();
  const { data: locations } = useLocations();
  const { data: reviews } = useReviews();

  const delhiCenter = {
    lat: 28.6139,
    lng: 77.2090
  };

  const openGoogleMaps = (lat: string, lng: string) => {
    window.open(`https://www.google.com/maps/search/?api=1&query=${lat},${lng}`, '_blank');
  };

  const featuredCourses = courses?.slice(0, 6);

  return (
    <div className="min-h-screen">
      {/* HERO SECTION */}
      <section className="relative pt-20 pb-32 overflow-hidden bg-slate-50">
        <div className="absolute inset-0 hero-pattern" />
        <div className="container mx-auto px-4 relative">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight text-slate-900 leading-[1.1]">
                Shape Your Future with <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">Career Goal Academy</span>
              </h1>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-slate-600 max-w-2xl"
            >
              India's premier academic coaching institute. 
              Join 12,000+ successful students in their journey to school excellence.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 w-full justify-center"
            >
              <Button size="lg" className="text-lg h-14 px-8 shadow-xl shadow-primary/20 hover:scale-105 transition-transform" asChild>
                <Link href="/courses">Explore Courses</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg h-14 px-8 hover:scale-105 transition-transform" asChild>
                <Link href="/contact">Book Free Demo</Link>
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Floating Stats */}
        <div className="container mx-auto px-4 mt-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Users, label: "16,870+ Students", sub: "Trusted by parents" },
              { icon: Trophy, label: "1500+ Selections", sub: "In School Toppers" },
              { icon: Award, label: "15+ Years", sub: "Of Excellence" },
              { icon: MapPin, label: "5 Centres", sub: "Across Faridabad,Haryana" },
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 flex flex-col items-center text-center hover:shadow-xl transition-shadow"
              >
                <div className="p-3 bg-primary/10 rounded-full mb-4">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-2xl text-slate-900">{stat.label}</h3>
                <p className="text-slate-500 text-sm mt-1">{stat.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED COURSES */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">Our Popular Courses</h2>
              <p className="text-slate-500 max-w-xl">
                Comprehensive study material, regular tests, and personalized attention 
                designed to help you crack the toughest exams.
              </p>
            </div>
            <Button variant="ghost" className="group" asChild>
              <Link href="/courses">
                View All Courses <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>

          {coursesLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((n) => (
                <div key={n} className="h-[400px] bg-slate-100 rounded-2xl animate-pulse" />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredCourses?.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* LOCATIONS SECTION */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">Nearest Centres</h2>
            <p className="text-slate-500">Find a learning center near you in Delhi. Click on markers to view on Google Maps.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* Map Container */}
            <div className="lg:col-span-2 bg-white rounded-2xl overflow-hidden shadow-xl border border-slate-200 h-[500px] relative">
              <GoogleMapReact
                bootstrapURLKeys={{ key: "" }} // User can add their API key in secrets if needed
                defaultCenter={delhiCenter}
                defaultZoom={11}
              >
                {locations?.map((loc) => (
                  <Marker
                    key={loc.id}
                    lat={Number(loc.latitude)}
                    lng={Number(loc.longitude)}
                    text={loc.name}
                    onClick={() => openGoogleMaps(loc.latitude, loc.longitude)}
                  />
                ))}
              </GoogleMapReact>
            </div>

            {/* Locations List */}
            <div className="space-y-4 h-[500px] overflow-y-auto pr-2 custom-scrollbar">
              {locations?.map((loc) => (
                <div 
                  key={loc.id} 
                  onClick={() => openGoogleMaps(loc.latitude, loc.longitude)}
                  className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:border-primary/30 transition-all cursor-pointer group hover:shadow-md"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/5 text-primary rounded-lg group-hover:bg-primary group-hover:text-white transition-colors">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <h4 className="font-bold text-lg text-slate-900 mb-1">{loc.name}</h4>
                        <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-primary transition-colors mt-1" />
                      </div>
                      <p className="text-sm text-slate-500 leading-relaxed mb-3">{loc.address}</p>
                      <div className="flex gap-2">
                        <Badge variant="outline" className="text-xs bg-slate-50">Open Now</Badge>
                        <Badge variant="outline" className="text-xs bg-slate-50 px-2 py-0.5 border-primary/20 text-primary">Directions</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              {!locations?.length && (
                 <div className="text-center p-8 text-muted-foreground">Loading locations...</div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Success Stories</h2>
            <p className="text-primary-foreground/80 text-lg">Hear from our students who achieved academic excellence</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {reviews?.map((review) => (
                  <CarouselItem key={review.id} className="md:basis-1/2 lg:basis-1/2 pl-6">
                    <Card className="bg-white text-slate-900 border-none shadow-xl h-full">
                      <CardContent className="p-8 flex flex-col h-full">
                        <Quote className="w-10 h-10 text-primary/20 mb-4" />
                        <p className="text-slate-600 italic mb-6 flex-1 text-lg leading-relaxed">
                          "{review.comment}"
                        </p>
                        <div className="flex items-center gap-4 mt-auto">
                          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center font-bold text-primary text-xl">
                            {review.name[0]}
                          </div>
                          <div>
                            <h4 className="font-bold">{review.name}</h4>
                            <p className="text-sm text-slate-500">{review.role}</p>
                          </div>
                          <div className="ml-auto flex gap-0.5">
                            {[...Array(review.rating)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="hidden md:block">
                <CarouselPrevious className="bg-white/20 hover:bg-white/40 border-none text-white -left-12" />
                <CarouselNext className="bg-white/20 hover:bg-white/40 border-none text-white -right-12" />
              </div>
            </Carousel>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-slate-900 rounded-3xl p-8 md:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f46e5,#06b6d4)] opacity-20" />
            <div className="relative z-10 max-w-2xl mx-auto space-y-6">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white">Ready to Start Your Journey?</h2>
              <p className="text-slate-300 text-lg">
                Join Career Goal Academy today and get access to top-notch study material and expert guidance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100 text-lg h-14 px-8" asChild>
                  <Link href="/contact">Enquire Now</Link>
                </Button>
                <Button size="lg" variant="outline" className="border-slate-700 text-white hover:bg-slate-800 text-lg h-14 px-8" asChild>
                  <Link href="/fees">View Fee Structure</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function Badge({ variant, className, children }: any) {
    return <span className={`px-2 py-1 rounded-md text-sm font-medium ${className}`}>{children}</span>
}
