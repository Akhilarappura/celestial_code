import { Award, Zap, Eye, Globe, Lightbulb, Shield } from "lucide-react"

const reasons = [
  {
    icon: Award,
    title: "Proven Expertise",
    description: "Years of experience delivering successful projects across various industries and technologies.",
  },
  {
    icon: Zap,
    title: "Agile Approach",
    description: "Fast, flexible development methodology that adapts to your changing needs and requirements.",
  },
  {
    icon: Eye,
    title: "Full Transparency",
    description: "Complete visibility into project progress with regular updates and clear communication.",
  },
  {
    icon: Globe,
    title: "Global Team",
    description: "Access to worldwide talent pool with diverse skills and round-the-clock development.",
  },
  {
    icon: Lightbulb,
    title: "Innovation Focus",
    description: "Cutting-edge technologies and creative solutions that give you a competitive advantage.",
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    description: "Rigorous testing and quality control processes ensure reliable and secure solutions.",
  },
]

export default function WhyChooseUsSection() {
  return (
    <section id="why-us" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">Why Choose Celestial Code?</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine technical excellence with business acumen to deliver solutions that drive real results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon
            return (
              <div
                key={index}
                className="group text-center p-8 rounded-2xl hover:bg-gradient-to-br hover:from-blue-50 hover:to-purple-50 transition-all duration-300"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                  <IconComponent className="w-10 h-10 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {reason.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{reason.description}</p>
              </div>
            )
          })}
        </div>

        {/* Additional Stats Section */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">99%</div>
              <div className="text-blue-100">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-blue-100">Support Available</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">48h</div>
              <div className="text-blue-100">Response Time</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-blue-100">On-Time Delivery</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
