import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiCalendar, FiUser, FiArrowRight, FiClock } = FiIcons;

const Blog = () => {
  const featuredPost = {
    id: 1,
    title: 'The Complete Guide to Digital Marketing for Small Businesses in Connecticut',
    excerpt: 'Learn how Connecticut small businesses can leverage digital marketing to compete with larger companies and grow their customer base.',
    content: `Digital marketing has become essential for small businesses in Connecticut looking to compete in today's marketplace. With the right strategies, even the smallest local business can reach customers across the state and beyond.

    In this comprehensive guide, we'll explore the key digital marketing strategies that work best for Connecticut businesses, from SEO optimization for local search to social media marketing that resonates with New England audiences.

    **Why Digital Marketing Matters for Connecticut Businesses**

    Connecticut's business landscape is unique. With a mix of urban areas like Hartford and New Haven, alongside rural communities, businesses need to adapt their marketing strategies to reach diverse audiences. Digital marketing provides the flexibility to target specific geographic areas, demographics, and interests.

    **Key Strategies for Success:**

    1. **Local SEO**: Optimize for "near me" searches and local keywords
    2. **Google My Business**: Claim and optimize your listing
    3. **Social Media**: Build community connections on platforms where your customers spend time
    4. **Content Marketing**: Share valuable insights about your industry and local community
    5. **Email Marketing**: Stay connected with customers and prospects

    **Getting Started**

    The key to successful digital marketing is starting with a clear strategy. Identify your target audience, understand their online behavior, and create content that provides value. Remember, consistency is more important than perfection when you're just getting started.`,
    author: 'Alex Rodriguez',
    date: '2024-01-15',
    readTime: '8 min read',
    category: 'Digital Marketing',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop',
    featured: true
  };

  const blogPosts = [
    {
      id: 2,
      title: 'SEO Trends to Watch in 2024',
      excerpt: 'Stay ahead of the curve with these emerging SEO trends that will shape search rankings this year.',
      author: 'Sarah Chen',
      date: '2024-01-10',
      readTime: '5 min read',
      category: 'SEO',
      image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=400&h=250&fit=crop',
    },
    {
      id: 3,
      title: 'Social Media Marketing for Local Businesses',
      excerpt: 'How to build a strong social media presence that drives real business results for local companies.',
      author: 'Mike Johnson',
      date: '2024-01-05',
      readTime: '6 min read',
      category: 'Social Media',
      image: 'https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=400&h=250&fit=crop',
    },
    {
      id: 4,
      title: 'Website Design Best Practices for 2024',
      excerpt: 'Essential design principles that will make your website stand out and convert better.',
      author: 'Sarah Chen',
      date: '2023-12-28',
      readTime: '7 min read',
      category: 'Web Design',
      image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=400&h=250&fit=crop',
    },
    {
      id: 5,
      title: 'Google Ads vs Facebook Ads: Which is Right for Your Business?',
      excerpt: 'A comprehensive comparison of the two major advertising platforms to help you choose the right one.',
      author: 'Mike Johnson',
      date: '2023-12-20',
      readTime: '9 min read',
      category: 'PPC',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=250&fit=crop',
    },
    {
      id: 6,
      title: 'Content Marketing Strategy for Small Businesses',
      excerpt: 'How to create a content marketing strategy that drives traffic and generates leads.',
      author: 'Alex Rodriguez',
      date: '2023-12-15',
      readTime: '8 min read',
      category: 'Content Marketing',
      image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=250&fit=crop',
    },
  ];

  const categories = [
    'All',
    'Digital Marketing',
    'SEO',
    'Social Media',
    'Web Design',
    'PPC',
    'Content Marketing'
  ];

  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const [selectedPost, setSelectedPost] = React.useState(null);

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  if (selectedPost) {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Article Header */}
        <div className="bg-white shadow-sm">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <button
              onClick={() => setSelectedPost(null)}
              className="flex items-center text-primary-600 hover:text-primary-700 mb-6"
            >
              <SafeIcon icon={FiArrowRight} className="w-5 h-5 mr-2 rotate-180" />
              Back to Blog
            </button>
            
            <div className="mb-6">
              <span className="inline-block bg-primary-100 text-primary-800 text-sm font-medium px-3 py-1 rounded-full">
                {selectedPost.category}
              </span>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {selectedPost.title}
            </h1>
            
            <div className="flex items-center text-gray-600 mb-6">
              <SafeIcon icon={FiUser} className="w-5 h-5 mr-2" />
              <span className="mr-6">{selectedPost.author}</span>
              <SafeIcon icon={FiCalendar} className="w-5 h-5 mr-2" />
              <span className="mr-6">{formatDate(selectedPost.date)}</span>
              <SafeIcon icon={FiClock} className="w-5 h-5 mr-2" />
              <span>{selectedPost.readTime}</span>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <img
              src={selectedPost.image}
              alt={selectedPost.title}
              className="w-full h-64 md:h-96 object-cover"
            />
            <div className="p-8">
              <div className="prose prose-lg max-w-none">
                {selectedPost.content.split('\n\n').map((paragraph, index) => {
                  if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                    return (
                      <h3 key={index} className="text-xl font-bold text-gray-900 mt-8 mb-4">
                        {paragraph.replace(/\*\*/g, '')}
                      </h3>
                    );
                  }
                  return (
                    <p key={index} className="text-gray-700 mb-6 leading-relaxed">
                      {paragraph}
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Our Blog
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl max-w-3xl mx-auto text-blue-100"
            >
              Insights, tips, and strategies to help your business succeed in the digital world
            </motion.p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="relative">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-64 lg:h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </span>
                </div>
              </div>
              <div className="p-8 lg:p-12">
                <div className="mb-4">
                  <span className="inline-block bg-primary-100 text-primary-800 text-sm font-medium px-3 py-1 rounded-full">
                    {featuredPost.category}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  {featuredPost.title}
                </h2>
                <p className="text-gray-600 mb-6">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center text-gray-500 text-sm mb-6">
                  <SafeIcon icon={FiUser} className="w-4 h-4 mr-2" />
                  <span className="mr-4">{featuredPost.author}</span>
                  <SafeIcon icon={FiCalendar} className="w-4 h-4 mr-2" />
                  <span className="mr-4">{formatDate(featuredPost.date)}</span>
                  <SafeIcon icon={FiClock} className="w-4 h-4 mr-2" />
                  <span>{featuredPost.readTime}</span>
                </div>
                <button
                  onClick={() => setSelectedPost(featuredPost)}
                  className="bg-primary-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors inline-flex items-center"
                >
                  Read More
                  <SafeIcon icon={FiArrowRight} className="ml-2 w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-12 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
                onClick={() => setSelectedPost(post)}
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="mb-3">
                    <span className="inline-block bg-primary-100 text-primary-800 text-sm font-medium px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-gray-500 text-sm">
                    <div className="flex items-center">
                      <SafeIcon icon={FiUser} className="w-4 h-4 mr-1" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center">
                      <SafeIcon icon={FiCalendar} className="w-4 h-4 mr-1" />
                      <span>{formatDate(post.date)}</span>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Stay Updated
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Get the latest digital marketing insights delivered to your inbox
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-l-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <button className="bg-secondary-600 px-6 py-3 rounded-r-lg font-medium hover:bg-secondary-700 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;