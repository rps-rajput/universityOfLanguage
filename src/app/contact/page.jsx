import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Clock,
  HelpCircle,
} from "lucide-react";
import Header from "@/components/Header";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear status when user starts typing
    if (submitStatus) {
      setSubmitStatus(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: data.message || "Thank you for your message! We will get back to you within 24 hours.",
        });
    // Reset form
    setFormData({
      name: "",
      phone: "",
      email: "",
      service: "",
      message: "",
    });
      } else {
        setSubmitStatus({
          type: "error",
          message: data.message || "Failed to submit form. Please try again.",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus({
        type: "error",
        message: "An error occurred while submitting your form. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const serviceOptions = [
    "Language Courses - German",
    "Language Courses - Spanish",
    "Language Courses - Japanese",
    "Language Courses - Korean",
    "Language Courses - French",
    "Professional Interpretation",
    "Translation Services",
    "Editing & Content Moderation",
    "Transcription & Subtitling",
    "B2B Language Solutions",
    "Corporate Training",
    "Free Consultation",
    "Other - Please specify",
  ];

  const faqs = [
    {
      question: "How long does it take to complete a language course?",
      answer:
        "Course duration varies by level and language. Most courses range from 12-24 weeks, depending on the complexity and your chosen pace.",
    },
    {
      question: "Do you offer corporate training for teams?",
      answer:
        "Yes, we provide comprehensive B2B language solutions including corporate team training, customized curricula, and enterprise-level support.",
    },
    {
      question: "What certifications do you provide?",
      answer:
        "We offer industry-recognized certifications for language proficiency, cultural competency, and professional translation services.",
    },
    {
      question: "Can I get interpretation services for urgent projects?",
      answer:
        "Yes, we offer 24/7 interpretation services for urgent business needs. Contact us directly for immediate assistance.",
    },
  ];

  const contactMethods = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone Support",
      details: "+1 (555) 123-4567",
      description: "Available Monday to Friday, 9 AM - 6 PM EST",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: "info@universityoflanguages.com",
      description: "We respond within 24 hours",
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "WhatsApp",
      details: "+1 (555) 123-4567",
      description: "Quick responses for urgent inquiries",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Address",
      details: "123 Language Center Drive",
      description: "Global Education District, NY 10001",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header buttonText="Enroll Now" buttonClass="bg-[#0c4169]" />
      <div className="pt-24">

      {/* Page Header */}
      <section className="bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-secondary">Contact Us</h1>
          <p className="text-xl md:text-2xl text-white opacity-90 max-w-3xl mx-auto">
            Ready to start your language learning journey? Get in touch with our
            expert team today
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600">
              Choose the contact method that works best for you
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                  {method.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {method.title}
                </h3>
                <p className="text-primary font-medium mb-2">
                  {method.details}
                </p>
                <p className="text-sm text-gray-600">{method.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Select Service/Course *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  >
                    <option value="">Choose a service or course</option>
                    {serviceOptions.map((option, index) => (
                      <option key={index} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    placeholder="Tell us about your language learning goals, specific requirements, or any questions you have..."
                  />
                </div>

                {submitStatus && (
                  <div
                    className={`p-4 rounded-lg ${
                      submitStatus.type === "success"
                        ? "bg-green-50 text-green-800 border border-green-200"
                        : "bg-red-50 text-red-800 border border-red-200"
                    }`}
                  >
                    {submitStatus.message}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-white py-3 px-6 rounded-lg font-semibold hover:opacity-90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>

            {/* Map and Additional Info */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Visit Our Campus
              </h2>

              {/* Google Map Placeholder */}
              <div className="bg-gray-200 h-64 rounded-lg mb-8 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <MapPin className="w-12 h-12 mx-auto mb-2" />
                  <p className="text-lg font-medium">Interactive Map</p>
                  <p className="text-sm">
                    Google Maps integration will be displayed here
                  </p>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-blue-50 p-6 rounded-lg mb-8">
                <div className="flex items-center mb-4">
                  <Clock className="w-6 h-6 text-blue-600 mr-2" />
                  <h3 className="text-xl font-semibold text-gray-900">
                    Business Hours
                  </h3>
                </div>
                <div className="space-y-2 text-gray-600">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>9:00 AM - 6:00 PM EST</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span>10:00 AM - 4:00 PM EST</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Follow Us
                </h3>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center hover:opacity-90 transition-colors"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-secondary text-white rounded-full flex items-center justify-center hover:opacity-90 transition-colors"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-pink-600 text-white rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center hover:opacity-90 transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions about our services
            </p>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start">
                  <HelpCircle className="w-6 h-6 text-primary mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp CTA */}
      {/* <section className="py-16 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-6">
            <MessageCircle className="w-12 h-12 text-white mr-4" />
            <h2 className="text-3xl font-bold text-white">
              Need Immediate Help?
            </h2>
          </div>
          <p className="text-xl text-green-100 mb-8">
            Chat with us on WhatsApp for quick responses to your questions
          </p>
          <a
            href="https://wa.me/15551234567"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-flex items-center"
          >
            <MessageCircle className="w-6 h-6 mr-2" />
            Start WhatsApp Chat
          </a>
        </div>
      </section> */}

      {/* Emergency Contact */}
      {/* <section className="py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            24/7 Emergency Interpretation Services
          </h2>
          <p className="text-xl text-white opacity-90 mb-8">
            For urgent interpretation needs outside business hours
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+15551234567"
              className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors inline-flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Emergency Hotline: +1 (555) 123-4567
            </a>
            <a
              href="mailto:emergency@universityoflanguages.com"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors inline-flex items-center justify-center"
            >
              <Mail className="w-5 h-5 mr-2" />
              Emergency Email
            </a>
          </div>
        </div>
      </section> */}

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
