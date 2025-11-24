import {
  Award,
  Users,
  BookOpen,
  MessageSquare,
  Edit,
  Globe,
  Settings,
  Calendar,
} from "lucide-react";
import Header from "@/components/Header";

export default function FeaturesPage() {
  const features = [
    {
      icon: <Award className="w-8 h-8 text-yellow-600" />,
      title: "Expert-Led Training",
      description:
        "Learn from certified linguists and industry professionals with years of international experience and cultural expertise.",
      benefits: [
        "Certified instructors with advanced degrees",
        "Native speakers and cultural experts",
        "Industry-specific professional experience",
        "Continuous professional development",
      ],
      color: "bg-yellow-50 border-yellow-200",
    },
    {
      icon: <BookOpen className="w-8 h-8 text-primary" />,
      title: "Business-Focused Curriculum",
      description:
        "Structured learning programs designed specifically for workplace communication, professional growth, and international business success.",
      benefits: [
        "Real-world business scenarios and case studies",
        "Industry-specific terminology and protocols",
        "Professional communication skills development",
        "Cultural competency and business etiquette",
      ],
      color: "bg-blue-50 border-blue-200",
    },
    {
      icon: <Users className="w-8 h-8 text-green-600" />,
      title: "Live & Interactive Classes",
      description:
        "Small group sessions with real-time feedback, interactive practice, and personalized attention for optimal learning outcomes.",
      benefits: [
        "Small class sizes for personalized attention",
        "Real-time feedback and correction",
        "Interactive speaking and listening practice",
        "Peer learning and collaboration opportunities",
      ],
      color: "bg-green-50 border-green-200",
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-purple-600" />,
      title: "Translation & Interpretation Support",
      description:
        "Professional translation and interpretation services to bridge language gaps in business communications and international operations.",
      benefits: [
        "Professional document translation services",
        "Real-time interpretation for meetings and events",
        "Website and marketing material localization",
        "Certified translation for official documents",
      ],
      color: "bg-purple-50 border-purple-200",
    },
    {
      icon: <Edit className="w-8 h-8 text-indigo-600" />,
      title: "Editing & Localization Services",
      description:
        "Comprehensive editing, proofreading, and localization services to ensure accurate, culturally appropriate, and professional communications.",
      benefits: [
        "Professional proofreading and editing",
        "Cultural appropriateness review",
        "Brand voice and style consistency",
        "Multilingual content optimization",
      ],
      color: "bg-indigo-50 border-indigo-200",
    },
    {
      icon: <Calendar className="w-8 h-8 text-pink-600" />,
      title: "Flexible Learning Options",
      description:
        "Customizable schedules and learning formats designed to accommodate busy professionals and diverse learning preferences.",
      benefits: [
        "Multiple time slots and scheduling options",
        "Weekend and evening class availability",
        "Online and in-person learning modes",
        "Accelerated and standard-pace programs",
      ],
      color: "bg-pink-50 border-pink-200",
    },
    {
      icon: <Globe className="w-8 h-8 text-teal-600" />,
      title: "B2B Language Solutions",
      description:
        "Comprehensive corporate language solutions including team training, interpretation services, and enterprise-level communication support.",
      benefits: [
        "Corporate team training programs",
        "Executive and leadership language coaching",
        "Business event interpretation services",
        "Enterprise translation and localization",
      ],
      color: "bg-teal-50 border-teal-200",
    },
    {
      icon: <Settings className="w-8 h-8 text-orange-600" />,
      title: "Cultural Training & Localization",
      description:
        "Deep cultural training and localization expertise to ensure effective cross-cultural communication and business success.",
      benefits: [
        "Cross-cultural communication training",
        "Business etiquette and protocol instruction",
        "Regional market insights and strategies",
        "Cultural sensitivity and awareness development",
      ],
      color: "bg-orange-50 border-orange-200",
    },
  ];

  const learningMethods = [
    {
      title: "Interactive Video Lessons",
      description:
        "High-quality video content with interactive elements and real-time engagement",
      icon: "🎥",
    },
    {
      title: "Real-World Case Studies",
      description:
        "Actual business scenarios and case studies from international markets",
      icon: "💼",
    },
    {
      title: "Cultural Immersion Activities",
      description:
        "Practical cultural training through simulated international business environments",
      icon: "🌍",
    },
    {
      title: "One-on-One Coaching",
      description:
        "Personalized coaching sessions with expert instructors for targeted skill development",
      icon: "👤",
    },
  ];

  const certifications = [
    {
      name: "Business Language Certificate",
      description: "Official certification for business language proficiency",
      levels: "All levels available",
    },
    {
      name: "Cultural Competency Certification",
      description:
        "Recognized certification for cross-cultural business communication",
      levels: "Professional & Executive",
    },
    {
      name: "Professional Translation Certificate",
      description: "Industry-recognized certification for translation services",
      levels: "Specialized fields",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header buttonText="Enroll Now" />
      <div className="pt-24">

      {/* Page Header */}
      <section className="bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-secondary">Our Features</h1>
          <p className="text-xl md:text-2xl text-white opacity-90 max-w-3xl mx-auto">
            Comprehensive language education with cutting-edge features designed
            for professional success
          </p>
        </div>
      </section>

      {/* Features Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              What Makes Our Platform Unique
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Our comprehensive language education platform combines traditional
              teaching excellence with modern technology and business-focused
              methodology to deliver unparalleled learning experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`${feature.color} p-8 rounded-2xl border-2 hover:shadow-lg transition-shadow`}
              >
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-white rounded-lg mr-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                  {feature.description}
                </p>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">
                    Key Benefits:
                  </h4>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Methods */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Innovative Learning Methods
            </h2>
            <p className="text-xl text-gray-600">
              Diverse teaching approaches designed for optimal learning outcomes
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {learningMethods.map((method, index) => (
              <div
                key={index}
                className="text-center p-6 bg-blue-50 rounded-lg hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{method.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {method.title}
                </h3>
                <p className="text-gray-600">{method.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology & Platform */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Advanced Learning Technology
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our state-of-the-art learning platform combines the best of
                traditional language education with cutting-edge technology to
                create an immersive, effective learning experience.
              </p>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center mr-4 flex-shrink-0 text-sm font-bold">
                    AI
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      AI-Powered Progress Tracking
                    </h4>
                    <p className="text-gray-600">
                      Intelligent algorithms track your progress and adapt
                      lessons to your learning style
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center mr-4 flex-shrink-0 text-sm font-bold">
                    VR
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Virtual Reality Practice
                    </h4>
                    <p className="text-gray-600">
                      Immersive VR environments for realistic business
                      communication practice
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center mr-4 flex-shrink-0 text-sm font-bold">
                    ML
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Machine Learning Analytics
                    </h4>
                    <p className="text-gray-600">
                      Data-driven insights to optimize your learning journey and
                      outcomes
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&h=400&fit=crop"
                alt="Students using advanced learning technology"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Industry-Recognized Certifications
            </h2>
            <p className="text-xl text-gray-600">
              Earn valuable credentials that advance your career and validate
              your language skills
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-lg border-2 border-blue-200 text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {cert.name}
                </h3>
                <p className="text-gray-600 mb-4">{cert.description}</p>
                <div className="text-sm text-primary font-medium">
                  {cert.levels}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Support */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Comprehensive Student Support
            </h2>
            <p className="text-xl text-gray-600">
              We're committed to your success every step of the way
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Academic Advisors
              </h3>
              <p className="text-gray-600 text-sm">
                Personal guidance throughout your learning journey
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">24/7 Support</h3>
              <p className="text-gray-600 text-sm">
                Round-the-clock assistance for technical and academic support
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Learning Resources
              </h3>
              <p className="text-gray-600 text-sm">
                Extensive library of materials and practice exercises
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Global Community
              </h3>
              <p className="text-gray-600 text-sm">
                Connect with learners and professionals worldwide
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-yellow-400 to-yellow-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Experience Our Advanced Learning Features
          </h2>
          <p className="text-xl text-primary mb-8">
            Join thousands of professionals who have transformed their careers
            with our innovative language education platform
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-colors"
            >
              Start Learning Today
            </a>
            <a
              href="/courses"
              className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors"
            >
              Explore Courses
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
