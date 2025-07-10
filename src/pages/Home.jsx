import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiArrowRight, FiCheck, FiTrendingUp, FiUsers, FiAward, FiStar, FiLayers, FiZap, FiShield } = FiIcons;

const Home = () => {
  const services = [
    {
      title: 'Social Media Marketing',
      description: 'Engage your audience and build brand awareness across all social platforms.',
      icon: FiUsers,
    },
    {
      title: 'Google Ads (PPC)',
      description: 'Drive targeted traffic and maximize ROI with strategic paid advertising.',
      icon: FiTrendingUp,
    },
    {
      title: 'SEO Optimization',
      description: 'Improve your search rankings and increase organic visibility.',
      icon: FiStar,
    },
    {
      title: 'Web Design & Development',
      description: 'Create stunning, responsive websites that convert visitors into customers.',
      icon: FiAward,
    },
  ];

  const stats = [
    { number: '150+', label: 'Projects Completed' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '5+', label: 'Years Experience' },
    { number: '24/7', label: 'Support Available' },
  ];

  const trustIndicators = [
    {
      icon: FiLayers,
      title: 'Custom Solutions',
      description: 'Tailored to your specific business needs',
    },
    {
      icon: FiShield,
      title: '100% Satisfaction',
      description: 'Guaranteed results or your money back',
    },
    {
      icon: FiZap,
      title: 'Expert Support',
      description: '24/7 dedicated customer service',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'Local Restaurant Owner',
      text: 'Bajio Web Solutions transformed our online presence. Our website traffic increased by 300% and our online orders doubled!',
      rating: 5,
    },
    {
      name: 'Mike Chen',
      company: 'E-commerce Store',
      text: 'Their Google Ads campaign generated a 400% ROI in just 3 months. Highly recommended for any business looking to grow online.',
      rating: 5,
    },
    {
      name: 'Lisa Rodriguez',
      company: 'Professional Services',
      text: 'The team at Bajio created a beautiful, professional website that perfectly represents our brand. Excellent communication throughout.',
      rating: 5,
    },
  ];

  return (
    <div className="overflow-hidden bg-dark-900">
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold mb-6 text-white"
            >
              Grow Your Business
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-teal-600">
                Online
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-300"
            >
              Professional digital marketing and web development services in Lebanon, Connecticut. 
              We help businesses succeed in the digital world.
            </motion.p>
            
            {/* Stats Section - Moved here from below */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-teal-500 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300">{stat.label}</div>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/contact"
                className="bg-teal-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-600 transition-colors inline-flex items-center justify-center"
              >
                Book a Free Website Audit
                <SafeIcon icon={FiArrowRight} className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="border-2 border-teal-500 text-teal-400 px-8 py-3 rounded-lg font-semibold hover:bg-dark-800 transition-colors"
              >
                Our Services
              </Link>
            </motion.div>
          </div>
          
          {/* 3D Logo Visual Placeholder */}
          <div className="absolute -right-20 -bottom-20 opacity-10 hidden lg:block">
            <div className="text-[300px] font-bold text-teal-500 rotate-12">BWS</div>
          </div>
        </div>
      </section>

      {/* Trust Indicators Section */}
      <section className="py-16 bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trustIndicators.map((indicator, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-dark-700 p-6 rounded-xl border border-dark-600 text-center"
              >
                <div className="w-16 h-16 bg-teal-500 bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <SafeIcon icon={indicator.icon} className="w-8 h-8 text-teal-500" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {indicator.title}
                </h3>
                <p className="text-gray-300">
                  {indicator.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We offer comprehensive digital solutions to help your business thrive online
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-dark-800 p-6 rounded-xl border border-dark-700 hover:border-teal-500 transition-colors"
              >
                <div className="w-12 h-12 bg-teal-500 bg-opacity-20 rounded-lg flex items-center justify-center mb-4">
                  <SafeIcon icon={service.icon} className="w-6 h-6 text-teal-500" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-300">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="bg-teal-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-600 transition-colors inline-flex items-center"
            >
              View All Services
              <SafeIcon icon={FiArrowRight} className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-300">
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-dark-700 p-6 rounded-xl border border-dark-600"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <SafeIcon key={i} icon={FiStar} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4">"{testimonial.text}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-teal-400">{testimonial.company}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-teal-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Grow Your Business?
          </h2>
          <p className="text-xl mb-8 text-white opacity-90">
            Let's discuss how we can help you achieve your digital goals
          </p>
          <Link
            to="/contact"
            className="bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
          >
            Book Your Free Website Audit Today
            <SafeIcon icon={FiArrowRight} className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;