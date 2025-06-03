"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Property Owner",
      image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg",
      content: "The platform made it incredibly easy to list and manage my properties. The support team is exceptional!",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Tenant",
      image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
      content: "Found my dream apartment in just a few days. The booking process was smooth and hassle-free.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Property Manager",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
      content: "This platform streamlines our entire rental process. It's a game-changer for property management.",
      rating: 5
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-none shadow-lg">
              <CardHeader className="text-center">
                <Avatar className="w-16 h-16 mx-auto mb-4">
                  <AvatarImage src={testimonial.image} alt={testimonial.name} />
                  <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div className="flex justify-center gap-1 mb-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-4">{testimonial.content}</p>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}