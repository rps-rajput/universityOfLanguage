import { Target, Eye, Award, Globe, Users, BookOpen } from "lucide-react";
import Header from "@/components/Header";

export default function AboutPage() {
  const uniqueFeatures = [
    {
      icon: <Award className="w-8 h-8 text-yellow-600" />,
      title: "Expert-Certified Trainers",
      description:
        "Our instructors are certified linguists and industry professionals with years of international experience.",
    },
    {
      icon: <BookOpen className="w-8 h-8 text-primary" />,
      title: "Business-Focused Curriculum",
      description:
        "Structured learning programs designed specifically for workplace communication and global career growth.",
    },
    {
      icon: <Users className="w-8 h-8 text-yellow-600" />,
      title: "Cultural Awareness Training",
      description:
        "Beyond language skills, we provide cultural context and awareness for effective international communication.",
    },
    {
      icon: <Globe className="w-8 h-8 text-primary" />,
      title: "Global Language Services",
      description:
        "Comprehensive solutions including interpretation, translation, and localization services for businesses.",
    },
  ];

  const instructors = [
    {
      name: "Bhagirath Kumawat",
      specialty: "French Language Expert",
      credentials: "Postgraduation in French, JNU, Proficiency Level C1",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      description:
        "Specialized in business French with extensive experience in corporate training and diplomatic interpretation.",
    },
    {
      name: "Dr. Sarah Mueller",
      specialty: "German Language Specialist",
      credentials:
        "PhD in German Linguistics, Certified Business German Trainer",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
      description:
        "Expert in German business communication with 15+ years of international corporate training experience.",
    },
    {
      name: "Prof. Hiroshi Tanaka",
      specialty: "Japanese Language Master",
      credentials: "JLPT N1 Certified Instructor, Business Japanese Specialist",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      description:
        "Specialized in Japanese business etiquette and formal communication for international professionals.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header buttonText="Enroll Now" />
      <div className="pt-24">

      {/* Page Header */}
      <section className="bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-secondary">About Us</h1>
          <p className="text-xl md:text-2xl text-white opacity-90 max-w-3xl mx-auto">
            Empowering global communication through expert language education
            and professional services
          </p>
        </div>
      </section>

      {/* About Description */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Who We Are
              </h2>
              <div className="prose prose-lg text-gray-600">
                <p className="mb-6">
                  We are an international language education institute committed
                  to helping learners and businesses communicate confidently
                  across borders. Our curriculum is designed by certified
                  linguists and industry experts to support both personal
                  communication and corporate language needs.
                </p>
                <p className="mb-6">
                  From beginner to advanced proficiency, we provide structured
                  learning focused on real-world workplace communication,
                  cultural awareness, and global career growth. Along with
                  language training, we provide professional interpretation,
                  translation, localization, and corporate language solutions.
                </p>
                <p>
                  Our commitment extends beyond traditional language learning to
                  encompass cultural competency, business etiquette, and
                  strategic communication skills that drive international
                  success.
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop"
                alt="Students learning languages together"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-blue-100 rounded-full mr-4">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Our Mission
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To bridge cultural and linguistic barriers by providing
                world-class language education and communication services that
                empower individuals and organizations to succeed in the global
                marketplace. We strive to foster meaningful cross-cultural
                connections through expert instruction and comprehensive
                language solutions.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-yellow-100 rounded-full mr-4">
                  <Eye className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To become the leading global language education institute
                recognized for excellence in multilingual communication
                training. We envision a world where language barriers no longer
                limit personal growth, business expansion, or cultural
                understanding, creating opportunities for meaningful global
                collaboration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Unique */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What Makes Us Unique
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive approach combines academic excellence with
              practical business applications
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {uniqueFeatures.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0 p-3 bg-blue-50 rounded-full">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Instructors */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Meet Our Expert Instructors
            </h2>
            <p className="text-xl text-gray-600">
              Learn from certified professionals with international experience
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {instructors.map((instructor, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-center mb-6">
                  <img
                    src={instructor.image}
                    alt={instructor.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {instructor.name}
                  </h3>
                  <p className="text-primary font-medium mb-2">
                    {instructor.specialty}
                  </p>
                  <p className="text-sm text-gray-500 mb-4">
                    {instructor.credentials}
                  </p>
                </div>
                <p className="text-gray-600 text-center">
                  {instructor.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Placeholder */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What Our Students Say
            </h2>
            <p className="text-xl text-gray-600">
              Success stories from our global community
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="text-4xl text-yellow-500 mb-4">"</div>
              <p className="text-gray-600 mb-6 italic">
                The business-focused approach helped me secure a promotion in my
                multinational company. The cultural training was invaluable for
                client meetings.
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-200 rounded-full mr-4"></div>
                <div>
                  <p className="font-semibold text-gray-900">Sarah Chen</p>
                  <p className="text-sm text-gray-500">Business Professional</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="text-4xl text-yellow-500 mb-4">"</div>
              <p className="text-gray-600 mb-6 italic">
                Excellent interpretation services for our international
                conferences. Professional, accurate, and culturally sensitive.
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-200 rounded-full mr-4"></div>
                <div>
                  <p className="font-semibold text-gray-900">
                    Michael Rodriguez
                  </p>
                  <p className="text-sm text-gray-500">Event Manager</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="text-4xl text-yellow-500 mb-4">"</div>
              <p className="text-gray-600 mb-6 italic">
                From beginner to advanced proficiency in just 18 months. The
                structured curriculum and expert guidance made all the
                difference.
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-200 rounded-full mr-4"></div>
                <div>
                  <p className="font-semibold text-gray-900">Anna Kowalski</p>
                  <p className="text-sm text-gray-500">Graduate Student</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-yellow-400 to-yellow-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Ready to Join Our Global Community?
          </h2>
          <p className="text-xl text-primary mb-8">
            Start your journey toward fluent, confident communication
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-colors"
            >
              Enroll Now
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
