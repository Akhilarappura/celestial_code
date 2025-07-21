"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Zap, Globe, ChevronDown } from "lucide-react"

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setIsVisible(true)

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div
          className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
          }}
        ></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"
          style={{
            transform: `translate(${mousePosition.x * -0.02}px, ${mousePosition.y * -0.02}px)`,
          }}
        ></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl animate-spin-slow"></div>
      </div>

      {/* Floating Tech Icons */}
      <div className="absolute inset-0 overflow-hidden">
        <Code className="absolute top-1/4 left-1/4 w-8 h-8 text-blue-400/30 animate-float delay-300" />
        <Zap className="absolute top-1/3 right-1/4 w-6 h-6 text-purple-400/30 animate-float delay-700" />
        <Globe className="absolute bottom-1/3 left-1/3 w-10 h-10 text-blue-300/30 animate-float delay-1000" />
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        {/* Logo with entrance animation */}
        <div
          className={`mb-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl mb-6 shadow-2xl animate-glow hover:scale-110 transition-transform duration-300">
            <span className="text-white font-bold text-2xl sm:text-3xl">CC</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
              Celestial Code
            </span>
          </h1>
        </div>

        {/* Tagline with staggered animation */}
        <p
          className={`text-xl sm:text-2xl md:text-3xl text-gray-300 mb-8 font-light transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          Empowering Your Digital Journey
        </p>

        {/* Description with fade-in */}
        <p
          className={`text-lg sm:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          Transform your business with cutting-edge software solutions. We build, innovate, and deliver exceptional
          digital experiences that drive growth and success.
        </p>

        {/* CTA Buttons with bounce animation */}
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl group animate-bounce-subtle"
          >
            Book a Consultation
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 backdrop-blur-sm bg-transparent hover:scale-105"
          >
            View Our Work
          </Button>
        </div>

        {/* Stats with counter animation */}
        <div
          className={`grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-white/10 transition-all duration-1000 delay-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="text-center group">
            <div className="text-3xl sm:text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
              100+
            </div>
            <div className="text-gray-400 text-sm sm:text-base">Projects Delivered</div>
          </div>
          <div className="text-center group">
            <div className="text-3xl sm:text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
              50+
            </div>
            <div className="text-gray-400 text-sm sm:text-base">Happy Clients</div>
          </div>
          <div className="text-center group">
            <div className="text-3xl sm:text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
              5+
            </div>
            <div className="text-gray-400 text-sm sm:text-base">Years Experience</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-white/60" />
      </div>
    </section>
  )
}
