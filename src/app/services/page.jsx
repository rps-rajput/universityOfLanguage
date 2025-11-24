import {
  MessageSquare,
  FileText,
  Edit,
  Subtitles,
  Building,
  Globe,
  CheckCircle,
  Phone,
  Mail,
} from "lucide-react";
import Header from "@/components/Header";

export default function ServicesPage() {
  const services = [
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Professional Interpretation",
      description:
        "Expert interpretation services for Korean, German, Japanese, French, and Spanish. Available both on-site and remote for seamless global communication.",
      features: [
        "On-site interpretation for meetings and events",
        "Remote interpretation via video conferencing",
        "Simultaneous and consecutive interpretation",
        "Specialized terminology expertise",
      ],
      industries: [
        "Business & Corporate",
        "Legal & Judicial",
        "Medical & Healthcare",
        "Diplomatic & Government",
      ],
      benefits: [
        "Real-time accurate translation",
        "Cultural context and sensitivity",
        "Professional confidentiality",
        "Technical expertise in specialized fields",
      ],
      color: "bg-blue-50 border-blue-200",
      accentColor: "text-primary",
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Translation Services",
      description:
        "Comprehensive translation solutions for technical, legal, business, academic content, and website localization. Fast, accurate, and confidential service guaranteed.",
      features: [
        "Document translation (legal, technical, academic)",
        "Website localization and content adaptation",
        "Marketing material translation",
        "Certified translation services",
      ],
      industries: [
        "Legal & Contracts",
        "Technical & Engineering",
        "Business & Marketing",
        "Academic & Research",
      ],
      benefits: [
        "Native speaker expertise",
        "Industry-specific knowledge",
        "Quality assurance processes",
        "Quick turnaround times",
      ],
      color: "bg-green-50 border-green-200",
      accentColor: "text-green-600",
    },
    {
      icon: <Edit className="w-8 h-8" />,
      title: "Editing & Content Moderation",
      description:
        "Professional proofreading and polishing of translated documents. Multilingual content moderation to ensure accuracy, cultural appropriateness, and brand consistency.",
      features: [
        "Proofreading and editing translated content",
        "Cultural appropriateness review",
        "Style guide compliance",
        "Multilingual content moderation",
      ],
      industries: [
        "Publishing & Media",
        "Digital Marketing",
        "E-commerce",
        "Social Media Platforms",
      ],
      benefits: [
        "Enhanced content quality",
        "Cultural sensitivity assurance",
        "Brand voice consistency",
        "Error-free communications",
      ],
      color: "bg-purple-50 border-purple-200",
      accentColor: "text-purple-600",
    },
    {
      icon: <Subtitles className="w-8 h-8" />,
      title: "Transcription & Subtitling",
      description:
        "Professional subtitle creation for videos, webinars, documentaries, and corporate training materials. Accurate transcription services in multiple languages.",
      features: [
        "Video subtitle creation",
        "Audio transcription services",
        "Corporate training material subtitling",
        "Documentary and media subtitling",
      ],
      industries: [
        "Media & Entertainment",
        "Education & Training",
        "Corporate Communications",
        "Digital Marketing",
      ],
      benefits: [
        "Improved accessibility",
        "Global content reach",
        "Professional formatting",
        "Multiple file format support",
      ],
      color: "bg-orange-50 border-orange-200",
      accentColor: "text-orange-600",
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "B2B Language Solutions",
      description:
        "Comprehensive language solutions tailored for businesses including corporate training, business event interpretation, translation services, and L&D subtitling.",
      features: [
        "Corporate language training programs",
        "Business event interpretation",
        "Translation and localization for businesses",
        "L&D content subtitling",
      ],
      industries: [
        "Multinational Corporations",
        "International Trade",
        "Technology Companies",
        "Manufacturing & Export",
      ],
      benefits: [
        "Enhanced global communication",
        "Improved team productivity",
        "Market expansion support",
        "Cultural competency development",
      ],
      color: "bg-indigo-50 border-indigo-200",
      accentColor: "text-indigo-600",
    },
  ];

  const languages = [
    {
      name: "Korean",
      flag: "🇰🇷",
      specialty: "Technology, Manufacturing, International Trade",
    },
    {
      name: "German",
      flag: "🇩🇪",
      specialty: "Engineering, Automotive, Business",
    },
    {
      name: "Japanese",
      flag: "🇯🇵",
      specialty: "Technology, Manufacturing, Business Etiquette",
    },
    {
      name: "French",
      flag: "🇫🇷",
      specialty: "Diplomacy, International Business, African Markets",
    },
    {
      name: "Spanish",
      flag: "🇪🇸",
      specialty: "Latin American Markets, International Trade",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header buttonText="Get Quote" />
      <div className="pt-24">

      {/* Page Header */}
      <section className="bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-secondary">Our Services</h1>
          <p className="text-xl md:text-2xl text-white opacity-90 max-w-3xl mx-auto">
            Professional language services for global business success
          </p>
        </div>
      </section>

      {/* Services Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Comprehensive Language Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              From interpretation and translation to content moderation and
              corporate training, we provide end-to-end language services that
              enable seamless global communication and business growth.
            </p>
          </div>
        </div>
      </section>

      {/* Languages We Support */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Languages We Support
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Expert services in five major business languages with specialized
              industry knowledge
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {languages.map((language, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
              >
                <div className="text-4xl mb-4">{language.flag}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {language.name}
                </h3>
                <p className="text-sm text-gray-600">{language.specialty}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      {services.map((service, index) => (
        <section
          key={index}
          className={`py-16 ${index % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className={`${service.color} p-8 rounded-2xl border-2 hover:shadow-lg transition-shadow`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                {/* Service Overview */}
                <div>
                  <div className="flex items-center mb-6">
                    <div
                      className={`p-3 ${service.color} rounded-lg mr-4 ${service.accentColor}`}
                    >
                      {service.icon}
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">
                      {service.title}
                    </h2>
                  </div>
                  <p className="text-lg text-gray-600 mb-8">
                    {service.description}
                  </p>

                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      Service Features:
                    </h3>
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Industries and Benefits */}
                <div>
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      Industries Supported:
                    </h3>
                    <div className="grid grid-cols-2 gap-3">
                      {service.industries.map((industry, industryIndex) => (
                        <div
                          key={industryIndex}
                          className="bg-white p-3 rounded-lg border border-gray-200"
                        >
                          <span className="text-sm font-medium text-gray-700">
                            {industry}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      Key Benefits:
                    </h3>
                    <ul className="space-y-3">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                          <span className="text-gray-600">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="/contact"
                      className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-colors text-center"
                    >
                      Get Quote
                    </a>
                    <a
                      href="/contact"
                      className="border-2 border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors text-center"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Service Process */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Service Process
            </h2>
            <p className="text-xl text-gray-600">
              Simple, efficient workflow designed for professional results
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Consultation
              </h3>
              <p className="text-gray-600">
                Discuss your specific needs and project requirements
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Quote & Timeline
              </h3>
              <p className="text-gray-600">
                Receive detailed proposal with pricing and delivery schedule
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Expert Execution
              </h3>
              <p className="text-gray-600">
                Our certified professionals deliver high-quality results
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Quality Assurance
              </h3>
              <p className="text-gray-600">
                Review and refinement to ensure perfect results
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Our Services
            </h2>
            <p className="text-xl text-gray-600">
              Professional excellence that drives business success
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Global Expertise
              </h3>
              <p className="text-gray-600">
                Native speakers and cultural experts with deep understanding of
                international markets and business practices.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Quality Assurance
              </h3>
              <p className="text-gray-600">
                Rigorous quality control processes and multiple review stages
                ensure accuracy and cultural appropriateness.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                24/7 Support
              </h3>
              <p className="text-gray-600">
                Round-the-clock support for urgent projects and ongoing
                assistance for all your language service needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact for Services */}
      <section className="py-16 bg-gradient-to-r from-yellow-400 to-yellow-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Ready to Expand Your Global Reach?
          </h2>
          <p className="text-xl text-primary mb-8">
            Contact us for a free consultation and custom quote for your
            language service needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-colors"
            >
              Get Free Quote
            </a>
            <a
              href="/contact"
              className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors"
            >
              Schedule Consultation
            </a>
          </div>
          <div className="mt-8 flex justify-center items-center space-x-8 text-primary">
            <div className="flex items-center">
              <Phone className="w-5 h-5 mr-2" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center">
              <Mail className="w-5 h-5 mr-2" />
              <span>services@universityoflanguages.com</span>
            </div>
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
