// LandingPage.tsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { Link } from "react-router-dom"; // Add this import

const sections = [
	{
		image: "/images/kitchen3d.png",
		title: "Modern Kitchen Concept",
		description:
			"Experience a cutting-edge kitchen design that blends minimalism with warmth. Our concepts inspire creativity and functionality in your everyday space.",
		reverse: false,
	},
	{
		image: "/images/livingroom3d.png",
		title: "Luxury Living Space",
		description:
			"Step into a serene living environment designed with premium textures and natural light balance — perfect for relaxation or entertaining guests.",
		reverse: true,
	},
	{
		image: "/images/bedroom3d.png",
		title: "Cozy Bedroom Retreat",
		description:
			"Unwind in a tranquil bedroom designed for comfort and restful sleep, featuring soft textures and calming tones.",
		reverse: false,
	},
];

const faqs = [
	{
		question: "How long does a typical kitchen remodel take?",
		answer:
			"Most kitchen remodels take between 4–8 weeks depending on complexity, size, and customization requirements.",
	},
	{
		question: "Do you offer custom furniture design?",
		answer:
			"Yes, we specialize in custom woodwork tailored to your space, style, and functional needs.",
	},
	{
		question: "Can you match my existing home style?",
		answer:
			"Absolutely — we work closely with you to ensure new designs seamlessly blend with your current aesthetic.",
	},
	{
		question: "Do you provide 3D design previews?",
		answer:
			"Yes, we offer detailed 3D renders so you can visualize the final result before we begin.",
	},
];

export default function LandingPage() {
	const [openIndex, setOpenIndex] = useState<number | null>(null);

	return (
		<div className="bg-gradient-to-b from-[#0f0f0f] to-[#1a1a1a] text-white relative overflow-hidden">
			{/* Inline shimmer styles */}
			<style>{`
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        .shimmer-text {
          background: linear-gradient(
            120deg,
            rgba(255,255,255,0.1) 0%,
            rgba(255,255,255,0.6) 20%,
            rgba(255,255,255,0.1) 40%
          );
          background-size: 200% 100%;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: shimmer 3s infinite linear;
        }
        .glow-blob {
          position: absolute;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(255,255,255,0.06), transparent 70%);
          filter: blur(80px);
          z-index: 0;
        }
      `}</style>

			{/* HERO */}
			<section className="relative min-h-[90vh] flex items-center">
				<div className="absolute inset-0 bg-[#0f0f0f] z-0 clip-diagonal" />
				<div className="container mx-auto px-6 flex flex-col md:flex-row items-center relative z-10">
					{/* Left Side (Text) */}
					<div className="flex-1 text-left space-y-6">
						<motion.h1
							className="text-5xl md:text-6xl font-bold leading-tight shimmer-text"
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.1 }}
						>
							Done Deal Interiors
						</motion.h1>
						<motion.p
							className="text-lg text-gray-300 max-w-md"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.3, duration: 0.8 }}
						>
							Crafting premium woodwork for kitchens, living spaces, and bedrooms
							— blending traditional skills with modern design.
						</motion.p>
						<motion.div
							className="flex gap-4"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.5, duration: 0.8 }}
						>
							<Link
								to="/showroom"
								className="px-6 py-3 bg-white text-black font-medium rounded-lg hover:bg-gray-200 transition"
							>
								Go to Showroom
							</Link>
							<Link
								to="/consultation"
								className="px-6 py-3 border border-white font-medium rounded-lg hover:bg-white hover:text-black transition"
							>
								Book Consultation
							</Link>
						</motion.div>
					</div>

					{/* Right Side (Image) */}
					<motion.div
						className="flex-1 flex justify-center items-center"
						initial={{ opacity: 0, x: 50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.4, duration: 0.8 }}
					>
						<img
							src="/images/2.jpeg"
							alt="Carpentry Showcase"
							className="rounded-xl shadow-lg border border-gray-700"
						/>
					</motion.div>
				</div>
			</section>

			{/* MAIN SECTIONS */}
			<div className="px-6 py-16 space-y-16 md:space-y-24 max-w-6xl mx-auto relative z-10">
				{sections.map((sec, i) => (
					<motion.div
						key={i}
						className={`relative rounded-2xl p-8 ${
							sec.reverse ? "bg-[#141414]" : "bg-[#181818]"
						} flex flex-col ${
							sec.reverse ? "md:flex-row-reverse" : "md:flex-row"
						} items-center gap-8 md:gap-10 overflow-hidden`}
						initial={{ opacity: 0, y: 40 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8, ease: "easeOut" }}
					>
						{/* Glow Blob */}
						<div
							className="glow-blob"
							style={{
								top: sec.reverse ? "-100px" : "auto",
								bottom: sec.reverse ? "auto" : "-100px",
								left: sec.reverse ? "auto" : "-100px",
								right: sec.reverse ? "-100px" : "auto",
							}}
						/>

						{/* Image */}
						<Tilt
							glareEnable={false}
							tiltMaxAngleX={5}
							tiltMaxAngleY={5}
							scale={1.05}
							transitionSpeed={2500}
							className="w-full md:w-1/2 relative z-10"
						>
							<motion.img
								src={sec.image}
								alt={sec.title}
								className="rounded-xl shadow-[0_0_40px_rgba(255,255,255,0.05)] border border-transparent bg-gradient-to-br from-white/10 to-white/5 p-[2px]"
								initial={{ scale: 0.95, opacity: 0 }}
								whileInView={{ scale: 1, opacity: 1 }}
								transition={{ duration: 0.8, ease: "easeOut" }}
							/>
						</Tilt>

						{/* Info */}
						<motion.div
							className="w-full md:w-1/2 space-y-4 relative z-10"
							initial={{ opacity: 0, x: sec.reverse ? -40 : 40 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{
								duration: 0.8,
								ease: "easeOut",
								delay: 0.2,
							}}
						>
							<h2 className="text-4xl font-bold relative inline-block">
								{sec.title}
								<span className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"></span>
							</h2>
							<p className="text-lg text-gray-300 leading-relaxed">
								{sec.description}
							</p>
						</motion.div>
					</motion.div>
				))}
			</div>

			{/* FAQ Section */}
			<section className="bg-[#141414] py-16 px-6 relative z-10">
				<div className="max-w-4xl mx-auto">
					<h2 className="text-4xl font-bold text-center mb-10">
						Frequently Asked Questions
					</h2>
					<div className="space-y-4">
						{faqs.map((faq, index) => (
							<div
								key={index}
								className="border border-gray-700 rounded-lg overflow-hidden"
							>
								<button
									className="w-full flex justify-between items-center px-6 py-4 text-left hover:bg-[#1c1c1c] transition"
									onClick={() =>
										setOpenIndex(
											openIndex === index ? null : index
										)
									}
								>
									<span className="font-medium">{faq.question}</span>
									<motion.span
										animate={{
											rotate: openIndex === index ? 45 : 0,
										}}
										transition={{ duration: 0.2 }}
										className="text-white-500 text-2xl leading-none"
									>
										+
									</motion.span>
								</button>
								<AnimatePresence>
									{openIndex === index && (
										<motion.div
											initial={{ height: 0, opacity: 0 }}
											animate={{ height: "auto", opacity: 1 }}
											exit={{ height: 0, opacity: 0 }}
											transition={{ duration: 0.3 }}
											className="px-6 pb-4 text-gray-300"
										>
											{faq.answer}
										</motion.div>
									)}
								</AnimatePresence>
							</div>
						))}
					</div>
				</div>
			</section>
		</div>
	);
}
