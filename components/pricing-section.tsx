"use client"

import { useState, useEffect, useRef } from "react"
import { Check, Star, Zap } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const packages = [
  {
    name: "Basic",
    price: "$",
    period: "/month",
    description: "Perfect for startups and small businesses",
    features: [
      "1 Developer",
      "40 hours/month",
      "Basic project management",
      "Email support",
      "Weekly progress reports",
      "1 revision round",
    ],
    popular: false,
    color: "from-gray-100 to-gray-200",
    buttonColor: "bg-gray-600 hover:bg-gray-700",
  },
  {
    name: "Pro",
    price: "$",
    period: "/month",
    description: "Ideal for growing companies",
    features: [
      "2-3 Developers",
      "80 hours/month",
      "Advanced project management",
      "Priority support",
      "Daily progress reports",
      "3 revision rounds",
      "Technical consultation",
      "Code reviews",
    ],
    popular: true,
    color: "from-blue-100 to-purple-100",
    buttonColor: "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "Quote",
    description: "For large-scale projects and enterprises",
    features: [
      "Dedicated team (4+ developers)",
      "Unlimited hours",
      "Full project management",
      "24/7 support",
      "Real-time reporting",
      "Unlimited revisions",
      "Technical consultation",
      "Code reviews",
      "DevOps support",
      "Security audits",
    ],
    popular: false,
    color: "from-purple-100 to-blue-100",
    buttonColor: "bg-purple-600 hover:bg-purple-700",
  },
]

export default function PricingSection() {
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
    <section ref={sectionRef} id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">Pricing Packages</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8 animate-expand"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Flexible pricing options designed to scale with your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <Card
              key={index}
              className={`relative overflow-hidden transition-all duration-500 transform hover:-translate-y-4 cursor-pointer ${
                pkg.popular
                  ? "border-2 border-blue-600 shadow-2xl scale-105 animate-glow"
                  : "border border-gray-200 shadow-lg hover:shadow-xl"
              } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${index * 200}ms` }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {pkg.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-2 text-sm font-semibold animate-shimmer">
                  <Star className="inline w-4 h-4 mr-1 animate-spin-slow" />
                  Most Popular
                </div>
              )}

              {/* Animated background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${pkg.color} transition-opacity duration-300 ${hoveredCard === index ? "opacity-20" : "opacity-0"}`}
              ></div>

              <CardContent className={`relative z-10 p-8 ${pkg.popular ? "pt-16" : ""}`}>
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {pkg.name}
                  </h3>
                  <div className="mb-4">
                    <span
                      className={`text-4xl font-bold text-gray-900 transition-all duration-300 ${hoveredCard === index ? "scale-110" : ""}`}
                    >
                      {pkg.price}
                    </span>
                    <span className="text-gray-600">{pkg.period}</span>
                  </div>
                  <p className="text-gray-600">{pkg.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center group">
                      <Check
                        className={`w-5 h-5 text-green-600 mr-3 flex-shrink-0 transition-all duration-300 ${hoveredCard === index ? "animate-bounce" : ""}`}
                      />
                      <span className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                    pkg.popular
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg"
                      : "bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                  }`}
                >
                  {pkg.name === "Enterprise" ? (
                    <>
                      <Zap className="inline w-4 h-4 mr-2" />
                      Contact Sales
                    </>
                  ) : (
                    "Get Started"
                  )}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div
          className={`text-center mt-12 transition-all duration-1000 delay-600 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <p className="text-gray-600 mb-4">Need a custom solution?</p>
          <Button
            variant="outline"
            className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-full bg-transparent transition-all duration-300 hover:scale-105"
          >
            Contact Us for Custom Pricing
          </Button>
        </div>
      </div>
    </section>
  )
}
