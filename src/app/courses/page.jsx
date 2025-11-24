import { Star, Clock, Users, Award, CheckCircle } from "lucide-react";
import Header from "@/components/Header";

export default function CoursesPage() {
  const languages = [
    {
      name: "German",
      flag: "🇩🇪",
      color: "bg-red-50 border-red-200",
      accentColor: "text-red-600",
      levels: [
        {
          level: "A1 - Beginner",
          description:
            "Start your German journey with basic vocabulary, greetings, and essential grammar. Perfect for business introductions and simple workplace conversations.",
          benefits: [
            "Basic business greetings",
            "Simple email communication",
            "Numbers and time expressions",
            "Introduction to German business culture",
          ],
          duration: "12 weeks",
          price: "$299",
        },
        {
          level: "A2 - Elementary",
          description:
            "Build confidence in everyday German conversations. Learn to handle routine business tasks and simple negotiations in German-speaking environments.",
          benefits: [
            "Workplace small talk",
            "Basic meeting participation",
            "Simple presentations",
            "German business etiquette",
          ],
          duration: "12 weeks",
          price: "$349",
        },
        {
          level: "B1 - Intermediate",
          description:
            "Express opinions and handle complex business situations. Ideal for professionals working with German clients or planning to work in Germany.",
          benefits: [
            "Professional meetings",
            "Complex email writing",
            "Problem-solving discussions",
            "Cultural competency training",
          ],
          duration: "14 weeks",
          price: "$399",
        },
        {
          level: "B2 - Upper Intermediate",
          description:
            "Master detailed business communication and advanced grammar. Handle presentations, negotiations, and complex business correspondence with confidence.",
          benefits: [
            "Advanced presentations",
            "Contract negotiations",
            "Technical discussions",
            "Leadership communication",
          ],
          duration: "16 weeks",
          price: "$449",
        },
        {
          level: "C1 - Advanced",
          description:
            "Achieve near-native proficiency for executive-level communication. Perfect for senior roles, academic discussions, and complex business strategies.",
          benefits: [
            "Executive communication",
            "Strategic planning discussions",
            "Academic and research communication",
            "Cross-cultural leadership",
          ],
          duration: "18 weeks",
          price: "$499",
        },
      ],
    },
    {
      name: "Spanish",
      flag: "🇪🇸",
      color: "bg-yellow-50 border-yellow-200",
      accentColor: "text-yellow-600",
      levels: [
        {
          level: "A1 - Beginner",
          description:
            "Master Spanish basics for international business. Learn essential vocabulary for Latin American and Spanish markets.",
          benefits: [
            "Business introductions",
            "Basic customer service",
            "Travel and logistics",
            "Cultural awareness",
          ],
          duration: "12 weeks",
          price: "$299",
        },
        {
          level: "A2 - Elementary",
          description:
            "Develop conversational skills for business environments. Handle routine tasks and simple client interactions in Spanish.",
          benefits: [
            "Client communication",
            "Phone conversations",
            "Simple negotiations",
            "Market terminology",
          ],
          duration: "12 weeks",
          price: "$349",
        },
        {
          level: "B1 - Intermediate",
          description:
            "Express complex ideas and participate actively in business meetings. Essential for expanding into Hispanic markets.",
          benefits: [
            "Meeting participation",
            "Project management",
            "Sales presentations",
            "Regional business practices",
          ],
          duration: "14 weeks",
          price: "$399",
        },
        {
          level: "B2 - Upper Intermediate",
          description:
            "Handle advanced business communication across diverse Spanish-speaking regions. Master formal presentations and negotiations.",
          benefits: [
            "Advanced negotiations",
            "Multi-cultural communication",
            "Technical presentations",
            "Strategic discussions",
          ],
          duration: "16 weeks",
          price: "$449",
        },
        {
          level: "C1 - Advanced",
          description:
            "Achieve executive-level Spanish for senior management roles. Perfect for international leadership positions.",
          benefits: [
            "Executive leadership",
            "Strategic planning",
            "Academic research",
            "Cross-border mergers",
          ],
          duration: "18 weeks",
          price: "$499",
        },
      ],
    },
    {
      name: "Japanese",
      flag: "🇯🇵",
      color: "bg-pink-50 border-pink-200",
      accentColor: "text-pink-600",
      levels: [
        {
          level: "N5 - Basic",
          description:
            "Foundation Japanese for business professionals. Learn hiragana, katakana, and essential business vocabulary for the Japanese market.",
          benefits: [
            "Basic business cards exchange",
            "Simple greetings and introductions",
            "Numbers and basic transactions",
            "Japanese business etiquette fundamentals",
          ],
          duration: "14 weeks",
          price: "$349",
        },
        {
          level: "N4 - Elementary",
          description:
            "Build practical communication skills for Japanese business environments. Understand basic workplace conversations and procedures.",
          benefits: [
            "Workplace conversations",
            "Simple meeting participation",
            "Email basics",
            "Cultural sensitivity training",
          ],
          duration: "16 weeks",
          price: "$399",
        },
        {
          level: "N3 - Intermediate",
          description:
            "Develop intermediate Japanese for professional settings. Handle complex business situations and technical discussions.",
          benefits: [
            "Technical discussions",
            "Project coordination",
            "Client presentations",
            "Advanced business etiquette",
          ],
          duration: "18 weeks",
          price: "$449",
        },
        {
          level: "N2 - Upper Intermediate",
          description:
            "Master advanced Japanese for business leadership. Essential for management positions in Japanese corporations.",
          benefits: [
            "Leadership communication",
            "Strategic planning",
            "Complex negotiations",
            "Academic and research discussions",
          ],
          duration: "20 weeks",
          price: "$499",
        },
        {
          level: "N1 - Advanced",
          description:
            "Achieve near-native Japanese proficiency. Perfect for senior executive roles and academic research in Japanese institutions.",
          benefits: [
            "Executive leadership",
            "Academic research",
            "Cultural integration",
            "Complex technical communication",
          ],
          duration: "22 weeks",
          price: "$599",
        },
      ],
    },
    {
      name: "Korean",
      flag: "🇰🇷",
      color: "bg-blue-50 border-blue-200",
      accentColor: "text-primary",
      levels: [
        {
          level: "TOPIK 1 - Beginner",
          description:
            "Start Korean for business expansion into one of Asia's most dynamic markets. Learn Hangul and basic business vocabulary.",
          benefits: [
            "Basic business introductions",
            "Simple customer service",
            "Technology sector terminology",
            "Korean business hierarchy",
          ],
          duration: "14 weeks",
          price: "$349",
        },
        {
          level: "TOPIK 2 - Elementary",
          description:
            "Build conversational Korean for professional environments. Essential for tech companies and manufacturing businesses.",
          benefits: [
            "Workplace communication",
            "Basic presentations",
            "Manufacturing terminology",
            "Tech industry basics",
          ],
          duration: "16 weeks",
          price: "$399",
        },
        {
          level: "TOPIK 3 - Intermediate",
          description:
            "Develop intermediate Korean for complex business operations. Handle negotiations and technical discussions effectively.",
          benefits: [
            "Business negotiations",
            "Technical discussions",
            "Project management",
            "Supply chain communication",
          ],
          duration: "18 weeks",
          price: "$449",
        },
        {
          level: "TOPIK 4 - Upper Intermediate",
          description:
            "Master advanced Korean for leadership roles in Korean corporations. Essential for international business development.",
          benefits: [
            "Leadership roles",
            "Strategic planning",
            "International trade",
            "Cultural business practices",
          ],
          duration: "20 weeks",
          price: "$499",
        },
        {
          level: "TOPIK 5 - Advanced",
          description:
            "Achieve advanced Korean proficiency for senior management. Perfect for joint ventures and academic collaborations.",
          benefits: [
            "Senior management",
            "Academic collaboration",
            "Joint ventures",
            "Government relations",
          ],
          duration: "22 weeks",
          price: "$549",
        },
        {
          level: "TOPIK 6 - Expert",
          description:
            "Reach expert-level Korean for executive positions and academic research. The highest level of professional Korean competency.",
          benefits: [
            "Executive leadership",
            "Academic research",
            "Government diplomacy",
            "Cultural mastery",
          ],
          duration: "24 weeks",
          price: "$599",
        },
      ],
    },
    {
      name: "French",
      flag: "🇫🇷",
      color: "bg-indigo-50 border-indigo-200",
      accentColor: "text-indigo-600",
      levels: [
        {
          level: "A1 - Beginner",
          description:
            "Begin French for international business and diplomacy. Essential for African markets, Canadian business, and European operations.",
          benefits: [
            "Business introductions",
            "Basic customer service",
            "Travel and logistics",
            "French business culture",
          ],
          duration: "12 weeks",
          price: "$299",
        },
        {
          level: "A2 - Elementary",
          description:
            "Develop practical French for business environments. Handle routine communications and simple client interactions.",
          benefits: [
            "Client communication",
            "Email correspondence",
            "Meeting basics",
            "Cultural sensitivity",
          ],
          duration: "12 weeks",
          price: "$349",
        },
        {
          level: "B1 - Intermediate",
          description:
            "Express complex business ideas and participate in French business culture. Essential for European and African market expansion.",
          benefits: [
            "Meeting participation",
            "Business presentations",
            "Contract discussions",
            "Regional market knowledge",
          ],
          duration: "14 weeks",
          price: "$399",
        },
        {
          level: "B2 - Upper Intermediate",
          description:
            "Handle sophisticated business communication and negotiations. Perfect for management roles in French-speaking regions.",
          benefits: [
            "Advanced negotiations",
            "Management communication",
            "Technical presentations",
            "Strategic planning",
          ],
          duration: "16 weeks",
          price: "$449",
        },
        {
          level: "C1 - Advanced",
          description:
            "Achieve executive-level French for senior leadership roles. Essential for diplomatic relations and international organizations.",
          benefits: [
            "Executive leadership",
            "Diplomatic communication",
            "Academic research",
            "International organizations",
          ],
          duration: "18 weeks",
          price: "$499",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header buttonText="Enroll Now" />
      <div className="pt-24">

      {/* Page Header */}
      <section className="bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-secondary">Our Courses</h1>
          <p className="text-xl md:text-2xl text-white opacity-90 max-w-3xl mx-auto">
            Professional language training designed for global business success
          </p>
        </div>
      </section>

      {/* Course Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Structured Learning Paths for Every Level
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              Our comprehensive language courses are designed by certified
              linguists and industry experts. Each course focuses on real-world
              workplace communication, cultural awareness, and practical
              business skills.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="flex items-center justify-center p-4 bg-blue-50 rounded-lg">
                <Users className="w-6 h-6 text-primary mr-2" />
                <span className="text-gray-700">Live Classes</span>
              </div>
              <div className="flex items-center justify-center p-4 bg-yellow-50 rounded-lg">
                <Award className="w-6 h-6 text-yellow-600 mr-2" />
                <span className="text-gray-700">Certified Instructors</span>
              </div>
              <div className="flex items-center justify-center p-4 bg-green-50 rounded-lg">
                <CheckCircle className="w-6 h-6 text-green-600 mr-2" />
                <span className="text-gray-700">Business Focused</span>
              </div>
              <div className="flex items-center justify-center p-4 bg-purple-50 rounded-lg">
                <Clock className="w-6 h-6 text-purple-600 mr-2" />
                <span className="text-gray-700">Flexible Schedule</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Languages and Courses */}
      {languages.map((language, langIndex) => (
        <section
          key={langIndex}
          className={`py-16 ${langIndex % 2 === 0 ? "bg-gray-50" : "bg-white"}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="text-6xl mb-4">{language.flag}</div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {language.name} Language Courses
              </h2>
              <p className="text-xl text-gray-600">
                Master {language.name} for international business success
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {language.levels.map((course, courseIndex) => (
                <div
                  key={courseIndex}
                  className={`${language.color} p-6 rounded-lg border-2 hover:shadow-lg transition-shadow`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900">
                      {course.level}
                    </h3>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6">{course.description}</p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">
                      Key Benefits:
                    </h4>
                    <ul className="space-y-2">
                      {course.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                          <span className="text-sm text-gray-600">
                            {benefit}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center text-gray-600">
                      <Clock className="w-4 h-4 mr-2" />
                      <span className="text-sm">{course.duration}</span>
                    </div>
                    <div
                      className={`${language.accentColor} font-bold text-2xl`}
                    >
                      {course.price}
                    </div>
                  </div>

                  <button className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-colors">
                    Enroll Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Course Features */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What's Included in Every Course
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive learning experience designed for busy professionals
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Live Interactive Classes
              </h3>
              <p className="text-gray-600 text-sm">
                Small group sessions with real-time feedback and practice
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Certification
              </h3>
              <p className="text-gray-600 text-sm">
                Official certificate upon course completion
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Business Materials
              </h3>
              <p className="text-gray-600 text-sm">
                Real-world business scenarios and case studies
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Flexible Scheduling
              </h3>
              <p className="text-gray-600 text-sm">
                Multiple time slots to fit your busy schedule
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-yellow-400 to-yellow-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Ready to Start Learning?
          </h2>
          <p className="text-xl text-primary mb-8">
            Choose your language and level to begin your professional
            development journey
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-colors"
            >
              Enroll Now
            </a>
            <a
              href="/contact"
              className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors"
            >
              Get Free Consultation
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <img
                src="https://ucarecdn.com/c1c1dab1-1119-49ef-b9b2-a918dd005127/-/format/auto/"
                alt="University of Languages Logo"
                className="h-12 w-auto mb-4 filter brightness-0 invert"
              />
              <p className="text-gray-300">
                Unlocking Global Communication through expert language education
                and professional services.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a href="/about" className="hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/courses" className="hover:text-white">
                    Courses
                  </a>
                </li>
                <li>
                  <a href="/services" className="hover:text-white">
                    Services
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Languages</h4>
              <ul className="space-y-2 text-gray-300">
                <li>German (A1-C1)</li>
                <li>Spanish (A1-C1)</li>
                <li>Japanese (N5-N1)</li>
                <li>Korean (TOPIK 1-6)</li>
                <li>French (A1-C1)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-300">
                <p>Email: info@universityoflanguages.com</p>
                <p>Phone: +1 (555) 123-4567</p>
                <p>WhatsApp: +1 (555) 123-4567</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2024 University of Languages. All rights reserved.</p>
          </div>
        </div>
      </footer>
      </div>
    </div>
  );
}
