"use client"

import { useState, useEffect, useRef } from "react"
import { Monitor, Users, Cog, Search, Palette, MessageSquare } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const services = [
  {
    icon: Monitor,
    title: "Website/App Development",
    description: "Custom web and mobile applications built with modern technologies and best practices.",
    // pricing: "Starting from ",
    features: ["Responsive Design", "Modern Frameworks", "Performance Optimized", "SEO Ready"],
  },
  {
    icon: Users,
    title: "Team Building",
    description: "We extend or act as your development team, providing skilled professionals on-demand.",
    // pricing: "From ",
    features: ["Skilled Developers", "Flexible Scaling", "Seamless Integration", "Agile Methodology"],
  },
  {
    icon: Cog,
    title: "Custom Software Solutions",
    description: "Tailored software solutions designed specifically for your business needs and processes.",
    // pricing: "Custom Quote",
    features: ["Bespoke Development", "Scalable Architecture", "Integration Ready", "Ongoing Support"],
  },
  {
    icon: Search,
    title: "Research & Development",
    description: "Innovative R&D services to explore new technologies and create breakthrough solutions.",
    // pricing: "From ",
    features: ["Technology Research", "Proof of Concepts", "Innovation Labs", "Future-Ready Solutions"],
  },
  {
    icon: Palette,
    title: "Product Design Sprint",
    description: "Rapid prototyping and design sprints to validate ideas and create user-centered products.",
    // pricing: "From ",
    features: ["Design Thinking", "Rapid Prototyping", "User Testing", "Iterative Design"],
  },
  {
    icon: MessageSquare,
    title: "Scoping Sessions",
    description: "Comprehensive project scoping and planning sessions to define requirements and roadmaps.",
    // pricing: "From ",
    features: ["Requirement Analysis", "Technical Planning", "Resource Estimation", "Timeline Planning"],
  },
]

export default function ServicesSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">Our Services</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8 animate-expand"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive software development services tailored to accelerate your digital transformation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            const delay = index * 100
            return (
              <Card
                key={index}
                className={`group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border-0 shadow-lg bg-white cursor-pointer ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${delay}ms` }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <CardContent className="p-8 relative overflow-hidden">
                  {/* Animated background gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 transition-opacity duration-300 ${hoveredCard === index ? "opacity-100" : "opacity-0"}`}
                  ></div>

                  <div className="relative z-10">
                    <div className="mb-6">
                      <div
                        className={`w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center mb-4 group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300 ${hoveredCard === index ? "animate-pulse" : ""}`}
                      >
                        <IconComponent
                          className={`w-8 h-8 text-blue-600 group-hover:text-white transition-all duration-300 ${hoveredCard === index ? "scale-110 rotate-12" : ""}`}
                        />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                        {service.title}
                      </h3>
                    </div>

                    <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                    <div className="mb-6">
                      <div className="flex items-center mb-4">
                        {/* <DollarSign className="w-5 h-5 text-green-600 mr-2" /> */}
                        {/* <span className="font-semibold text-green-600">{service.pricing}</span> */}
                      </div>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-600">
                            <div
                              className={`w-2 h-2 bg-blue-600 rounded-full mr-3 transition-all duration-300 ${hoveredCard === index ? "animate-ping" : ""}`}
                            ></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 group-hover:shadow-lg">
                      Learn More
                    </button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
