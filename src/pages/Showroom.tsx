import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Filter } from 'lucide-react';

const projects = [
  // Kitchen
  {
    id: 1,
    title: 'Luxury Kitchen Island',
    category: 'Kitchen',
    image: '/images/kitchen/kit1.jpg',
    
  },
  {
    id: 2,
    title: 'Modern Cabinets',
    category: 'Kitchen',
    image: '/images/kitchen/kit2.jpg',
    
  },
  {
    id: 3,
    title: 'Wine Display Shelf',
    category: 'Kitchen',
    image: '/images/kitchen/kit3.jpg',
   
  },
  {
    id: 4,
    title: 'Pantry Organiser',
    category: 'Kitchen',
    image: '/images/kitchen/kit4.jpg',
    
  },
  {
    id: 5,
    title: 'Breakfast Nook',
    category: 'Kitchen',
    image: '/images/kitchen/kit5.jpg',
    
  },
  { id: 6,
    title: 'Kitchen Island',
    category: 'Kitchen',
    image: '/images/kitchen/kit6.jpg',
    
  },
  {
    id: 7,
    title: 'Kitchen Pantry',
    category: 'Kitchen',
    image: '/images/kitchen/kit7.jpg',
   
  },
  {
    id: 8,
    title: 'Kitchen Utensil Holder',
    category: 'Kitchen',
    image: '/images/kitchen/kit8.jpg',
    
  },
  {
    id: 9,
    title: 'Kitchen Spice Rack',
    category: 'Kitchen',
    image: '/images/kitchen/kit9.jpg',
   
  },
  {
    id: 10,
    title: 'Kitchen Counter Stools',
    category: 'Kitchen',
    image: '/images/kitchen/kit10.jpg',
    
  },
  {
    id: 11,
    title: 'Kitchen Island',
    category: 'Kitchen',
    image: '/images/kitchen/kit11.jpg',
   
  },
  // TVstands (was Lounge)
  {
    id: 6,
    title: 'Living Room Built-ins',
    category: 'TVstands',
    image: '/images/tvstands/tv1.jpg',
   
  },
  {
    id: 7,
    title: 'Bookshelf Wall',
    category: 'TVstands',
    image: '/images/tvstands/tv2.jpg',
   
  },
  {
    id: 8,
    title: 'Media Center',
    category: 'TVstands',
    image: '/images/tvstands/tv3.jpg',
   
  },
  {
    id: 9,
    title: 'Corner Reading Nook',
    category: 'TVstands',
    image: '/images/tvstands/tv4.jpg',
   
  },
  {
    id: 10,
    title: 'Decorative Panels',
    category: 'TVstands',
    image: '/images/tvstands/tv5.jpg',
    
  },
  {
    id: 11,
    title: 'Lounge Coffee Table',
    category: 'TVstands',
    image: '/images/tvstands/tv6.jpg',
   
  },
  {
    id: 12,
    title: 'Accent Chairs',
    category: 'TVstands',
    image: '/images/tvstands/tv7.jpg',
    
  },
  {
    id: 13,
    title: 'Lounge Sofa',
    category: 'TVstands',
    image: '/images/tvstands/tv8.jpg',
   
  },
  {
    id: 14,
    title: 'Lounge Side Table',
    category: 'TVstands',
    image: '/images/tvstands/tv9.jpg',
   
  },
  {
    id: 15,
    title: 'Lounge TV Stand',
    category: 'TVstands',
    image: '/images/tvstands/tv10.jpg',
    
  },
  {
    id: 16,
    title: 'Lounge Armchair',
    category: 'TVstands',
    image: '/images/tvstands/tv11.jpg',
   
  },
  {
    id: 17,
    title: 'Lounge Coffee Table',
    category: 'TVstands',
    image: '/images/tvstands/tv12.jpg',
    
  },
  // Wardrobes (was Custom Furniture)
  {
    id: 11,
    title: 'Executive Desk',
    category: 'Wardrobes',
    image: '/images/wardrobes/war1.jpg',
   
  },
  {
    id: 12,
    title: 'Dining Table Set',
    category: 'Wardrobes',
    image: '/images/wardrobes/war2.jpg',
    
  },
  {
    id: 13,
    title: 'Luxury Wardrobe',
    category: 'Wardrobes',
    image: '/images/wardrobes/war3.jpg',
    
  },
  {
    id: 14,
    title: 'Coffee Table',
    category: 'Wardrobes',
    image: '/images/wardrobes/war4.jpg',
   
  },
  {
    id: 15,
    title: 'Sideboard Cabinet',
    category: 'Wardrobes',
    image: '/images/wardrobes/war5.jpg',
    
  },
  {
    id: 16,
    title: 'Custom Bookshelves',
    category: 'Wardrobes',
    image: '/images/wardrobes/war6.jpg',
   
  },
  {
    id: 17,
    title: 'Luxury Wardrobe',
    category: 'Wardrobes',
    image: '/images/wardrobes/war7.jpg',
    
  },
  {
    id: 18,
    title: 'Custom Closet System',
    category: 'Wardrobes',
    image: '/images/wardrobes/war8.jpg',
   
  },
  {
    id: 19,
    title: 'Luxury Wardrobe',
    category: 'Wardrobes',
    image: '/images/wardrobes/war9.jpg',
    
  },
  {
    id: 20,
    title: 'Custom Wardrobe',
    category: 'Wardrobes',
    image: '/images/wardrobes/war10.jpg',
    
  },
  {
    id: 21,
    title: 'Custom Wardrobe',
    category: 'Wardrobes',
    image: '/images/wardrobes/war11.jpg',
   
  },
  {
    id: 22,
    title: 'Custom Wardrobe',
    category: 'Wardrobes',
    image: '/images/wardrobes/war12.jpg',
    
  },
  {
    id: 23,
    title: 'Custom Wardrobe',
    category: 'Wardrobes',
    image: '/images/wardrobes/war13.jpg',
   
  },
  
];

const categories = ['All', 'Kitchen', 'TVstands', 'Wardrobes', ];

type Project = {
  id: number;
  title: string;
  category: string;
  image: string;
};

const Showroom = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState('All');

  const filteredProjects =
    filter === 'All'
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-16 min-h-screen bg-gradient-to-b from-[#0a0a0a] to-[#1e1e1e] text-white relative overflow-hidden"
    >
      {/* Header */}
      <section className="py-20 text-center relative z-10">
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-5xl md:text-6xl font-bold text-white mb-6"
        >
          Virtual Showroom
        </motion.h1>
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-300 max-w-2xl mx-auto px-4"
        >
          Explore our gallery of handcrafted masterpieces. Each piece tells a unique story of artisanship and attention to detail.
        </motion.p>

        {/* Filter buttons */}
        <div className="mt-8 flex justify-center flex-wrap gap-4 z-10">
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full font-medium transition-colors border
                ${
                  filter === category
                    ? 'bg-gray-100 text-black border-gray-300 shadow-md'
                    : 'bg-[#181818] text-gray-300 border-gray-700 hover:bg-gray-100 hover:text-black'
                }`}
            >
              {category}
            </motion.button>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <div className="max-w-7xl mx-auto px-4 pb-20 relative z-10">
        <motion.div layout className="columns-1 md:columns-2 lg:columns-3 gap-6">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="break-inside mb-6 bg-[#181818] rounded-2xl overflow-hidden shadow-lg cursor-pointer group border border-gray-700 relative"
                onClick={() => setSelectedProject(project)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full object-cover rounded-t-2xl group-hover:scale-105 transition-transform duration-500"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                  
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-[#181818] rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto border border-gray-700 text-white relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 bg-[#232323]/80 rounded-full p-2 hover:bg-gray-100 hover:text-black transition-colors"
              >
                <X size={24} />
              </button>
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-96 object-cover rounded-t-2xl"
              />
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-3xl font-bold text-white">{selectedProject.title}</h2>
                  <span className="bg-gray-100 text-black px-3 py-1 rounded-full text-sm font-medium shadow">{selectedProject.category}</span>
                </div>
                
               

                <div className="bg-[#232323] p-4 rounded-lg border-l-4 border-gray-300">
                
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Showroom;
