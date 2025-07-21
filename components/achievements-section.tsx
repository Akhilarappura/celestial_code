import { Trophy, Award, Medal, Target } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const achievements = [
  {
    icon: Trophy,
    title: "Regional Champions",
    description: "Winners of the Regional Youth League 2023",
    year: "2023",
  },
  {
    icon: Medal,
    title: "Best Academy Award",
    description: "Recognized as the Best Youth Academy in the State",
    year: "2022",
  },
  {
    icon: Award,
    title: "Excellence in Coaching",
    description: "National Coaching Excellence Award",
    year: "2023",
  },
  {
    icon: Target,
    title: "100% Success Rate",
    description: "All graduating players secured scholarships",
    year: "2023",
  },
  {
    icon: Trophy,
    title: "Cup Winners",
    description: "State Youth Cup Champions",
    year: "2022",
  },
  {
    icon: Medal,
    title: "Fair Play Award",
    description: "Outstanding Sportsmanship Recognition",
    year: "2023",
  },
]

export default function AchievementsSection() {
  return (
    <section id="achievements" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">Our Achievements</h2>
          <div className="w-16 sm:w-24 h-1 bg-green-600 mx-auto mb-6 sm:mb-8"></div>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Celebrating excellence and recognizing the hard work of our players and coaching staff
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon
            return (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg"
              >
                <CardContent className="p-6 sm:p-8 text-center">
                  <div className="mb-4 sm:mb-6">
                    <div className="w-12 sm:w-16 h-12 sm:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto group-hover:bg-green-600 transition-colors duration-300">
                      <IconComponent className="w-6 sm:w-8 h-6 sm:h-8 text-green-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                  </div>

                  <div className="mb-2">
                    <span className="inline-block bg-green-600 text-white px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
                      {achievement.year}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-300">
                    {achievement.title}
                  </h3>

                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{achievement.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
