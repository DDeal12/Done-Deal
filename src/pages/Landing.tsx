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
			{/* Inline shimmer + glow styles */}
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
			<section className="relative min-h-[90vh] flex items-center justify-center text-center overflow-hidden">
				{/* Animated gradient background */}
				<div className="absolute inset-0 hero-gradient animate-hero-gradient"></div>
				<div className="absolute inset-0 bg-black/40"></div>

				{/* Hero Content */}
				<div className="relative z-10 px-6 max-w-3xl mx-auto space-y-6">
					{/* Logo */}
					<img
						src="/images/donedeal1.png"
						alt="Done Deal Logo"
						className="mx-auto w-24 md:w-32 mb-4"
					/>

					{/* Title */}
					<motion.h1
						className="text-4xl md:text-6xl font-bold leading-tight shimmer-text"
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
					>
						Done Deal Interiors
					</motion.h1>

					{/* Subtitle */}
					<motion.p
						className="text-lg md:text-xl text-gray-200"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.3, duration: 0.8 }}
					>
						Crafting premium woodwork for kitchens, living spaces, and bedrooms —
						blending traditional skills with modern design.
					</motion.p>

					{/* Buttons */}
					<motion.div
						className="flex flex-col sm:flex-row gap-4 justify-center"
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

				{/* Scoped CSS for Hero only */}
				<style>{`
					@keyframes hero-gradient-animation {
						0% { background-position: 0% 50%; }
						50% { background-position: 100% 50%; }
						100% { background-position: 0% 50%; }
					}
					.hero-gradient {
						background: linear-gradient(-45deg, #1a1a1a, #232323 30%, #374151 60%, #18181b 100%);
						background-size: 300% 300%;
					}
					.animate-hero-gradient {
						animation: hero-gradient-animation 18s ease infinite;
					}
				`}</style>
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
