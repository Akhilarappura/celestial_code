import Link from "next/link"
import { Facebook, Twitter, Linkedin, Github, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">CC</span>
              </div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Celestial Code
              </h3>
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Empowering businesses through innovative software solutions. We transform ideas into powerful digital
              experiences that drive growth and success.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
              >
                <Facebook className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
              >
                <Twitter className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
              >
                <Github className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#about" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                  Case Studies
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
           kollam
                  <br />
               kollam
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">+91 9496819290</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">hello@celestialcode.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 sm:mb-0">© 2024 Celestial Code. All rights reserved.</p>
          <div className="flex space-x-6 text-sm">
            <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
              Terms of Service
            </Link>
            <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
