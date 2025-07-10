import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiPhone, FiMail, FiMapPin, FiClock, FiSend, FiCheck } = FiIcons;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const services = [
    'Social Media Marketing',
    'Google Ads (PPC)',
    'SEO Optimization',
    'Web Design & Development',
    'Content Creation',
    'Custom Web Applications',
    'Multiple Services',
    'Not Sure Yet'
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: FiPhone,
      title: 'Phone',
      details: '(860) 555-0123',
      description: 'Mon-Fri 9AM-6PM EST'
    },
    {
      icon: FiMail,
      title: 'Email',
      details: 'info@bajiowebsolutions.com',
      description: 'We respond within 24 hours'
    },
    {
      icon: FiMapPin,
      title: 'Location',
      details: 'Lebanon, Connecticut',
      description: 'Serving all of Connecticut'
    },
    {
      icon: FiClock,
      title: 'Business Hours',
      details: 'Mon-Fri: 9AM-6PM',
      description: 'Sat: 10AM-2PM'
    }
  ];

  const faqs = [
    {
      question: 'How long does it take to see results?',
      answer: 'Results vary by service. SEO typically takes 3-6 months, while PPC campaigns can show results within days. Web development projects usually take 4-8 weeks.'
    },
    {
      question: 'Do you work with businesses outside Connecticut?',
      answer: 'Yes! While we\'re based in Lebanon, CT, we work with clients throughout New England and across the United States.'
    },
    {
      question: 'What makes you different from other agencies?',
      answer: 'We focus on measurable results, transparent reporting, and building long-term partnerships. Our local Connecticut expertise combined with cutting-edge strategies sets us apart.'
    },
    {
      question: 'Do you offer custom packages?',
      answer: 'Absolutely! We understand every business is unique. We create custom packages tailored to your specific needs and budget.'
    }
  ];

  return (
    <div className="overflow-hidden bg-dark-900">
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1200')] bg-cover bg-center opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold mb-6 text-white"
            >
              Get In Touch
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-300"
            >
              Ready to grow your business online? Let's discuss how we can help you achieve your digital goals.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-dark-700 p-6 rounded-xl border border-dark-600 text-center"
              >
                <div className="w-12 h-12 bg-teal-500 bg-opacity-20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <SafeIcon icon={info.icon} className="w-6 h-6 text-teal-500" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {info.title}
                </h3>
                <p className="text-teal-400 font-medium mb-1">
                  {info.details}
                </p>
                <p className="text-sm text-gray-300">
                  {info.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-dark-800 rounded-xl border border-dark-700 p-8">
                <h2 className="text-2xl font-bold text-white mb-6">
                  Book Your Free Website Audit
                </h2>
                
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-teal-500 bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <SafeIcon icon={FiCheck} className="w-8 h-8 text-teal-500" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-gray-300">
                      Thank you for your message. We'll get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-white"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-white"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                          Company Name
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-white"
                          placeholder="Your company name"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-white"
                          placeholder="(860) 555-0123"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                        Service Interested In
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-white"
                      >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-white"
                        placeholder="Tell us about your project and goals..."
                      />
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-teal-500 text-white py-3 px-6 rounded-lg font-medium hover:bg-teal-600 focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 transition-colors inline-flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed teal-glow"
                    >
                      {isSubmitting ? (
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      ) : (
                        <SafeIcon icon={FiSend} className="w-5 h-5 mr-2" />
                      )}
                      {isSubmitting ? 'Sending...' : 'Request Free Audit'}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Map & Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {/* Map Placeholder */}
              <div className="bg-dark-800 rounded-xl border border-dark-700 overflow-hidden">
                <div className="h-64 bg-dark-700 flex items-center justify-center">
                  <div className="text-center">
                    <SafeIcon icon={FiMapPin} className="w-12 h-12 text-teal-500 mx-auto mb-2" />
                    <p className="text-white">Lebanon, Connecticut</p>
                    <p className="text-sm text-gray-300">Serving all of Connecticut</p>
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div className="bg-dark-800 rounded-xl border border-dark-700 p-6">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Office Hours
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Monday - Friday</span>
                    <span className="font-medium text-teal-400">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Saturday</span>
                    <span className="font-medium text-teal-400">10:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Sunday</span>
                    <span className="font-medium text-white">Closed</span>
                  </div>
                </div>
              </div>

              {/* Quick Contact */}
              <div className="bg-teal-500 bg-opacity-20 rounded-xl p-6 border border-teal-500 border-opacity-30">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Need Immediate Help?
                </h3>
                <p className="text-gray-300 mb-4">
                  For urgent matters, give us a call directly:
                </p>
                <a
                  href="tel:8605550123"
                  className="text-teal-400 font-semibold text-lg hover:text-teal-300"
                >
                  (860) 555-0123
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-dark-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-300">
              Get answers to common questions about our services
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-dark-700 rounded-lg border border-dark-600 p-6"
              >
                <h3 className="text-lg font-semibold text-white mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-300">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;