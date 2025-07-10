import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiUsers, FiTrendingUp, FiSearch, FiMonitor, FiEdit3, FiCode, FiCheck, FiArrowRight } = FiIcons;

const Services = () => {
  const services = [
    {
      icon: FiUsers,
      title: 'Social Media Marketing',
      description: 'Build a strong social media presence and engage with your audience across all platforms.',
      features: [
        'Content strategy and planning',
        'Social media account management',
        'Community engagement and growth',
        'Social media advertising campaigns',
        'Analytics and performance reporting',
        'Influencer partnership coordination'
      ],
      pricing: 'Starting at $899/month'
    },
    {
      icon: FiTrendingUp,
      title: 'Google Ads (PPC)',
      description: 'Drive targeted traffic and maximize ROI with strategic pay-per-click advertising campaigns.',
      features: [
        'Keyword research and analysis',
        'Campaign setup and optimization',
        'Ad copy creation and testing',
        'Landing page optimization',
        'Conversion tracking and reporting',
        'Budget management and scaling'
      ],
      pricing: 'Starting at $1,299/month'
    },
    {
      icon: FiSearch,
      title: 'SEO Optimization',
      description: 'Improve your search engine rankings and increase organic visibility for your business.',
      features: [
        'Technical SEO audits',
        'On-page optimization',
        'Content optimization',
        'Local SEO for Connecticut businesses',
        'Link building strategies',
        'Monthly performance reports'
      ],
      pricing: 'Starting at $799/month'
    },
    {
      icon: FiMonitor,
      title: 'Web Design & Development',
      description: 'Create stunning, responsive websites that convert visitors into customers.',
      features: [
        'Custom website design',
        'Mobile-responsive development',
        'E-commerce functionality',
        'CMS integration',
        'Performance optimization',
        'Ongoing maintenance and support'
      ],
      pricing: 'Starting at $2,499'
    },
    {
      icon: FiEdit3,
      title: 'Content Creation',
      description: 'Engage your audience with high-quality, relevant content that drives results.',
      features: [
        'Blog writing and management',
        'Social media content creation',
        'Email marketing campaigns',
        'Video content production',
        'Graphic design and visuals',
        'Content strategy development'
      ],
      pricing: 'Starting at $599/month'
    },
    {
      icon: FiCode,
      title: 'Custom Web Applications',
      description: 'Build powerful, scalable web applications tailored to your specific business needs.',
      features: [
        'Custom application development',
        'API integrations',
        'Database design and management',
        'User authentication systems',
        'Third-party service integration',
        'Ongoing support and maintenance'
      ],
      pricing: 'Starting at $4,999'
    },
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Strategy',
      description: 'We analyze your business, competitors, and target audience to create a tailored strategy.',
    },
    {
      step: '02',
      title: 'Planning & Design',
      description: 'Our team creates detailed plans and designs that align with your business goals.',
    },
    {
      step: '03',
      title: 'Development & Implementation',
      description: 'We bring your project to life with careful attention to detail and quality.',
    },
    {
      step: '04',
      title: 'Launch & Optimization',
      description: 'We launch your project and continuously optimize for better performance.',
    },
  ];

  return (
    <div className="overflow-hidden bg-dark-900">
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200')] bg-cover bg-center opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold mb-6 text-white"
            >
              Our Services
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-300"
            >
              Comprehensive digital solutions to help your business grow and succeed online
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-dark-800 rounded-xl border border-dark-700 overflow-hidden hover:border-teal-500 transition-colors"
              >
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-teal-500 bg-opacity-20 rounded-lg flex items-center justify-center">
                      <SafeIcon icon={service.icon} className="w-6 h-6 text-teal-500" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-2xl font-bold text-white">
                        {service.title}
                      </h3>
                      <p className="text-teal-400 font-semibold">
                        {service.pricing}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <SafeIcon icon={FiCheck} className="w-5 h-5 text-teal-500 mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-300">
              How we work with you to achieve your digital goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-dark-900 font-bold text-lg">{step.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-300">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why Choose Bajio Web Solutions?
              </h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <SafeIcon icon={FiCheck} className="w-6 h-6 text-teal-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white">Local Connecticut Expertise</h4>
                    <p className="text-gray-300">We understand the local market and business landscape in Connecticut.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <SafeIcon icon={FiCheck} className="w-6 h-6 text-teal-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white">Proven Track Record</h4>
                    <p className="text-gray-300">Over 150 successful projects with measurable results for our clients.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <SafeIcon icon={FiCheck} className="w-6 h-6 text-teal-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white">Transparent Reporting</h4>
                    <p className="text-gray-300">Regular, detailed reports so you always know how your investment is performing.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <SafeIcon icon={FiCheck} className="w-6 h-6 text-teal-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white">Dedicated Support</h4>
                    <p className="text-gray-300">24/7 support and dedicated account management for all our clients.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-teal-500 bg-opacity-20 rounded-xl blur-lg"></div>
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop"
                alt="Team working on projects"
                className="rounded-lg relative z-10"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-teal-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-white opacity-90">
            Let's discuss which services are right for your business
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
          >
            Book Your Free Website Audit
            <SafeIcon icon={FiArrowRight} className="ml-2 w-5 h-5" />
          </motion.a>
        </div>
      </section>
    </div>
  );
};

export default Services;