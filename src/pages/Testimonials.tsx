import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sarah M.",
    feedback:
      "Done Deal completely transformed my kitchen! Every cabinet is perfectly fitted, and the craftsmanship is top-tier. I couldn't be happier.",
  },
  {
    name: "James K.",
    feedback:
      "I had a custom wardrobe built and the attention to detail is unmatched. They worked around my schedule and delivered exactly what I wanted.",
  },
  {
    name: "Lerato D.",
    feedback:
      "My TV interior wall now looks like it belongs in a showroom. The design blends seamlessly with the rest of my living room.",
  },
  {
    name: "Michael P.",
    feedback:
      "Swift, reliable, and professional. They handled my bedroom wardrobe installation in record time without cutting corners.",
  },
  {
    name: "Nomsa T.",
    feedback:
      "I love how they kept me updated through every step. Communication was clear and they genuinely cared about my satisfaction.",
  },
  {
    name: "Ethan R.",
    feedback:
      "The quality of materials is phenomenal. It’s rare to find craftsmanship like this these days.",
  },
  {
    name: "Thandiwe M.",
    feedback:
      "They built a custom kitchen island for me and it’s now my favorite spot in the house. The finish is flawless.",
  },
  {
    name: "Jason N.",
    feedback:
      "On-time delivery, great work ethic, and stunning results. I’ll definitely be coming back for future projects.",
  },
  {
    name: "Zanele K.",
    feedback:
      "From concept to completion, the process was smooth and stress-free. My home feels brand new.",
  },
];

const Testimonials = () => {
  return (
    <div className="min-h-screen pt-16 pb-20 px-4 bg-gradient-to-b from-[#0f0f0f] via-[#151a1a] to-[#121212]">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          What Our Clients Say
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Real feedback from real projects — kitchens, wardrobes, and interiors
          that turn houses into homes.
        </p>
      </motion.div>

      {/* Divider */}
      <div className="h-[2px] max-w-xs mx-auto mb-12 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-full"></div>

      {/* Testimonials */}
      <div className="max-w-4xl mx-auto space-y-6">
        {testimonials.map((t, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="p-6 rounded-xl bg-white/5 border border-white/10 shadow-lg hover:shadow-white/10 transition duration-300"
          >
            <p className="text-gray-200 text-lg italic mb-4">
              "{t.feedback}"
            </p>
            <p className="text-gray-400 text-sm">— {t.name}</p>
          </motion.div>
        ))}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-sm text-gray-400 italic text-center mt-10"
        >
          Note: We have many more testimonials from our happy clients. For this
          page, we’ve chosen to display just a selection.
        </motion.p>
      </div>
    </div>
  );
};

export default Testimonials;
                                                            