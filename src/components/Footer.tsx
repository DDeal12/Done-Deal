// Footer.tsx
import React from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import { Link } from "react-router-dom"; // Add this import

export default function Footer() {
  return (
    <footer className="bg-[#0f0f0f] text-gray-300 border-t border-gray-800 relative z-10">
      {/* Top Section */}
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Company Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl font-bold text-white mb-4">Done Deal Interiors</h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            Crafting premium woodwork for kitchens, living spaces, and bedrooms — blending traditional skills with modern design.
          </p>
          <div className="flex gap-4 mt-4">
            <a
              href="https://m.facebook.com/11donedeal/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition"
            >
              <FaFacebook size={20} />
            </a>
            <a
              href="https://www.instagram.com/donedealinteriors?igsh=MWRhdnRtNWJnM2tibw=="
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://www.tiktok.com/@donedeal911?_t=ZS-8yoiAikyWdL&_r=1"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition"
            >
              <FaTiktok size={20} />
            </a>
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
          <div className="flex gap-8">
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-pink-500 transition">Home</Link></li>
              <li><Link to="/showroom" className="hover:text-pink-500 transition">Showroom</Link></li>
              <li><Link to="/consultation" className="hover:text-pink-500 transition">Consultation</Link></li>
              <li><a href="#" className="hover:text-pink-500 transition">Contact</a></li>
            </ul>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-pink-500 transition">About Us</a></li>
              <li><a href="#" className="hover:text-pink-500 transition">Testimonials</a></li>
              <li><a href="#" className="hover:text-pink-500 transition">Services</a></li>
              <li><a href="#" className="hover:text-pink-500 transition">Craftsmanship</a></li>
            </ul>
          </div>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-xl font-bold text-white mb-4">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li>Email: <a href="mailto:info@donedealinteriors.com" className="hover:text-pink-500 transition">donedealinteriors@gmail.com</a></li>
            <li>Phone: <a href="tel:+27123456789" className="hover:text-pink-500 transition">+27 69 266 4403</a></li>
            <li>Location: Soshanguve -BB, 0152, South Africa</li>
          </ul>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Done Deal Interiors. All rights reserved.
      </div>
    </footer>
  );
}
