import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Home, 
  Utensils, 
  Sofa, 
  Bed, 
  Briefcase, 
  Settings, 
  ChevronRight,
  Star 
} from 'lucide-react';

const services = [
  {
    icon: Utensils,
    title: 'Custom Kitchens',
    description: 'Complete kitchen solutions with custom cabinetry, islands, and built-in storage.',
    features: ['Custom Cabinetry', 'Kitchen Islands', 'Pantry Solutions', 'Wine Storage']
  },
  {
    icon: Sofa,
    title: 'Living Room Built-ins',
    description: 'Entertainment centers, bookshelves, and storage solutions that blend seamlessly.',
    features: ['Entertainment Centers', 'Built-in Shelving', 'Media Storage', 'Custom Lighting']
  },
  {
    icon: Bed,
    title: 'Bedroom Furniture',
    description: 'Handcrafted beds, wardrobes, and nightstands designed for your space.',
    features: ['Custom Beds', 'Wardrobes', 'Nightstands', 'Dressing Tables']
  },
  {
    icon: Briefcase,
    title: 'Home Office',
    description: 'Productive workspaces with custom desks, shelving, and filing solutions.',
    features: ['Executive Desks', 'Built-in Shelving', 'Filing Systems', 'Cable Management']
  },
  {
    icon: Home,
    title: 'Architectural Millwork',
    description: 'Crown molding, wainscoting, and trim work to enhance your home\'s character.',
    features: ['Crown Molding', 'Wainscoting', 'Trim Work', 'Coffered Ceilings']
  },
  {
    icon: Settings,
    title: 'Custom Furniture',
    description: 'One-of-a-kind pieces designed specifically for your needs and style.',
    features: ['Dining Tables', 'Coffee Tables', 'Bookcases', 'Unique Pieces']
  }
];

const Services = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-16 min-h-screen bg-gradient-to-b from-[#0f0f0f] to-[#1a1a1a] text-white"
    >
      {/* Hero Section */}
      <section className="py-20 text-center">
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-5xl md:text-6xl font-bold text-white mb-6"
        >
          Our Services
        </motion.h1>
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-300 max-w-3xl mx-auto px-4"
        >
          From concept to completion, we offer comprehensive carpentry services 
          that transform your vision into reality.
        </motion.p>
      </section>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 pb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-[#181818] rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-700"
              >
                <div className="flex items-center mb-6">
                  <motion.div
                    whileHover={{ scale: 1.15, boxShadow: "0 0 15px rgba(255,255,255,0.8)" }}
                    className="w-16 h-16 bg-[#2a2a2a] rounded-full flex items-center justify-center mr-4 transition-shadow"
                  >
                    <Icon className="text-white" size={28} />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white">
                    {service.title}
                  </h3>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div>
                  <h4 className="font-semibold text-gray-100 mb-3">What's Included:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <Star className="text-gray-100 mr-2" size={16} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-20 space-y-16">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="text-center bg-gradient-to-r from-[#222] to-[#333] rounded-3xl p-12 text-white shadow-lg"
          >
            <h2 className="text-3xl font-bold mb-4">
              Seen enough? Let's bring yours to life.
            </h2>
            <p className="text-gray-300 mb-8 text-lg">
              Ready to transform your space with custom carpentry? Our consultation is free.
            </p>
            <Link to="/consultation">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-black px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                Schedule Free Consultation
              </motion.button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="bg-[#181818] rounded-3xl p-12 shadow-lg text-center border border-gray-700"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Why Choose Done Deal?
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mt-8">
              <div>
                <div className="text-4xl font-bold text-white mb-2">25+</div>
                <p className="text-gray-300">Years Experience</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">500+</div>
                <p className="text-gray-300">Projects Completed</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">100%</div>
                <p className="text-gray-300">Satisfaction Rate</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Services;
