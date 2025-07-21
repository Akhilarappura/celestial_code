import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export default function CoachSection() {
  return (
    <section id="coach" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">Meet Our Head Coach</h2>
          <div className="w-16 sm:w-24 h-1 bg-green-600 mx-auto"></div>
        </div>

        <Card className="max-w-5xl mx-auto overflow-hidden shadow-2xl">
          <CardContent className="p-0">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative h-64 sm:h-80 md:h-96 lg:h-full">
                <Image src="/images/coach.png" alt="Head Coach Marcus Rodriguez" fill className="object-cover" />
              </div>

              <div className="p-6 sm:p-8 lg:p-12 flex flex-col justify-center">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Marcus Rodriguez</h3>
                <p className="text-green-600 font-semibold mb-4 sm:mb-6 text-base sm:text-lg">
                  Head Coach & Academy Director
                </p>

                <div className="space-y-3 sm:space-y-4 text-gray-700 text-sm sm:text-base">
                  <p className="leading-relaxed">
                    With over 15 years of professional coaching experience, Marcus has trained players at all levels,
                    from youth academies to professional clubs.
                  </p>
                  <p className="leading-relaxed">
                    Former professional player with 200+ career appearances and a UEFA Pro License holder. Marcus brings
                    a wealth of tactical knowledge and passion for developing young talent.
                  </p>
                  <p className="leading-relaxed">
                    His coaching philosophy focuses on technical excellence, mental strength, and creating well-rounded
                    athletes who excel both on and off the pitch.
                  </p>
                </div>

                <div className="mt-6 sm:mt-8 grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-xl sm:text-2xl font-bold text-green-600">15+</div>
                    <div className="text-xs sm:text-sm text-gray-600">Years Experience</div>
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl font-bold text-green-600">200+</div>
                    <div className="text-xs sm:text-sm text-gray-600">Players Trained</div>
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl font-bold text-green-600">50+</div>
                    <div className="text-xs sm:text-sm text-gray-600">Trophies Won</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
