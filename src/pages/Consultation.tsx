import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Phone, Mail, User, MessageSquare, Lightbulb, Ruler, FileText } from 'lucide-react';

const Consultation = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    preferredDate: '',
    preferredTime: ''
  });


  interface HandleSubmitEvent extends React.FormEvent<HTMLFormElement> {}

  const handleSubmit = (e: HandleSubmitEvent) => {
    e.preventDefault();
    // Construct the mailto link
    const subject = encodeURIComponent('New Consultation Request');
    const body = encodeURIComponent(
      `Name: ${formData.name}
  Email: ${formData.email}
  Phone: ${formData.phone}
  Service: ${formData.service}
  Preferred Date: ${formData.preferredDate}
  Preferred Time: ${formData.preferredTime}
  Message: ${formData.message}`
    );
    window.location.href = `mailto:donedealinteriors@gmail.com?subject=${subject}&body=${body}`;
  };

  interface HandleChangeEvent extends React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement> {}

  const handleChange = (e: HandleChangeEvent) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Replace the process steps with icons:
  const processSteps = [
    {
      icon: Lightbulb,
      text: "We'll discuss your vision, needs, and budget"
    },
    {
      icon: Ruler,
      text: "Site visit and measurements (if needed)"
    },
    {
      icon: FileText,
      text: "Detailed proposal and timeline"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-16 min-h-screen bg-gradient-to-br from-[#0f0f0f] via-[#1a1a1a] to-[#0f0f0f] text-white relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-white/20 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 -right-32 w-96 h-96 bg-white/10 rounded-full blur-[120px]" />
      </div>

      {/* Hero Section */}
      <section className="py-20 text-center relative z-10">
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-5xl md:text-6xl font-bold text-white mb-6"
        >
          Book Your Consultation
        </motion.h1>
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-300 max-w-3xl mx-auto px-4"
        >
          Your Done Deal begins here. Schedule a free consultation to discuss your vision 
          and discover how we can bring it to life.
        </motion.p>
      </section>

      <div className="max-w-7xl mx-auto px-4 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Contact Information */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="space-y-8"
          >
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 shadow-[0_8px_32px_rgba(0,0,0,0.3)] border border-white/20 transition-shadow hover:shadow-[0_0_40px_10px_rgba(255,255,255,0.25)]">
              <h2 className="text-2xl font-bold text-white mb-6">
                Get In Touch
              </h2>
              
              <div className="space-y-6">
                {[
                  { icon: Phone, label: 'Phone', value: '(+27) 69 266-4403' },
                  { icon: Mail, label: 'Email', value: 'donedealinteriors@gmail.com' },
                  { icon: MapPin, label: 'Location', value: 'Soshanguve-BB, 0152, South Africa' },
                  { icon: Clock, label: 'Hours', value: 'Mon-Fri: 8am-6pm\nSat: 9am-4pm' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#e5e4e2] to-[#232323] rounded-full flex items-center justify-center">
                      <item.icon className="text-black" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">{item.label}</h3>
                      <p className="text-gray-300 whitespace-pre-line">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Process Overview */}
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 text-white border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.25)] transition-shadow hover:shadow-[0_0_40px_10px_rgba(255,255,255,0.25)]">
              <h3 className="text-xl font-bold mb-4">What to Expect</h3>
              {processSteps.map((step, idx) => (
                <div key={idx} className="flex items-start space-x-3 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-[#e5e4e2] to-[#232323] rounded-full flex items-center justify-center mt-1">
                    <step.icon className="text-black" size={18} />
                  </div>
                  <p className="text-gray-200">{step.text}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Booking Form */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 shadow-[0_8px_32px_rgba(0,0,0,0.35)] border border-white/20 transition-shadow hover:shadow-[0_0_40px_10px_rgba(255,255,255,0.25)]">
              <h2 className="text-2xl font-bold text-white mb-6">
                Schedule Your Free Consultation
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name & Email */}
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { label: "Full Name *", name: "name", type: "text", icon: User, placeholder: "Your name", required: true },
                    { label: "Email Address *", name: "email", type: "email", icon: Mail, placeholder: "your@email.com", required: true }
                  ].map((field, idx) => (
                    <div key={idx}>
                      <label className="block text-sm font-medium text-gray-300 mb-2">{field.label}</label>
                      <div className="relative">
                        <field.icon className="absolute left-3 top-3 text-gray-400" size={20} />
                        <input
                          type={field.type}
                          name={field.name}
                          value={formData[field.name as keyof typeof formData]}
                          onChange={handleChange}
                          required={field.required}
                          className="w-full pl-10 pr-4 py-3 border border-white/20 rounded-lg focus:ring-2 focus:ring-gray-400 focus:border-transparent bg-white/20 backdrop-blur-md text-white placeholder-gray-400"
                          placeholder={field.placeholder}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Phone & Service */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Phone Number</label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 text-gray-400" size={20} />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 border border-white/20 rounded-lg focus:ring-2 focus:ring-gray-400 focus:border-transparent bg-white/20 backdrop-blur-md text-white placeholder-gray-400"
                        placeholder="(+27) 12 345-6789"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Service Interest</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-white/20 rounded-lg focus:ring-2 focus:ring-gray-400 focus:border-transparent bg-white/20 backdrop-blur-md text-black"
                    >
                      <option value="">Select a service</option>
                      <option value="kitchen">Custom Kitchen</option>
                      <option value="living">Living Room Built-ins</option>
                      <option value="bedroom">Bedroom Furniture</option>
                      <option value="office">Home Office</option>
                      <option value="millwork">Architectural Millwork</option>
                      <option value="furniture">Custom Furniture</option>
                    </select>
                  </div>
                </div>

                {/* Date & Time */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Preferred Date</label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-3 text-gray-400" size={20} />
                      <input
                        type="date"
                        name="preferredDate"
                        value={formData.preferredDate}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 border border-white/20 rounded-lg focus:ring-2 focus:ring-gray-400 focus:border-transparent bg-white/20 backdrop-blur-md text-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Preferred Time</label>
                    <div className="relative">
                      <Clock className="absolute left-3 top-3 text-gray-400" size={20} />
                      <select
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 border border-white/20 rounded-lg focus:ring-2 focus:ring-gray-400 focus:border-transparent bg-white/20 backdrop-blur-md text-black"
                      >
                        <option value="">Select time</option>
                        <option value="morning">Morning (9am-12pm)</option>
                        <option value="afternoon">Afternoon (12pm-5pm)</option>
                        <option value="evening">Evening (5pm-7pm)</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Project Description</label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 text-gray-400" size={20} />
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full pl-10 pr-4 py-3 border border-white/20 rounded-lg focus:ring-2 focus:ring-gray-400 focus:border-transparent bg-white/20 backdrop-blur-md text-white placeholder-gray-400 resize-none"
                      placeholder="Tell us about your project, space, and vision..."
                    />
                  </div>
                </div>

                {/* Button */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02, backgroundColor: "#e5e4e2" }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-[#e5e4e2] text-black py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-shadow border border-white/20"
                >
                  Your Done Deal Begins Here
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Consultation;
