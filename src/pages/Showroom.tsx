import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const projects = [
  { id: 1, category: 'Kitchen', image: '/images/kitchen/kit1.jpg' },
  { id: 2, category: 'Kitchen', image: '/images/kitchen/kit2.jpg' },
  { id: 3, category: 'Kitchen', image: '/images/kitchen/kit3.jpg' },
  { id: 4, category: 'Kitchen', image: '/images/kitchen/kit4.jpg' },
  { id: 5, category: 'Kitchen', image: '/images/kitchen/kit5.jpg' },
  { id: 6, category: 'Kitchen', image: '/images/kitchen/kit6.jpg' },
  { id: 7, category: 'Kitchen', image: '/images/kitchen/kit7.jpg' },
  { id: 8, category: 'Kitchen', image: '/images/kitchen/kit8.jpg' },
  { id: 9, category: 'Kitchen', image: '/images/kitchen/kit9.jpg' },
  { id: 10, category: 'Kitchen', image: '/images/kitchen/kit10.jpg' },
  { id: 11, category: 'Kitchen', image: '/images/kitchen/kit11.jpg' },
  // TVstands
  { id: 12, category: 'TVstands', image: '/images/tvstands/tv1.jpg' },
  { id: 13, category: 'TVstands', image: '/images/tvstands/tv2.jpg' },
  { id: 14, category: 'TVstands', image: '/images/tvstands/tv3.jpg' },
  { id: 15, category: 'TVstands', image: '/images/tvstands/tv4.jpg' },
  { id: 16, category: 'TVstands', image: '/images/tvstands/tv5.jpg' },
  { id: 17, category: 'TVstands', image: '/images/tvstands/tv6.jpg' },
  { id: 18, category: 'TVstands', image: '/images/tvstands/tv7.jpg' },
  { id: 19, category: 'TVstands', image: '/images/tvstands/tv8.jpg' },
  { id: 20, category: 'TVstands', image: '/images/tvstands/tv9.jpg' },
  { id: 21, category: 'TVstands', image: '/images/tvstands/tv10.jpg' },
  { id: 22, category: 'TVstands', image: '/images/tvstands/tv11.jpg' },
  { id: 23, category: 'TVstands', image: '/images/tvstands/tv12.jpg' },
  // Wardrobes
  { id: 24, category: 'Wardrobes', image: '/images/wardrobes/war1.jpg' },
  { id: 25, category: 'Wardrobes', image: '/images/wardrobes/war2.jpg' },
  { id: 26, category: 'Wardrobes', image: '/images/wardrobes/war3.jpg' },
  { id: 27, category: 'Wardrobes', image: '/images/wardrobes/war4.jpg' },
  { id: 28, category: 'Wardrobes', image: '/images/wardrobes/war5.jpg' },
  { id: 29, category: 'Wardrobes', image: '/images/wardrobes/war6.jpg' },
  { id: 30, category: 'Wardrobes', image: '/images/wardrobes/war7.jpg' },
  { id: 31, category: 'Wardrobes', image: '/images/wardrobes/war8.jpg' },
  { id: 32, category: 'Wardrobes', image: '/images/wardrobes/war9.jpg' },
  { id: 33, category: 'Wardrobes', image: '/images/wardrobes/war10.jpg' },
  { id: 34, category: 'Wardrobes', image: '/images/wardrobes/war11.jpg' },
  { id: 35, category: 'Wardrobes', image: '/images/wardrobes/war12.jpg' },
  { id: 36, category: 'Wardrobes', image: '/images/wardrobes/war13.jpg' },
];

const categories = ['All', 'Kitchen', 'TVstands', 'Wardrobes'];

type Project = {
  id: number;
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
                  alt=""
                  className="w-full object-cover rounded-t-2xl group-hover:scale-105 transition-transform duration-500"
                />
                {/* Removed star ratings */}
                <div className="p-6"></div>
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
                alt=""
                className="w-full h-96 object-cover rounded-t-2xl"
              />
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  {/* Removed star ratings in modal */}
                  <span className="bg-gray-100 text-black px-3 py-1 rounded-full text-sm font-medium shadow">{selectedProject.category}</span>
                </div>
                <div className="bg-[#232323] p-4 rounded-lg border-l-4 border-gray-300"></div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Showroom;
