import { Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    name: "Sarah Johnson",
    position: "CEO, TechStart Inc.",
    content:
      "Celestial Code transformed our vision into reality. Their team's expertise and dedication resulted in a product that exceeded our expectations. The development process was smooth and transparent.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60&text=SJ",
  },
  {
    name: "Michael Chen",
    position: "CTO, InnovateLab",
    content:
      "Working with Celestial Code was a game-changer for our startup. They not only delivered exceptional code but also provided valuable insights that improved our overall product strategy.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60&text=MC",
  },
  {
    name: "Emily Rodriguez",
    position: "Product Manager, GrowthCorp",
    content:
      "The team at Celestial Code is incredibly professional and skilled. They delivered our complex web application on time and within budget. I highly recommend their services.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60&text=ER",
  },
]

export default function TestimonialsSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">What Our Clients Say</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300 border-0">
              <CardContent className="p-8">
                <div className="mb-6">
                  <Quote className="w-10 h-10 text-blue-600 mb-4" />
                  <p className="text-gray-700 leading-relaxed italic">"{testimonial.content}"</p>
                </div>

                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <div className="flex items-center">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 bg-gradient-to-br from-blue-100 to-purple-100"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.position}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
