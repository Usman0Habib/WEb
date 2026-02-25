import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, IndianRupee, BookOpen, CheckCircle } from "lucide-react";
import type { Course } from "@shared/schema";
import { Link } from "wouter";

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  return (
    <Card className="group relative overflow-hidden border-border/50 bg-card hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 flex flex-col h-full">
      <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
        <BookOpen className="w-24 h-24 text-primary transform rotate-12 translate-x-4 -translate-y-4" />
      </div>

      <CardHeader>
        <div className="flex justify-between items-start mb-2">
          <Badge variant="outline" className="bg-primary/5 text-primary border-primary/20 font-semibold">
            {course.category}
          </Badge>
          <Badge variant="secondary" className="font-mono text-xs">
            {course.duration}
          </Badge>
        </div>
        <h3 className="text-2xl font-display font-bold text-foreground group-hover:text-primary transition-colors">
          {course.title}
        </h3>
        <p className="text-muted-foreground line-clamp-2 mt-2 text-sm">
          {course.description}
        </p>
      </CardHeader>

      <CardContent className="flex-1">
        <div className="space-y-3">
          {(course.features || []).slice(0, 3).map((feature, i) => (
            <div key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
              <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
              <span>{feature}</span>
            </div>
          ))}
          {(course.features || []).length > 3 && (
            <div className="text-xs text-muted-foreground pl-6 italic">
              + {(course.features || []).length - 3} more features
            </div>
          )}
        </div>
      </CardContent>

      <CardFooter className="flex items-center justify-between border-t border-border/50 pt-6 bg-muted/20">
        <div className="flex items-center gap-1 text-lg font-bold text-foreground">
          <IndianRupee className="w-5 h-5 text-muted-foreground" />
          {course.fee.toLocaleString()}
        </div>
        <Button asChild className="shadow-lg shadow-primary/20 group-hover:translate-x-1 transition-transform">
          <Link href={`/contact`}>Enroll Now</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
