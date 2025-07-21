"use client"

import { useState, useEffect, useRef } from "react"
import { Target, Users, Lightbulb, Rocket } from "lucide-react"

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
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

  const features = [
    {
      icon: Target,
      title: "Goal-Oriented",
      description: "Focused on delivering measurable results",
      delay: "delay-100",
    },
    { icon: Users, title: "Collaborative", description: "Working closely with our clients", delay: "delay-200" },
    { icon: Lightbulb, title: "Innovative", description: "Embracing cutting-edge technologies", delay: "delay-300" },
    { icon: Rocket, title: "Agile", description: "Fast, flexible, and efficient delivery", delay: "delay-400" },
  ]

  return (
    <section ref={sectionRef} id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">About Celestial Code</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8 animate-expand"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We are a forward-thinking software development company dedicated to transforming businesses through
            innovative technology solutions and exceptional digital experiences.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div
            className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h3>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              At Celestial Code, we believe in the power of technology to revolutionize how businesses operate and
              connect with their customers. Our mission is to deliver cutting-edge software solutions that not only meet
              today's challenges but anticipate tomorrow's opportunities.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We combine technical expertise with creative innovation to build scalable, robust, and user-centric
              applications that drive real business value and sustainable growth.
            </p>
          </div>

          <div
            className={`grid grid-cols-2 gap-6 transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            {features.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <div
                  key={index}
                  className={`bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-2xl text-center group hover:shadow-lg hover:scale-105 transition-all duration-300 ${feature.delay} animate-fade-in-up`}
                >
                  <IconComponent className="w-12 h-12 text-blue-600 mx-auto mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
                  <h4 className="font-semibold text-gray-900 mb-2">{feature.title}</h4>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
