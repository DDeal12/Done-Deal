import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Users,
  Award,
  TrendingUp,
  Briefcase,
  Star,
  Lightbulb,
  Shield,
  HeartHandshake,
} from "lucide-react";

const milestones = [
  {
    year: "1991",
    title: "Humble Beginnings",
    description:
      "At 16, Thamsanqa began sketching and crafting small furniture concepts, selling them in the streets and to local households to make ends meet.",
    icon: Users,
  },
  {
    year: "1998",
    title: "Formal Training",
    description:
      "Self-funded his studies in design and carpentry, later pursuing internationally recognized certifications to refine his craft.",
    icon: Briefcase,
  },
  {
    year: "2000",
    title: "Done Deal Interiors is Born",
    description:
      "Officially launched the company as a one-man workshop delivering bespoke furniture for local clients.",
    icon: Star,
  },
  {
    year: "2008",
    title: "First Major Project",
    description:
      "Completed our first large-scale interior design project, setting a new standard for craftsmanship in the region.",
    icon: Award,
  },
  {
    year: "2015",
    title: "Recognition & Awards",
    description:
      "Earned multiple local and national awards for excellence in design and carpentry.",
    icon: Award,
  },
  {
    year: "2023",
    title: "Expansion & Growth",
    description:
      "Now serving clients nationwide, with an expanded service range while maintaining our personal touch.",
    icon: TrendingUp,
  },
];

const values = [
  { icon: Star, title: "Craftsmanship", desc: "Meticulous, durable, and detail-driven." },
  { icon: Lightbulb, title: "Innovation", desc: "Modern methods, timeless results." },
  { icon: Shield, title: "Integrity", desc: "Transparent process and honest timelines." },
  { icon: HeartHandshake, title: "Client Focus", desc: "Your vision, executed precisely." },
];

const visionFullText = `Build spaces that feel personal, timeless, and impeccably crafted—where every detail serves the people who live with it. The goal is simple: deliver work we’re proud to sign.

We believe in:
• Listening deeply to your needs and lifestyle.
• Designing with both beauty and function in mind.
• Using only the finest, most durable materials.
• Honoring deadlines and your trust.
• Leaving every client with a space that inspires pride and comfort.

At Done Deal Interiors, your vision becomes our mission—crafted with care, integrity, and a relentless pursuit of excellence.`;

const About = () => {
  // Typewriter effect for vision
  const [visionText, setVisionText] = useState("");
  useEffect(() => {
    let i = 0;
    const speed = 18; // ms per character
    let timeout: ReturnType<typeof setTimeout>;

    function type() {
      if (i <= visionFullText.length) {
        setVisionText(visionFullText.slice(0, i));
        i++;
        timeout = setTimeout(type, speed);
      }
    }
    type();
    return () => clearTimeout(timeout);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      // Darker, richer gradient with subtle blue and platinum hints
      className="pt-16 min-h-screen relative bg-gradient-to-br from-[#18191a] via-[#23272b] to-[#101113] text-white"
    >
      {/* Subtle accent gradient blobs for depth */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        {/* Top left cool blue/platinum glow */}
        <div className="absolute -top-40 -left-40 w-[420px] h-[420px] bg-gradient-to-br from-[#6b7a8f]/30 via-[#23272b]/0 to-transparent rounded-full blur-[120px]" />
        {/* Bottom right soft platinum/grey glow */}
        <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-gradient-to-tr from-[#e5e4e2]/20 via-[#232323]/0 to-transparent rounded-full blur-[100px]" />
      </div>

      {/* Founder Highlight */}
      <section className="py-20 text-center max-w-4xl mx-auto px-4">
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-5xl md:text-6xl font-bold mb-6"
        >
          About Done Deal Interiors
        </motion.h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-10">
          Led by founder <span className="font-semibold text-white">Thamsanqa Mathebula</span>,
          Done Deal Interiors blends traditional craftsmanship with modern design to create
          interiors that stand the test of time.
        </p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white/5 border border-white/10 rounded-2xl p-8 shadow-lg backdrop-blur-md max-w-2xl mx-auto"
          style={{ boxShadow: "0 0 20px rgba(255,255,255,0.15)" }}
        >
          {/* Logo space (replace the filename with your actual logo in /public/images) */}
          <div className="mb-6">
           <img
  src="/images/donedeal1.png"
  alt="Done Deal Logo"
  className="mx-auto mb-4 w-28 h-28 object-contain"
/>

          </div>

          <h2 className="text-2xl font-bold text-white mb-1">Thamsanqa Mathebula</h2>
          <p className="text-gray-400 mb-4">Founder & Master Craftsman</p>
          <p className="text-gray-300 leading-relaxed">
            Born in 1975, Thamsanqa Mathebula — known to many simply as “Thami” — discovered his
            passion for design at an early age. At just 16, he began sketching and crafting small
            furniture concepts, selling them in the streets and to local households to make ends meet.
            <br /><br />
            With grit and determination, he used those early earnings to fund his education in design
            and carpentry, later pursuing internationally recognized certifications that sharpened his
            expertise. Over the decades, he transformed what started as a modest dream into{" "}
            <strong>Done Deal Interiors</strong> — renowned for precision, artistry, and the ability
            to blend traditional craftsmanship with modern innovation.
            <br /><br />
            Thami’s story is one of perseverance and vision — turning humble beginnings into a legacy
            of excellence that elevates every project he touches.
          </p>
        </motion.div>
      </section>

      {/* Timeline */}
      <section className="relative max-w-4xl mx-auto px-4 pb-20">
        {/* Vertical Line */}
        <div className="absolute left-1/2 -translate-x-1/2 h-full w-[2px] bg-white/20" />

        <div className="space-y-16">
          {milestones.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`relative flex items-center ${
                  idx % 2 === 0 ? "flex-row" : "flex-row-reverse"
                } md:flex-row`}
              >
                {/* Icon with white glow */}
                <div className="absolute left-1/2 -translate-x-1/2">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center bg-white/10 border border-white/20 backdrop-blur-sm"
                    style={{ boxShadow: "0 0 15px rgba(255,255,255,0.4)" }}
                  >
                    <Icon className="text-white" size={24} />
                  </div>
                </div>

                {/* Content Card */}
                <div
                  className={`bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-md shadow-lg max-w-md ${
                    idx % 2 === 0 ? "ml-auto md:ml-16" : "mr-auto md:mr-16"
                  }`}
                  style={{ boxShadow: "0 0 10px rgba(255,255,255,0.08)" }}
                >
                  <span className="text-sm text-gray-400">{item.year}</span>
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  <p className="text-gray-300 mt-2">{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Values */}
      <section className="bg-transparent py-20">
        <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
        <div className="max-w-6xl mx-auto grid gap-8 px-4 md:grid-cols-4">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <motion.div
                key={i}
                whileHover={{ scale: 1.04 }}
                className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 text-center shadow-lg"
                style={{ boxShadow: "0 0 15px rgba(255,255,255,0.12)" }}
              >
                <div
                  className="w-14 h-14 mx-auto mb-4 rounded-full bg-white/10 border border-white/20 flex items-center justify-center"
                  style={{ boxShadow: "0 0 10px rgba(255,255,255,0.25)" }}
                >
                  <Icon size={24} className="text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-1">{v.title}</h3>
                <p className="text-gray-400">{v.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Vision */}
      <section className="py-20 text-center">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-10 shadow-lg"
          style={{ boxShadow: "0 0 20px rgba(255,255,255,0.15)" }}
        >
          <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
          <pre className="text-lg text-gray-300 whitespace-pre-line text-left font-sans min-h-[220px]">
            {visionText}
            <span className="animate-pulse text-white">|</span>
          </pre>
        </motion.div>
      </section>
    </motion.div>
  );
};

export default About;
