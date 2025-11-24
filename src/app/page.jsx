import {
  GraduationCap,
  Globe,
  Users,
  Award,
  BookOpen,
  MessageSquare,
} from "lucide-react";
import Header from "@/components/Header";

export default function HomePage() {
  const features = [
    {
      icon: <Award className="w-8 h-8 text-yellow-600" />,
      title: "Expert-Certified Trainers",
      description: "Learn from industry professionals with proven expertise",
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Business-Focused Learning",
      description: "Curriculum designed for real-world workplace communication",
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-yellow-600" />,
      title: "Live & Interactive Classes",
      description: "Engaging sessions with real-time feedback and practice",
    },
    {
      icon: <Globe className="w-8 h-8 text-primary" />,
      title: "Global Language Services",
      description: "Comprehensive solutions for individuals & businesses",
    },
  ];

  const languages = [
    { name: "German", levels: "A1-C1", flag: "🇩🇪" },
    { name: "Spanish", levels: "A1-C1", flag: "🇪🇸" },
    { name: "Japanese", levels: "N5-N1", flag: "🇯🇵" },
    { name: "Korean", levels: "TOPIK 1-6", flag: "🇰🇷" },
    { name: "French", levels: "A1-C1", flag: "🇫🇷" },
  ];

  const services = [
    {
      title: "Professional Interpretation",
      description:
        "On-site & remote interpretation for business, legal, medical, corporate & diplomatic needs",
      icon: <MessageSquare className="w-6 h-6" />,
    },
    {
      title: "Translation Services",
      description:
        "Technical, legal, business, academic, website localization - Fast & confidential",
      icon: <BookOpen className="w-6 h-6" />,
    },
    {
      title: "B2B Language Solutions",
      description:
        "Corporate language training, business interpretation, translation & localization",
      icon: <Users className="w-6 h-6" />,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="pt-24">

      {/* Hero Section */}
      <section 
        className="relative bg-cover bg-center bg-no-repeat min-h-[600px] md:min-h-[700px] flex items-center"
        style={{
          backgroundImage: 'url(/banner_main.png)'
        }}
      >
        {/* Overlay for better text readability (optional, can be adjusted) */}
        <div className="absolute inset-0 bg-black bg-opacity-10"></div>
        
        {/* Content over the banner */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 whitespace-nowrap">
              University of <span style={{ color: '#ee4a62' }}>Languages</span>
            </h1>
            <h2 className="text-xl md:text-2xl font-light mb-8 text-gray-700">
              Unlocking Global Communication
            </h2>
            <p className="text-lg mb-8 text-gray-600 leading-relaxed">
              Master languages that open doors to global opportunities.<br />
              Learn from expert trainers with business-focused<br />
              curriculum designed for real-world success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 flex-wrap">
              <a
                href="/courses"
                className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-colors text-center inline-flex items-center justify-center"
              >
                Find Courses →
              </a>
              <a
                href="/contact"
                className="bg-secondary text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-colors text-center inline-flex items-center justify-center"
              >
                Try Demo →
              </a>
              {/* <a
                href="/contact"
                className="bg-white text-gray-900 border-2 border-gray-300 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors text-center"
              >
                Try Demo
              </a> */}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Languages */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Featured Languages
            </h2>
            <p className="text-xl text-gray-600">
              Master the languages that matter in today's global economy
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {languages.map((lang, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
              >
                <div className="text-4xl mb-4">{lang.flag}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {lang.name}
                </h3>
                <p className="text-gray-600 mb-4">{lang.levels}</p>
                <a
                  href="/courses"
                  className="text-primary hover:opacity-80 font-medium"
                >
                  Learn More →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose University of Languages?
            </h2>
            <p className="text-xl text-gray-600">
              Excellence in language education and global communication
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-blue-50 rounded-full">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive language solutions for individuals and businesses
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-blue-100 rounded-lg mr-4 text-primary">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <a
                  href="/services"
                  className="text-primary hover:opacity-80 font-medium"
                >
                  Learn More →
                </a>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a
              href="/services"
              className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-colors"
            >
              View All Services
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-yellow-400 to-yellow-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Ready to Start Your Language Journey?
          </h2>
          <p className="text-xl text-primary mb-8">
            Join thousands of students who have achieved fluency with our expert
            training
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
  href="/contact"
  className="text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-colors"
  style={{ backgroundColor: "#0c4169" }}
>
  Enroll Now
</a>
            <a
              href="/contact"
              className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors"
            >
              Contact Us
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
